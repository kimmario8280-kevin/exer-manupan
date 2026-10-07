# TDD-IMPLEMENTS.md

`plan.md`의 테스트 목록을 **마일스톤** 단위로 묶은 실행 문서다.
`/tdd-red`, `/tdd-green`, `/tdd-refactor` 슬래시 명령어가 이 문서를 읽고 마일스톤의 상태를 갱신한다.

마일스톤 하나 = 모듈 하나(예: `parseSettings`)와 그 모듈의 테스트 묶음이다. Red → Green → Refactor 사이클을 마일스톤마다 한 번 돈다.

## 사용법

```text
/tdd-red       → 다음 [ ] 마일스톤의 테스트 전체 작성, 실패 확인  → [R]
/tdd-green     → 첫 [R] 마일스톤을 통과시키는 최소 구현            → [G]
/tdd-refactor  → 첫 [G] 마일스톤의 하드코딩·중복 정리              → [x]  (plan.md도 [x])
```

인자로 마일스톤 ID(`M1`)를 줄 수 있다. 마일스톤은 위에서 아래로 **순서대로** 진행한다. 마일스톤 하나가 `[x]`가 되기 전에 다음 마일스톤을 시작하지 않는다.

## 상태 표기

마일스톤 제목 앞의 표기가 상태다.

| 표기 | 의미 |
|---|---|
| `[ ]` | 대기 |
| `[R]` | Red 완료. 마일스톤의 테스트를 모두 작성했고, 구현이 없어서 실패하는 것을 확인함 |
| `[G]` | Green 완료. 전체 테스트 통과, 리팩터링 전 |
| `[x]` | Refactor 완료. 마일스톤 종료 |

## 마일스톤 안의 규칙

- 마일스톤 아래 `T-섹션-번호` 항목이 그 마일스톤의 테스트 목록이다. 항목에는 개별 체크박스가 없다. 상태는 마일스톤이 가진다.
- 항목 형식:

  ```text
  - T-01-01 shouldXxx (요구사항 ID)
    - Red: 작성할 테스트의 입력과 기대값
    - Green: 통과에 필요한 최소 구현
    - Refactor: 정리 후보
  ```

- Red: 목록의 테스트를 **목록 순서대로 모두** 작성한다. 이름은 `shouldXxx` 그대로 쓴다.
- Green: 목록 순서대로 **테스트 하나씩** 통과시키고, 한 개마다 `npm test`를 돌린다. 하드코딩으로 시작해 다음 테스트가 일반화를 강제하게 한다.
- Refactor: 항목의 "Refactor" 후보를 한 번에 하나씩 적용하고 마지막에 모듈 전체를 점검한다.
- 이미 통과할 수 있는 항목(회귀 방지용)은 Red에서 통과해도 된다. 그 사실을 보고에 적는다.
- `SETUP` 항목은 테스트 없이 직접 수행하는 구조적 변경이다. 테스트가 없는 마일스톤은 `/tdd-red`가 직접 수행하고 `[x]`로 바꾼다. 테스트와 `SETUP`이 섞인 마일스톤(M7)은 테스트를 Red에서, `SETUP` 항목을 Green에서 수행한다.

기준 문서: [docs/PRD.md](docs/PRD.md), [docs/TRD.md](docs/TRD.md), [plan.md](plan.md), [CLAUDE.md](CLAUDE.md)

## 마일스톤 목록

| ID | 마일스톤 | 테스트 항목 | 상태 |
|---|---|---|---|
| M0 | 프로젝트 셋업 | SETUP 2 | `[x]` |
| M1 | parseSettings | T-01-01 ~ 08 | `[ ]` |
| M2 | parseWorkbook | T-02-01 ~ 16 | `[ ]` |
| M3 | render | T-03-01 ~ 10 | `[ ]` |
| M4 | watcher 디바운스 | T-04-01 ~ 05 | `[ ]` |
| M5 | sseHub | T-05-01 ~ 04 | `[ ]` |
| M6 | server 통합 | T-06-01 ~ 07 | `[ ]` |
| M7 | 클라이언트 조립과 화면 | T-07-01 ~ 07 | `[ ]` |

