# TRD — 카페 메뉴판 (Excel 구동)

PRD의 요구사항을 어떻게 구현하는지 정의한다. 기능 정의는 [PRD.md](PRD.md)가 기준이다.

## 1. 기술 스택

| 영역 | 선택 | 이유 |
|---|---|---|
| 런타임 | Node.js 20+ (ESM, `.mjs`) | 내장 test runner·`fetch` 사용, 빌드 단계 없음 |
| 서버 | Express | 정적 파일 + JSON API + SSE를 최소 코드로 처리 |
| 파일 감시 | chokidar | 플랫폼별 fs 이벤트 차이를 흡수 |
| Excel 파싱 | xlsx (SheetJS 0.20.3, 공식 CDN tarball) | npm 레지스트리 버전(0.18.5)은 구버전 |
| 실시간 | SSE | 단방향 읽기 전용 표시에는 WebSocket이 과하다 |
| 클라이언트 | 바닐라 JS, 빌드 없음 | 강의 예제의 단순성 유지 |
| 테스트 | `node:test` + `node:assert` | 의존성 추가 없음 |

`package.json` 의존성:

```json
"xlsx": "https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz"
```

## 2. 디렉터리 구조

```text
exer-manupan/
├── package.json
├── server.mjs              # 부팅·라우팅·감시·SSE 연결만 담당
├── src/
│   ├── parseWorkbook.mjs   # 순수 함수: workbook → { settings, pages }
│   ├── parseSettings.mjs   # 순수 함수: _설정 시트 → settings (기본값 적용)
│   ├── watcher.mjs         # chokidar + 300ms 디바운스
│   └── sseHub.mjs          # SSE 클라이언트 등록·브로드캐스트
├── data/
│   └── menu.xlsx
├── public/
│   ├── index.html
│   ├── client.js           # SSE 수신 + 렌더링 조립
│   ├── render.js           # 순수 함수: 데이터 → HTML 문자열/노드
│   └── templates/
│       ├── board-grid.css  # 공통 레이아웃(테마 변수 기반)
│       ├── cafe-dark.css
│       └── bistro-light.css
├── test/
│   ├── parseWorkbook.test.mjs
│   ├── parseSettings.test.mjs
│   ├── render.test.mjs
│   ├── watcher.test.mjs
│   └── server.test.mjs
└── docs/
```

`src/`와 `render.js`는 테스트 가능성을 위해 분리한 것이다. 로직은 부수 효과 없는 순수 함수로 두고, `server.mjs`·`client.js`는 얇은 조립 코드로 유지한다.

## 3. 데이터 모델

`parseWorkbook`의 출력이자 `GET /api/menu`의 응답 본문이다.

```json
{
  "settings": { "storeName": "빌런 커피", "theme": "cafe-dark", "autoRotateSec": 0 },
  "pages": [
    {
      "name": "커피",
      "items": [
        { "name": "아메리카노", "price": 4500, "description": "깔끔한 산미", "soldOut": false, "category": "에스프레소" }
      ]
    }
  ]
}
```

- `price`: number. 숫자가 아닌 행은 파싱 단계에서 제외한다.
- `soldOut`: `품절` 셀이 `Y`(대소문자 무시, 앞뒤 공백 제거)면 `true`.
- `category`: 빈 값이면 `null`.
- `description`: 빈 값이면 빈 문자열.

### 설정 파싱 규칙

| 항목 | 키 | 검증 | 실패 시 |
|---|---|---|---|
| 매장명 | `storeName` | 비어 있지 않은 문자열 | `메뉴판` |
| 테마 | `theme` | 허용 목록(`cafe-dark`, `bistro-light`) | `cafe-dark` |
| 자동전환초 | `autoRotateSec` | 0 이상 정수 | `0` |

## 4. API

| 메서드 | 경로 | 응답 | 설명 |
|---|---|---|---|
| GET | `/` | `index.html` | 정적 파일(`public/`) |
| GET | `/api/menu` | `200 application/json` | 마지막 정상 파싱 결과 |
| GET | `/events` | `text/event-stream` | SSE 스트림 |

### SSE

- 응답 헤더: `Content-Type: text/event-stream`, `Cache-Control: no-cache`, `Connection: keep-alive`.
- 변경 시 `event: menu-updated` 와 `data: {}` 를 보낸다. 본문은 비워 두고 클라이언트가 `/api/menu`를 다시 호출한다. (페이로드 이중화 방지)
- 연결 직후 코멘트 라인(`: connected`)을 한 번 보낸다.
- 브라우저 `EventSource`의 기본 자동 재연결을 사용한다.
- 연결 종료(`close`) 시 허브에서 클라이언트를 제거한다.

## 5. 서버 동작

1. 부팅 시 `data/menu.xlsx`를 파싱해 메모리에 캐시한다. 부팅 시 파싱 실패는 빈 `pages`와 기본 설정으로 시작하고 오류를 로그에 남긴다.
2. chokidar가 `data/menu.xlsx`만 감시한다.
3. 변경 이벤트를 **300ms 디바운스**로 합친다.
4. 재파싱에 성공하면 캐시를 교체하고 SSE로 `menu-updated`를 브로드캐스트한다.
5. 재파싱에 실패하면 캐시를 유지하고 브로드캐스트하지 않는다. 오류를 로그에 남긴다.
6. 포트는 `PORT` 환경변수, 기본 `3000`.

