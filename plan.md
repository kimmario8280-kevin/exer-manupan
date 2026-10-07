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

- [ ] shouldReturnDefaultsWhenSettingsMissing (F3-4): `undefined` → `{ storeName: '메뉴판', theme: 'cafe-dark', autoRotateSec: 0 }`
- [ ] shouldReadStoreName (F3-1)
- [ ] shouldFallbackStoreNameWhenBlank (F3-4)
- [ ] shouldReadKnownTheme (F3-2): `bistro-light`
- [ ] shouldFallbackToDefaultThemeWhenUnknown (F3-2)
- [ ] shouldReadAutoRotateSec (F3-3)
- [ ] shouldFallbackAutoRotateWhenNegativeOrNotInteger (F3-3)
- [ ] shouldFallbackAutoRotateWhenNotNumber (F3-3)

## 2. parseWorkbook (`src/parseWorkbook.mjs`, `test/parseWorkbook.test.mjs`)

workbook은 테스트 안에서 `XLSX.utils.aoa_to_sheet`로 만든다. 실제 `data/menu.xlsx`를 읽지 않는다.

- [ ] shouldConvertOneSheetToOnePage (F1-1): 시트 이름 = 페이지 이름
- [ ] shouldKeepSheetOrderAsPageOrder (F1-4)
- [ ] shouldIgnoreSheetsStartingWithUnderscore (F1-1)
- [ ] shouldAddPageWhenSheetAdded (F1-3)
- [ ] shouldMapRowToItemFields (F1-2): 메뉴명·가격·설명·품절·카테고리 → name·price·description·soldOut·category
- [ ] shouldParsePriceAsNumber (F2-1)
- [ ] shouldMarkSoldOutWhenY (F2-2): `Y`, `y`, ` Y ` 모두 true
- [ ] shouldNotMarkSoldOutWhenBlank (F2-2)
- [ ] shouldSetCategoryNullWhenBlank (F2-3)
- [ ] shouldSetDescriptionEmptyWhenBlank
- [ ] shouldSkipRowWhenNameBlank (F2-4)
- [ ] shouldSkipRowWhenPriceNotNumeric (F2-5)
- [ ] shouldLogSheetAndRowNumberWhenSkippingPrice (F2-5): 로거를 인자로 주입해 검증
- [ ] shouldReturnSettingsFromSettingsSheet (F3): `_설정` 시트를 parseSettings에 위임
- [ ] shouldReturnDefaultSettingsWhenNoSettingsSheet (F3-4)
- [ ] shouldReturnEmptyPagesForWorkbookWithoutMenuSheets

## 3. render (`public/render.js`, `test/render.test.mjs`)

순수 함수. DOM 없이 데이터 → HTML 문자열 또는 단순 구조체로 검증한다.

- [ ] shouldFormatPriceWithThousandsSeparatorAndWon (F2-1): `4500` → `4,500원`
- [ ] shouldRenderItemNameAndDescription
- [ ] shouldMarkSoldOutItemWithClassAndLabel (F2-2): 품절 라벨 포함
- [ ] shouldNotMarkAvailableItemAsSoldOut (F2-2)
- [ ] shouldGroupItemsByCategory (F2-3): 카테고리 소제목, 입력 순서 유지
- [ ] shouldRenderWithoutGroupWhenNoCategory (F2-3)
- [ ] shouldEscapeHtmlInItemText: `<script>` 같은 값이 이스케이프된다 (TRD 6장)
- [ ] shouldRenderTabsFromPages (F5-1)
- [ ] shouldKeepActiveTabWhenPageStillExists (F4-4)
- [ ] shouldFallbackToFirstTabWhenActivePageRemoved (F4-4)

## 4. watcher 디바운스 (`src/watcher.mjs`, `test/watcher.test.mjs`)

`mock.timers`를 쓴다. 실제 대기 금지.

- [ ] shouldCallbackOnceAfter300msOfSilence (F4-1)
- [ ] shouldMergeBurstOfEventsIntoOneCallback (F4-1)
- [ ] shouldRestartTimerWhenEventArrivesBeforeDelay (F4-1)
- [ ] shouldTreatAddChangeUnlinkEventsAsSamePath (TRD 5장)
- [ ] shouldWatchOnlyTargetFile (TRD 10장): `~$menu.xlsx` 등 다른 파일 무시

## 5. sseHub (`src/sseHub.mjs`, `test/sseHub.test.mjs`)

가짜 응답 객체(`write`, `on('close')`)로 검증한다.

- [ ] shouldSendConnectedCommentOnRegister (TRD 4장)
- [ ] shouldBroadcastMenuUpdatedEventToAllClients (F4-2)
- [ ] shouldRemoveClientOnClose (F4-6)
- [ ] shouldNotThrowWhenBroadcastWithoutClients

## 6. server 통합 (`server.mjs`, `test/server.test.mjs`)

임시 디렉터리에 xlsx를 만들어 서버를 기동하고 `fetch`로 검증한다. 포트는 0(임의)을 쓴다.

- [ ] shouldServeParsedMenuAtApiMenu (F1, F3)
- [ ] shouldServeIndexHtmlAtRoot
- [ ] shouldOpenSseStreamWithEventStreamHeaders (TRD 4장)
- [ ] shouldPushMenuUpdatedAndServeNewDataAfterFileReplaced (F4-2, F4-3)
- [ ] shouldKeepPreviousDataWhenReparseFails (F4-5): 손상 파일로 교체해도 `/api/menu`가 이전 값을 반환, 브로드캐스트 없음
- [ ] shouldStartWithEmptyPagesWhenFileMissingAtBoot (TRD 9장)
- [ ] shouldReadPortFromEnv (TRD 5장)

## 7. 클라이언트 조립과 화면 (자동 테스트 한계가 있어 수동 확인 포함)

- [ ] `public/index.html`, `public/client.js` 작성: 로드 시 fetch → render, `EventSource`로 갱신 (F4-3)
- [ ] 사용자 텍스트를 `textContent`/이스케이프로만 삽입함을 render 테스트로 보장 (TRD 6장)
- [ ] 자동전환 타이머 로직을 순수 함수로 분리하고 테스트: shouldAdvanceToNextPageEveryNSeconds, shouldNotRotateWhenZero (F3-3)
- [ ] `board-grid.css` + `cafe-dark.css` + `bistro-light.css` 작성 (F3-2, F5)
- [ ] 반응형 4종(모바일·태블릿 세로/가로·사이니지) 확인, `design/` 기준 (F5-2)
- [ ] 샘플 `data/menu.xlsx`로 실제 저장 → 2초 내 갱신 수동 확인 (PRD 6장)
- [ ] anti-ai-slop 자가 점검 6항목 통과

## 완료 기준

- 위 항목이 모두 체크되었다.
- `npm test`가 통과한다.
- 구조적 변경과 행위적 변경이 커밋에서 분리되어 있다.