표의 상태는 참고용이다. **기준은 각 마일스톤 제목 앞의 표기**이고, 상태를 바꿀 때 표도 같이 고친다.

---

## [x] M0 프로젝트 셋업

- T-00-01 SETUP `package.json` 생성
  - 완료: `type: module`, 의존성 express·chokidar·xlsx(CDN tarball), 스크립트 `start`·`test`
- T-00-02 SETUP `npm install` 확인과 스모크 테스트
  - 수행: `npm install` 성공 확인, `test/smoke.test.mjs`에 `assert.ok(true)` 1개를 두고 `npm test` 통과 확인, `import 'xlsx'`가 되는지 확인
  - 이후: 첫 실제 테스트가 생기면 스모크 테스트는 삭제한다.

---

## [ ] M1 parseSettings

파일: `src/parseSettings.mjs`, `test/parseSettings.test.mjs`
입력: `_설정` 시트의 `[{ 항목, 값 }]` 행 배열 또는 `undefined`. 출력: `{ storeName, theme, autoRotateSec }`.
M1 Refactor 단계에서 `test/smoke.test.mjs`를 삭제한다. (실제 테스트가 생겼으므로 구조적 변경)

- T-01-01 shouldReturnDefaultsWhenSettingsMissing (F3-4)
  - Red: `parseSettings(undefined)` 가 `{ storeName: '메뉴판', theme: 'cafe-dark', autoRotateSec: 0 }` 와 deepEqual
  - Green: 기본값 객체를 그대로 반환 (하드코딩 허용)
  - Refactor: 기본값을 `DEFAULT_SETTINGS` 상수로 추출, 호출마다 복사본 반환(공유 객체 변이 방지)
- T-01-02 shouldReadStoreName (F3-1)
  - Red: `[{ 항목: '매장명', 값: '빌런 커피' }]` → `storeName === '빌런 커피'`
  - Green: 항목 `매장명`을 찾아 값을 사용
  - Refactor: 항목 조회 헬퍼 `findValue(rows, key)` 추출, 한글 키를 `KEYS` 상수로 이동
- T-01-03 shouldFallbackStoreNameWhenBlank (F3-4)
  - Red: 값이 `''`, `'  '`, `undefined` 일 때 `'메뉴판'`
  - Green: trim 후 빈 문자열이면 기본값
  - Refactor: 문자열 정규화 로직을 작은 함수로 분리
- T-01-04 shouldReadKnownTheme (F3-2)
  - Red: `테마: 'bistro-light'` → `theme === 'bistro-light'`
  - Green: 허용 목록(`cafe-dark`, `bistro-light`)에 있으면 사용
  - Refactor: `ALLOWED_THEMES` 상수 추출
- T-01-05 shouldFallbackToDefaultThemeWhenUnknown (F3-2)
  - Red: `테마: 'neon'` → `'cafe-dark'`
  - Green: 허용 목록에 없으면 기본 테마
  - Refactor: 테마 검증과 기본값 선택 중복 제거
- T-01-06 shouldReadAutoRotateSec (F3-3)
  - Red: `자동전환초: 5`, 문자열 `'5'` 모두 → `5`. `0` → `0`
  - Green: 숫자로 변환해 0 이상 정수면 사용
  - Refactor: 숫자 검증 헬퍼 추출
- T-01-07 shouldFallbackAutoRotateWhenNegativeOrNotInteger (F3-3)
  - Red: `-1`, `2.5` → `0`
  - Green: 음수·비정수는 0
  - Refactor: 정수 검사 조건을 `isNonNegativeInteger`로 이름 붙이기
