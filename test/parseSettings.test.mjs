import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseSettings } from '../src/parseSettings.mjs';

const row = (항목, 값) => ({ 항목, 값 });

test('shouldReturnDefaultsWhenSettingsMissing', () => {
  assert.deepEqual(parseSettings(undefined), {
    storeName: '메뉴판',
    theme: 'cafe-dark',
    autoRotateSec: 0,
    device: null,
    tagline: '',
  });
});

test('shouldReadStoreName', () => {
  const settings = parseSettings([row('매장명', '빌런 커피')]);
  assert.equal(settings.storeName, '빌런 커피');
});

test('shouldFallbackStoreNameWhenBlank', () => {
  for (const blank of ['', '  ', undefined]) {
    const settings = parseSettings([row('매장명', blank)]);
    assert.equal(settings.storeName, '메뉴판', `값 ${JSON.stringify(blank)}`);
  }
});

test('shouldReadKnownTheme', () => {
  const settings = parseSettings([row('테마', 'bistro-light')]);
  assert.equal(settings.theme, 'bistro-light');
});

test('shouldFallbackToDefaultThemeWhenUnknown', () => {
  const settings = parseSettings([row('테마', 'neon')]);
  assert.equal(settings.theme, 'cafe-dark');
});

test('shouldReadAutoRotateSec', () => {
  assert.equal(parseSettings([row('자동전환초', 5)]).autoRotateSec, 5);
  assert.equal(parseSettings([row('자동전환초', '5')]).autoRotateSec, 5);
  assert.equal(parseSettings([row('자동전환초', 0)]).autoRotateSec, 0);
});

test('shouldFallbackAutoRotateWhenNegativeOrNotInteger', () => {
  assert.equal(parseSettings([row('자동전환초', -1)]).autoRotateSec, 0);
  assert.equal(parseSettings([row('자동전환초', 2.5)]).autoRotateSec, 0);
});

test('shouldFallbackAutoRotateWhenNotNumber', () => {
  for (const value of ['abc', '', undefined, null]) {
    const settings = parseSettings([row('자동전환초', value)]);
    assert.equal(settings.autoRotateSec, 0, `값 ${JSON.stringify(value)}`);
  }
});

test('shouldReadKnownDevice', () => {
  assert.equal(parseSettings([row('디바이스', 'tablet-land')]).device, 'tablet-land');
});

test('shouldFallbackDeviceToNullWhenUnknownOrBlank', () => {
  for (const raw of ['tv', '', undefined, 'toString']) {
    assert.equal(parseSettings([row('디바이스', raw)]).device, null, JSON.stringify(raw));
  }
});

test('shouldReadTaglineTrimmedAndEmptyWhenBlank', () => {
  assert.equal(parseSettings([row('영문태그', '  SPECIALTY COFFEE ')]).tagline, 'SPECIALTY COFFEE');
  assert.equal(parseSettings([row('영문태그', undefined)]).tagline, '');
});
