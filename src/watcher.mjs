// Excel 저장은 add/change/unlink 이벤트를 연달아 일으키므로 한 번으로 합친다.
const DEBOUNCE_MS = 300;
const WATCHED_EVENTS = ['add', 'change', 'unlink'];

export function createDebouncer(callback, delayMs) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, delayMs);
  };
}

// 다른 파일(예: Excel 임시 파일 ~$menu.xlsx)의 이벤트는 무시한다.
const onlyForFile = (file, handler) => (path) => {
  if (path === file) handler();
};

export function createWatcher({ watch, file, onChange }) {
  const trigger = createDebouncer(onChange, DEBOUNCE_MS);
  const watcher = watch(file);
  for (const event of WATCHED_EVENTS) {
    watcher.on(event, onlyForFile(file, trigger));
  }
  return watcher;
}