- T-01-08 shouldFallbackAutoRotateWhenNotNumber (F3-3)
  - Red: `'abc'`, `''`, `undefined`, `null` → `0`
  - Green: `Number` 변환 결과가 NaN이면 0 (빈 문자열이 0으로 변환되는 점 주의)
  - Refactor: 세 설정 항목의 파싱 함수 모양을 통일, 파일 전체 정리

---

## [ ] M2 parseWorkbook

파일: `src/parseWorkbook.mjs`, `test/parseWorkbook.test.mjs`
workbook은 테스트 안에서 `XLSX.utils.book_new()` + `aoa_to_sheet`로 만든다. `data/menu.xlsx`를 읽지 않는다.
출력: `{ settings, pages: [{ name, items: [{ name, price, description, soldOut, category }] }] }`.

- T-02-01 shouldConvertOneSheetToOnePage (F1-1)
  - Red: 시트 `커피`(헤더만) 1개 → `pages` 길이 1, `pages[0].name === '커피'`, `items` 빈 배열
  - Green: `SheetNames`를 map해 페이지 생성
  - Refactor: 테스트용 workbook 생성 헬퍼 `makeWorkbook({ 시트명: aoa })`를 `test/helpers/`로 추출
- T-02-02 shouldKeepSheetOrderAsPageOrder (F1-4)
  - Red: 시트 `음료`, `커피`, `디저트` 순서 → 같은 순서의 페이지
  - Green: `SheetNames` 순서 유지(이미 통과할 수 있음. 통과하면 테스트가 약한 것이 아니라 이미 충족된 요구사항이다. 시트 3개와 비알파벳 순서로 단언을 강하게 한다)
  - Refactor: 없음 예상
- T-02-03 shouldIgnoreSheetsStartingWithUnderscore (F1-1)
  - Red: `_설정`, `_메모` 시트가 `pages`에 없다
  - Green: 이름이 `_`로 시작하면 filter
  - Refactor: `isMenuSheet(name)` 추출
- T-02-04 shouldAddPageWhenSheetAdded (F1-3)
  - Red: 시트 2개 workbook → 3개로 늘린 workbook의 페이지 수가 3
  - Green: 코드 변경 없이 통과할 가능성이 높다. 통과하면 회귀 방지 테스트로 남기고 Green은 "변경 없음"으로 기록한다
  - Refactor: 없음 예상
- T-02-05 shouldMapRowToItemFields (F1-2)
  - Red: 헤더 `메뉴명·가격·설명·품절·카테고리` + 한 행 → `{ name, price, description, soldOut, category }`
  - Green: 헤더 이름으로 열 매핑해 값 복사 (타입 변환은 이후 항목)
  - Refactor: 헤더 → 필드 매핑 테이블 `COLUMNS` 상수로 추출
- T-02-06 shouldParsePriceAsNumber (F2-1)
  - Red: 셀 값이 숫자 `4500`, 문자열 `'4500'` 모두 `price === 4500` (number)
  - Green: `Number(value)` 변환
  - Refactor: 가격 파싱을 `parsePrice(raw)` 함수로 분리
- T-02-07 shouldMarkSoldOutWhenY (F2-2)
  - Red: `'Y'`, `'y'`, `' Y '` → `soldOut === true`
  - Green: trim + 대문자 비교
  - Refactor: `parseSoldOut(raw)` 분리
- T-02-08 shouldNotMarkSoldOutWhenBlank (F2-2)
  - Red: 빈 셀, `''`, `'N'`, `'예'` → `soldOut === false`
  - Green: `Y`만 true
  - Refactor: 불리언 판정 로직 중복 확인
- T-02-09 shouldSetCategoryNullWhenBlank (F2-3)
  - Red: 빈 카테고리 → `null`, 값이 있으면 문자열(앞뒤 공백 제거)
  - Green: trim 후 빈 문자열이면 null
  - Refactor: `textOrNull(raw)` 헬퍼 추출 (설명·카테고리 공용 검토)
- T-02-10 shouldSetDescriptionEmptyWhenBlank
  - Red: 빈 설명 → `''`
  - Green: 값이 없으면 빈 문자열
  - Refactor: `textOr(raw, fallback)` 헬퍼로 T-02-09와 통합
