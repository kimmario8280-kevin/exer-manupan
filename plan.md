# plan.md — TDD 테스트 목록

"go"라고 하면 아래에서 **체크되지 않은 첫 번째 테스트**를 찾아 구현한다.
순서: Red(실패 확인) → Green(최소 구현) → Refactor(Tidy First, 구조 변경은 별도 커밋).
테스트 한 개 = 사이클 한 번. 완료하면 `[x]`로 바꾼다.

기준 문서: [docs/PRD.md](docs/PRD.md), [docs/TRD.md](docs/TRD.md). 테스트 이름 뒤 괄호는 PRD 요구사항 ID.

## 0. 프로젝트 셋업 (구조적 변경)

- [x] `package.json` 생성: `type: module`, 의존성 express·chokidar·xlsx(CDN tarball), 스크립트 `start`·`test` (`node --test`)
- [x] `npm install` 성공 확인, 빈 테스트 1개로 `npm test` 실행 확인

## 1. parseSettings (`src/parseSettings.mjs`, `test/parseSettings.test.mjs`)

입력: `_설정` 시트의 `[{항목, 값}]` 행 배열 또는 `undefined`.

- [x] shouldReturnDefaultsWhenSettingsMissing (F3-4): `undefined` → `{ storeName: '메뉴판', theme: 'cafe-dark', autoRotateSec: 0 }`
- [x] shouldReadStoreName (F3-1)
- [x] shouldFallbackStoreNameWhenBlank (F3-4)
- [x] shouldReadKnownTheme (F3-2): `bistro-light`
- [x] shouldFallbackToDefaultThemeWhenUnknown (F3-2)
- [x] shouldReadAutoRotateSec (F3-3)
- [x] shouldFallbackAutoRotateWhenNegativeOrNotInteger (F3-3)
- [x] shouldFallbackAutoRotateWhenNotNumber (F3-3)

## 2. parseWorkbook (`src/parseWorkbook.mjs`, `test/parseWorkbook.test.mjs`)

workbook은 테스트 안에서 `XLSX.utils.aoa_to_sheet`로 만든다. 실제 `data/menu.xlsx`를 읽지 않는다.

- [x] shouldConvertOneSheetToOnePage (F1-1): 시트 이름 = 페이지 이름
- [x] shouldKeepSheetOrderAsPageOrder (F1-4)
- [x] shouldIgnoreSheetsStartingWithUnderscore (F1-1)
- [x] shouldAddPageWhenSheetAdded (F1-3)
- [x] shouldMapRowToItemFields (F1-2): 메뉴명·가격·설명·품절·카테고리 → name·price·description·soldOut·category
- [x] shouldParsePriceAsNumber (F2-1)
- [x] shouldMarkSoldOutWhenY (F2-2): `Y`, `y`, ` Y ` 모두 true
- [x] shouldNotMarkSoldOutWhenBlank (F2-2)
- [x] shouldSetCategoryNullWhenBlank (F2-3)
- [x] shouldSetDescriptionEmptyWhenBlank
- [x] shouldSkipRowWhenNameBlank (F2-4)
- [x] shouldSkipRowWhenPriceNotNumeric (F2-5)
- [x] shouldLogSheetAndRowNumberWhenSkippingPrice (F2-5): 로거를 인자로 주입해 검증
- [x] shouldReturnSettingsFromSettingsSheet (F3): `_설정` 시트를 parseSettings에 위임
- [x] shouldReturnDefaultSettingsWhenNoSettingsSheet (F3-4)
- [x] shouldReturnEmptyPagesForWorkbookWithoutMenuSheets

## 3. render (`public/render.js`, `test/render.test.mjs`)

순수 함수. DOM 없이 데이터 → HTML 문자열 또는 단순 구조체로 검증한다.

- [x] shouldFormatPriceWithThousandsSeparatorAndWon (F2-1): `4500` → `4,500원`
- [x] shouldRenderItemNameAndDescription
- [x] shouldMarkSoldOutItemWithClassAndLabel (F2-2): 품절 라벨 포함
- [x] shouldNotMarkAvailableItemAsSoldOut (F2-2)
- [x] shouldGroupItemsByCategory (F2-3): 카테고리 소제목, 입력 순서 유지
- [x] shouldRenderWithoutGroupWhenNoCategory (F2-3)
- [x] shouldEscapeHtmlInItemText: `<script>` 같은 값이 이스케이프된다 (TRD 6장)
- [x] shouldRenderTabsFromPages (F5-1)
- [x] shouldKeepActiveTabWhenPageStillExists (F4-4)
- [x] shouldFallbackToFirstTabWhenActivePageRemoved (F4-4)