Excel 저장은 임시 파일 생성 후 교체 방식이라 `change` 외에 `add`/`unlink` 이벤트도 발생한다. 세 이벤트를 모두 같은 디바운스 경로로 처리한다.

## 6. 클라이언트 동작

1. 로드 시 `GET /api/menu` → 렌더링.
2. `EventSource('/events')` 연결. `menu-updated` 수신 시 다시 fetch → 렌더링.
3. 렌더링 시 `settings.theme`에 해당하는 `templates/<theme>.css`를 로드한다. `board-grid.css`는 항상 로드한다.
4. 현재 탭 이름을 기억한다. 재렌더링 후 같은 이름이 있으면 유지, 없으면 첫 페이지.
5. `autoRotateSec > 0`이면 타이머로 탭을 순환한다. 재렌더링 시 타이머를 재설정한다.
6. 모든 사용자 텍스트는 `textContent`로 삽입한다. Excel 값을 `innerHTML`에 넣지 않는다 (XSS 방지).

## 7. 테마 시스템

- `board-grid.css`가 레이아웃을 정의하고 색·폰트·간격은 CSS 변수(`--bg`, `--fg`, `--accent`, `--muted`, `--border` 등)로만 참조한다.
- 테마 CSS는 변수 값만 선언한다. 레이아웃 규칙을 중복하지 않는다.
- 반응형 브레이크포인트는 `design/` 핸드오프(모바일, 태블릿 세로/가로, 사이니지)를 기준으로 구현한다.
- 시각 제약(`.claude/rules/anti-ai-slop.md`): 그라데이션·색 그림자·장식 모션 금지, 무채색 베이스 + 액센트 1색, `border-radius` 0~8px, 기본 폰트(Inter/Roboto/Arial/system-ui) 수렴 금지. 폰트 선택 이유를 CSS 주석 한 줄로 남긴다.

## 8. 테스트 전략 (TDD)

`CLAUDE.md`의 Red → Green → Refactor 사이클로 진행한다. 아래 순서는 `plan.md` 작성의 기준이다. 쉬운 순수 함수부터 시작해 통합으로 올라간다.

| 계층 | 대상 | 방식 | PRD |
|---|---|---|---|
| 단위 | `parseSettings` | 입력 객체 → 설정. 기본값·잘못된 값 | F3 |
| 단위 | `parseWorkbook` | 메모리상 workbook(`XLSX.utils.aoa_to_sheet`)으로 생성. 파일 I/O 없음 | F1, F2 |
| 단위 | `render` | 데이터 → HTML. 품절·카테고리·가격 서식 | F2, F5 |
| 단위 | `watcher` 디바운스 | 가짜 타이머로 이벤트 연타 → 콜백 1회 | F4-1 |
| 통합 | `sseHub` | 가짜 응답 객체로 등록·브로드캐스트·제거 | F4-2 |
| 통합 | `server` | 임시 xlsx로 서버 기동 → `/api/menu` 응답, 파일 교체 후 SSE 수신 | F4 |

권장 구현 순서:

1. `parseSettings` 기본값 → 테마 검증 → 자동전환초 검증
2. `parseWorkbook` 시트→페이지 → `_` 시트 제외 → 가격 숫자 → 품절 `Y` → 카테고리 → 빈 행·잘못된 가격
3. `render` 가격 서식 → 품절 표시 → 카테고리 그룹
4. `watcher` 디바운스
5. `sseHub`
6. `server` 통합
7. 클라이언트 조립(수동 확인)

규칙:
- 테스트는 실제 `data/menu.xlsx`에 의존하지 않는다. 필요한 workbook은 테스트 안에서 만든다.
- 시간 의존 테스트는 실제 `setTimeout` 대기 대신 가짜 타이머(`mock.timers`)를 쓴다.
- 구조적 변경 커밋과 행위적 변경 커밋을 분리한다. 커밋 접두어는 `structural:` / `behavioral:`.

## 9. 오류 처리

| 상황 | 동작 |
|---|---|
| 부팅 시 xlsx 없음·손상 | 빈 페이지 + 기본 설정으로 기동, 오류 로그 |
| 재파싱 실패(잠금·손상) | 이전 캐시 유지, 오류 로그, 브로드캐스트 안 함 |
| 가격이 숫자 아님 | 행 건너뜀, `시트명:행번호` 로그 |
| 알 수 없는 테마 | 기본 테마 |
| `_설정` 시트 없음 | 기본 설정 |
| SSE 클라이언트 끊김 | 허브에서 제거, 서버 영향 없음 |

## 10. 비기능 요구사항

- 저장 → 화면 갱신 2초 이내 (디바운스 300ms 포함).
- 동시 SSE 연결 수십 개 수준(매장 기기 수)을 가정한다. 별도 스케일링 없음.
- 외부 네트워크 의존 없음(설치 시 SheetJS CDN 제외). 폰트는 로컬 파일 또는 시스템에 있는 것만 쓴다.
- 서버는 읽기 전용이다. `menu.xlsx`를 쓰지 않는다.
