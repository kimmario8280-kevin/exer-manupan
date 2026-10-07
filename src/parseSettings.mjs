const DEFAULT_SETTINGS = Object.freeze({
  storeName: '메뉴판',
  theme: 'cafe-dark',
  autoRotateSec: 0,
});
const ALLOWED_THEMES = ['cafe-dark', 'bistro-light'];
const KEYS = Object.freeze({
  storeName: '매장명',
  theme: '테마',
  autoRotateSec: '자동전환초',
});

const findValue = (rows, key) => rows.find((row) => row.항목 === key)?.값;

const isNonNegativeInteger = (n) => Number.isInteger(n) && n >= 0;

const parseStoreName = (raw) =>
  String(raw ?? '').trim() || DEFAULT_SETTINGS.storeName;

const parseTheme = (raw) =>
  ALLOWED_THEMES.includes(raw) ? raw : DEFAULT_SETTINGS.theme;

const parseAutoRotateSec = (raw) => {
  const seconds = Number(raw);
  return isNonNegativeInteger(seconds) ? seconds : DEFAULT_SETTINGS.autoRotateSec;
};

export function parseSettings(rows = []) {
  return {
    storeName: parseStoreName(findValue(rows, KEYS.storeName)),
    theme: parseTheme(findValue(rows, KEYS.theme)),
    autoRotateSec: parseAutoRotateSec(findValue(rows, KEYS.autoRotateSec)),
  };
}