## 4. watcher 디바운스 (`src/watcher.mjs`, `test/watcher.test.mjs`)

`mock.timers`를 쓴다. 실제 대기 금지.

- [x] shouldCallbackOnceAfter300msOfSilence (F4-1)
- [x] shouldMergeBurstOfEventsIntoOneCallback (F4-1)
- [x] shouldRestartTimerWhenEventArrivesBeforeDelay (F4-1)
- [x] shouldTreatAddChangeUnlinkEventsAsSamePath (TRD 5장)
- [x] shouldWatchOnlyTargetFile (TRD 10장): `~$menu.xlsx` 등 다른 파일 무시

## 5. sseHub (`src/sseHub.mjs`, `test/sseHub.test.mjs`)

가짜 응답 객체(`write`, `on('close')`)로 검증한다.

- [x] shouldSendConnectedCommentOnRegister (TRD 4장)
- [x] shouldBroadcastMenuUpdatedEventToAllClients (F4-2)
- [x] shouldRemoveClientOnClose (F4-6)
- [x] shouldNotThrowWhenBroadcastWithoutClients

## 6. server 통합 (`server.mjs`, `test/server.test.mjs`)

임시 디렉터리에 xlsx를 만들어 서버를 기동하고 `fetch`로 검증한다. 포트는 0(임의)을 쓴다.

- [x] shouldServeParsedMenuAtApiMenu (F1, F3)
- [x] shouldServeIndexHtmlAtRoot
- [x] shouldOpenSseStreamWithEventStreamHeaders (TRD 4장)
- [x] shouldPushMenuUpdatedAndServeNewDataAfterFileReplaced (F4-2, F4-3)
- [x] shouldKeepPreviousDataWhenReparseFails (F4-5): 손상 파일로 교체해도 `/api/menu`가 이전 값을 반환, 브로드캐스트 없음
- [x] shouldStartWithEmptyPagesWhenFileMissingAtBoot (TRD 9장)
- [x] shouldReadPortFromEnv (TRD 5장)

## 7. 클라이언트 조립과 화면 (자동 테스트 한계가 있어 수동 확인 포함)

- [x] `public/index.html`, `public/client.js` 작성: 로드 시 fetch → render, `EventSource`로 갱신 (F4-3)
- [x] 사용자 텍스트를 `textContent`/이스케이프로만 삽입함을 render 테스트로 보장 (TRD 6장)
- [x] 자동전환 타이머 로직을 순수 함수로 분리하고 테스트: shouldAdvanceToNextPageEveryNSeconds, shouldNotRotateWhenZero (F3-3)
- [x] `board-grid.css` + `cafe-dark.css` + `bistro-light.css` 작성 (F3-2, F5)
- [x] 반응형 4종(모바일·태블릿 세로/가로·사이니지) 확인, `design/` 기준 (F5-2) (headless Edge 스크린샷으로 확인. 실제 기기는 사용자 몫)
- [ ] 샘플 `data/menu.xlsx`로 실제 저장 → 2초 내 갱신 수동 확인 (PRD 6장)
- [x] anti-ai-slop 자가 점검 6항목 통과

## 8. 디자인 적용 (`public/design.js`, `test/design.test.mjs`)

M7의 CSS 유동 레이아웃은 `design/project/`의 PNG 배경·프레임을 쓰지 않았다. 마일스톤 단위로 다시 진행한다.

- [x] shouldPickDeviceFromViewportSize (F5-2)
- [x] shouldDefineArtboardSizeForEachDevice (F5-2)
- [x] shouldBuildBackgroundAndFrameUrls (F5-2)
- [x] shouldHaveAssetFilesForEveryThemeAndDevice (F5-2)
- [x] 화면 조립: 배경·프레임 레이어, 기기 판별, 아트보드 contain 레이아웃, 테마 색 교체

## 완료 기준

- 위 항목이 모두 체크되었다.
- `npm test`가 통과한다.
- 구조적 변경과 행위적 변경이 커밋에서 분리되어 있다.