- T-02-11 shouldSkipRowWhenNameBlank (F2-4)
  - Red: 메뉴명이 비거나 공백뿐인 행은 `items`에 없다
  - Green: 이름이 빈 행 filter
  - Refactor: 행 변환과 행 검증 분리 (`toItem` / `isBlankRow`)
- T-02-12 shouldSkipRowWhenPriceNotNumeric (F2-5)
  - Red: 가격 `'무료'`, `''`, `'₩4,500'` 행은 건너뛴다. 나머지 행은 유지된다. 예외가 발생하지 않는다
  - Green: `parsePrice`가 NaN이면 행 제외
  - Refactor: 가격 검증 실패 경로를 한곳으로 모은다
- T-02-13 shouldLogSheetAndRowNumberWhenSkippingPrice (F2-5)
  - Red: 로거를 인자로 주입(`parseWorkbook(wb, { logger })`). 2번째 시트 3번째 행이 잘못되면 로거가 시트명과 Excel 행 번호(헤더 포함 기준 `3`)를 포함한 메시지로 1회 호출된다
  - Green: 건너뛸 때 `logger.warn` 호출
  - Refactor: 기본 로거를 `console`로 주입, 메시지 포맷 함수 분리
- T-02-14 shouldReturnSettingsFromSettingsSheet (F3)
  - Red: `_설정` 시트(`항목`, `값` 헤더) → `settings`가 `parseSettings` 결과와 같다
  - Green: `_설정` 시트를 행 객체 배열로 변환해 `parseSettings`에 전달
  - Refactor: 시트 → 객체 배열 변환 `sheetToRows(sheet)`를 메뉴 시트와 공용화
- T-02-15 shouldReturnDefaultSettingsWhenNoSettingsSheet (F3-4)
  - Red: `_설정` 시트가 없으면 `settings`가 기본값
  - Green: 시트 없으면 `parseSettings(undefined)`
  - Refactor: 분기 단순화
- T-02-16 shouldReturnEmptyPagesForWorkbookWithoutMenuSheets
  - Red: `_설정`만 있는 workbook → `pages: []`
  - Green: 이미 통과할 가능성이 높다. 회귀 방지로 유지
  - Refactor: `parseWorkbook.mjs` 전체 점검 (함수 길이, 이름, 상수)

---

## [ ] M3 render

파일: `public/render.js`, `test/render.test.mjs`
브라우저와 Node 양쪽에서 import 가능한 순수 ES 모듈이다. DOM에 의존하지 않는다. 출력은 HTML 문자열.

- T-03-01 shouldFormatPriceWithThousandsSeparatorAndWon (F2-1)
  - Red: `formatPrice(4500) === '4,500원'`, `formatPrice(500) === '500원'`, `formatPrice(12000) === '12,000원'`
  - Green: `toLocaleString('ko-KR') + '원'`
  - Refactor: 로케일 상수화
- T-03-02 shouldRenderItemNameAndDescription
  - Red: `renderItem({ name, price, description, soldOut: false })` 결과에 이름·설명·`4,500원`이 포함된다
  - Green: 템플릿 문자열
  - Refactor: 설명이 빈 문자열이면 설명 요소를 만들지 않도록 분기를 정리 (테스트 추가 없이 행위 유지 확인)
- T-03-03 shouldMarkSoldOutItemWithClassAndLabel (F2-2)
  - Red: `soldOut: true`이면 `sold-out` 클래스와 `품절` 라벨이 있다
  - Green: 조건부 클래스·라벨
  - Refactor: 클래스명 상수화
- T-03-04 shouldNotMarkAvailableItemAsSoldOut (F2-2)
  - Red: `soldOut: false`이면 `sold-out`과 `품절`이 없다
  - Green: 이미 통과할 가능성이 높다. 회귀 방지
  - Refactor: 없음 예상
