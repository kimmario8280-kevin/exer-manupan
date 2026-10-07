import { DEVICES } from '../public/design.js';

const DEFAULT_SETTINGS = Object.freeze({
  storeName: '메뉴판',
  theme: 'cafe-dark',
  autoRotateSec: 0,
  device: null,
  tagline: '',
});
export const ALLOWED_THEMES = Object.freeze(['cafe-dark', 'bistro-light']);
export const SETTING_KEYS = Object.freeze({
  storeName: '매장명',
  theme: '테마',
  device: '디바이스',
  tagline: '영문태그',
  autoRotateSec: '자동전환초',
});

const findValue = (rows, key) => rows.find((row) => row.항목 === key)?.값;

const isNonNegativeInteger = (n) => Number.isInteger(n) && n >= 0;

const parseStoreName = (raw) =>
  String(raw ?? '').trim() || DEFAULT_SETTINGS.storeName;

const parseTheme = (raw) =>
  ALLOWED_THEMES.includes(raw) ? raw : DEFAULT_SETTINGS.theme;

const parseDevice = (raw) =>
  Object.hasOwn(DEVICES, raw) ? raw : DEFAULT_SETTINGS.device;

const parseTagline = (raw) => String(raw ?? '').trim();

const parseAutoRotateSec = (raw) => {
  const seconds = Number(raw);
  return isNonNegativeInteger(seconds) ? seconds : DEFAULT_SETTINGS.autoRotateSec;
};

export function parseSettings(rows = []) {
  return {
    storeName: parseStoreName(findValue(rows, SETTING_KEYS.storeName)),
    theme: parseTheme(findValue(rows, SETTING_KEYS.theme)),
    device: parseDevice(findValue(rows, SETTING_KEYS.device)),
    tagline: parseTagline(findValue(rows, SETTING_KEYS.tagline)),
    autoRotateSec: parseAutoRotateSec(findValue(rows, SETTING_KEYS.autoRotateSec)),
  };
}