- T-03-05 shouldGroupItemsByCategory (F2-3)
  - Red: 카테고리 `에스프레소`, `논커피`, `에스프레소` 순서 입력 → 소제목 2개, 첫 등장 순서 유지, 같은 카테고리끼리 묶임
  - Green: 카테고리별 그룹핑 후 소제목 렌더
  - Refactor: `groupByCategory(items)` 순수 함수 분리
- T-03-06 shouldRenderWithoutGroupWhenNoCategory (F2-3)
  - Red: 카테고리가 모두 `null`이면 소제목이 없다. 일부만 `null`이면 `null` 그룹은 소제목 없이 렌더
  - Green: `null` 그룹의 소제목 생략
  - Refactor: 그룹 렌더 함수 정리
- T-03-07 shouldEscapeHtmlInItemText (TRD 6장)
  - Red: 이름 `<script>alert(1)</script>`, 설명 `"a" & 'b'`가 이스케이프되어 `<script>`가 출력에 없다
  - Green: `escapeHtml`을 이름·설명·카테고리·매장명에 적용
  - Refactor: 모든 사용자 텍스트가 `escapeHtml`을 거치는지 렌더 함수 전체 점검
- T-03-08 shouldRenderTabsFromPages (F5-1)
  - Red: 페이지 3개 → 탭 3개, 활성 탭에 `active` 표시와 `aria-selected="true"`
  - Green: `renderTabs(pages, activeName)`
  - Refactor: 탭 이름도 이스케이프 확인
- T-03-09 shouldKeepActiveTabWhenPageStillExists (F4-4)
  - Red: `resolveActivePage(pages, '디저트') === '디저트'`
  - Green: 이름이 있으면 그대로
  - Refactor: 없음 예상
- T-03-10 shouldFallbackToFirstTabWhenActivePageRemoved (F4-4)
  - Red: 없는 이름이거나 `undefined`이면 첫 페이지 이름, 페이지가 없으면 `null`
  - Green: 폴백 분기
  - Refactor: `render.js` 전체 점검 (공개 함수 목록, 이름, 중복)

---

## [ ] M4 watcher 디바운스

파일: `src/watcher.mjs`, `test/watcher.test.mjs`
`node:test`의 `mock.timers`를 사용한다. 실제 대기 금지. 파일 시스템 감시자(chokidar)는 주입한다.

- T-04-01 shouldCallbackOnceAfter300msOfSilence (F4-1)
  - Red: `createDebouncer(cb, 300)`에 이벤트 1회 → 299ms에는 호출 0회, 300ms에 호출 1회
  - Green: `setTimeout` 기반 디바운서
  - Refactor: 지연 시간을 `DEBOUNCE_MS = 300` 상수로
- T-04-02 shouldMergeBurstOfEventsIntoOneCallback (F4-1)
  - Red: 100ms 간격 이벤트 5회 → 마지막 이벤트 300ms 후 콜백 1회
  - Green: 이벤트마다 이전 타이머 취소
  - Refactor: 타이머 상태를 클로저 안으로 캡슐화
- T-04-03 shouldRestartTimerWhenEventArrivesBeforeDelay (F4-1)
  - Red: 200ms 시점에 이벤트가 오면 처음부터 300ms를 다시 센다 (200+299ms까지 0회, 200+300ms에 1회)
  - Green: T-04-02에서 통과할 수 있다. 통과하면 경계 조건을 더 엄격히
  - Refactor: 디바운서 테스트 헬퍼 정리
- T-04-04 shouldTreatAddChangeUnlinkEventsAsSamePath (TRD 5장)
  - Red: 가짜 감시자가 `add`, `change`, `unlink` 이벤트를 연속으로 내보내도 콜백은 1회
  - Green: `createWatcher({ watch, file, onChange })`가 세 이벤트를 같은 디바운서에 연결
  - Refactor: 이벤트 이름 목록 상수화
- T-04-05 shouldWatchOnlyTargetFile (TRD 10장)
  - Red: 대상 `data/menu.xlsx`만 감시한다. 주입된 `watch`가 정확히 그 경로 하나로 호출된다. `~$menu.xlsx` 경로 이벤트는 무시된다
  - Green: 경로 비교 필터
  - Refactor: `watcher.mjs` 전체 점검, `close()` 제공 여부 확인(서버 종료·테스트 정리용)

---

## [ ] M5 sseHub

파일: `src/sseHub.mjs`, `test/sseHub.test.mjs`
가짜 응답 객체(`write`, `writeHead`, `on`)로 검증한다.

- T-05-01 shouldSendConnectedCommentOnRegister (TRD 4장)
  - Red: `hub.register(res)` 직후 `res.write`로 `: connected\n\n`이 전송된다
  - Green: register에서 코멘트 전송
  - Refactor: SSE 포맷 문자열을 `formatComment`·`formatEvent` 함수로
- T-05-02 shouldBroadcastMenuUpdatedEventToAllClients (F4-2)
  - Red: 클라이언트 2개 등록 후 `hub.broadcast('menu-updated')` → 둘 다 `event: menu-updated\ndata: {}\n\n` 수신
  - Green: Set에 담긴 응답에 write
  - Refactor: 이벤트 포맷 함수 재사용, 이름 정리
- T-05-03 shouldRemoveClientOnClose (F4-6)
  - Red: 응답의 `close` 이벤트 후 broadcast하면 해당 클라이언트는 받지 않는다
  - Green: `res.on('close', ...)`에서 제거
  - Refactor: 등록·해제 대칭 구조 확인
- T-05-04 shouldNotThrowWhenBroadcastWithoutClients
  - Red: 클라이언트 없이 `broadcast` 호출이 예외 없이 끝난다. `write`가 예외를 던지는 클라이언트가 있어도 다른 클라이언트에는 전달된다
  - Green: 클라이언트별 try/catch, 실패한 클라이언트 제거
  - Refactor: `sseHub.mjs` 전체 점검

---

## [ ] M6 server 통합

파일: `server.mjs`(+ 필요 시 `src/createApp.mjs`), `test/server.test.mjs`
임시 디렉터리에 xlsx를 만들어 서버를 기동한다. 포트 0(임의), `fetch`로 검증, 테스트 종료 시 서버·감시자를 닫는다.
`server.mjs`는 `createServer({ file, port })` 같은 팩토리를 export하고, 직접 실행될 때만 listen한다.

- T-06-01 shouldServeParsedMenuAtApiMenu (F1, F3)
  - Red: 임시 xlsx(시트 `커피` 1행, `_설정` 매장명) 서버 기동 → `GET /api/menu`가 200, JSON `settings.storeName`과 `pages[0].items[0]`이 기대값
  - Green: 부팅 시 `parseWorkbook` 결과를 캐시하고 라우트 응답
  - Refactor: 팩토리와 `listen` 분리, 캐시를 객체로 캡슐화
- T-06-02 shouldServeIndexHtmlAtRoot
  - Red: `GET /`가 200, `text/html`, 본문에 `<html`
  - Green: `express.static('public')` + 최소 `public/index.html`
  - Refactor: 정적 경로를 설정값으로 주입
- T-06-03 shouldOpenSseStreamWithEventStreamHeaders (TRD 4장)
  - Red: `GET /events` 응답의 `content-type`이 `text/event-stream`, `cache-control: no-cache`, 첫 청크에 `: connected`
  - Green: `/events` 라우트에서 헤더 설정 후 `sseHub.register`
  - Refactor: 라우트 핸들러를 별도 함수로
- T-06-04 shouldPushMenuUpdatedAndServeNewDataAfterFileReplaced (F4-2, F4-3)
  - Red: SSE 연결 후 xlsx를 새 내용으로 덮어쓰면 `menu-updated`를 받고, 이후 `/api/menu`가 새 값을 반환 (2초 이내)
  - Green: watcher → 재파싱 → 캐시 교체 → `broadcast`
  - Refactor: 재로딩 함수 `reload()` 분리, 로깅 정리
- T-06-05 shouldKeepPreviousDataWhenReparseFails (F4-5)
  - Red: 파일을 손상된 바이트로 교체해도 `/api/menu`는 이전 값 그대로, SSE 이벤트 없음, 서버 생존
  - Green: 재파싱 try/catch, 실패 시 캐시 유지 + 오류 로그
  - Refactor: 오류 로깅 일원화
- T-06-06 shouldStartWithEmptyPagesWhenFileMissingAtBoot (TRD 9장)
  - Red: 존재하지 않는 경로로 기동해도 서버가 뜨고 `/api/menu`가 `pages: []`와 기본 설정을 반환
  - Green: 부팅 시 파싱 try/catch, 기본 상태로 시작
  - Refactor: "빈 상태" 생성 함수 추출 (`parseSettings(undefined)` 재사용)
- T-06-07 shouldReadPortFromEnv (TRD 5장)
  - Red: `resolvePort({ PORT: '4123' }) === 4123`, 미설정·잘못된 값은 `3000`
  - Green: 순수 함수 `resolvePort(env)`
  - Refactor: `server.mjs` 전체 점검 (함수 길이, 의존성 주입 지점, 종료 처리 `close()`)

---

## [ ] M7 클라이언트 조립과 화면

자동 테스트가 어려운 부분은 수동 확인 항목을 포함한다. 테스트 가능한 로직은 순수 함수로 분리한다.

- T-07-01 shouldAdvanceToNextPageEveryNSeconds (F3-3)
  - 파일: `public/rotation.js`, `test/rotation.test.mjs`
  - Red: `nextPageName(pages, current)`가 다음 이름을 반환하고 마지막이면 첫 페이지로 순환
  - Green: 인덱스 계산
  - Refactor: 없음 예상
- T-07-02 shouldNotRotateWhenZero (F3-3)
  - Red: `rotationIntervalMs(0) === null`, `rotationIntervalMs(5) === 5000`, 페이지가 1개 이하일 때도 `null`
  - Green: 조건 분기
  - Refactor: `rotation.js` 정리
- T-07-03 SETUP `public/index.html`, `public/client.js`
  - 수행: 로드 시 `/api/menu` fetch → `render` → DOM 삽입, `EventSource('/events')`의 `menu-updated`에서 재호출, 활성 탭 유지(`resolveActivePage`), 자동전환 타이머 재설정
  - 확인: 서버 기동 후 브라우저에서 수동 확인. 로직은 T-03, T-07-01~02의 순수 함수에 위임하고 `client.js`는 조립만 한다
- T-07-04 SETUP 테마 CSS 3종
  - 수행: `public/templates/board-grid.css`(레이아웃, CSS 변수 참조만), `cafe-dark.css`, `bistro-light.css`(변수 값만 선언). 클라이언트가 `settings.theme`에 맞는 CSS를 로드
  - 규칙: `.claude/rules/anti-ai-slop.md` 준수. 폰트 선택 이유를 CSS 주석 한 줄로 남긴다
- T-07-05 SETUP 반응형 4종 확인
  - 수행: `design/`의 모바일, 태블릿 세로/가로, 사이니지 기준으로 브레이크포인트 구현·확인
- T-07-06 SETUP 샘플 `data/menu.xlsx` 수동 통합 확인
  - 수행: `npm start` → Excel에서 값 수정 후 저장 → 2초 이내 화면 갱신, 품절·테마·자동전환 동작 확인
- T-07-07 SETUP anti-ai-slop 자가 점검
  - 수행: 규칙 문서의 6개 점검 항목에 모두 NO인지 확인

---

## 완료 기준

- 모든 마일스톤이 `[x]`다.
- `npm test`가 전체 통과한다.
- 행위 변경과 구조 변경 커밋이 분리되어 있다.
