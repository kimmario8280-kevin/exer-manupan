import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateSettings } from '../src/validateSettings.mjs';

const VALID = {
  storeName: ' 빌런 커피 ',
  theme: 'bistro-light',
  device: 'mobile',
  tagline: 'SPECIALTY COFFEE',
  autoRotateSec: 10,
};

test('shouldAcceptValidSettingsAndTrimText', () => {
  const result = validateSettings(VALID);
  assert.equal(result.ok, true);
  assert.equal(result.settings.storeName, '빌런 커피');
  assert.equal(result.settings.autoRotateSec, 10);
});

test('shouldAcceptBlankDeviceAsAuto', () => {
  for (const device of [null, '']) {
    const result = validateSettings({ ...VALID, device });
    assert.equal(result.ok, true);
    assert.equal(result.settings.device, null);
  }
});

test('shouldRejectUnknownThemeDeviceAndBadRotation', () => {
  const bad = [
    { theme: 'neon' },
    { device: 'tv' },
    { autoRotateSec: -1 },
    { autoRotateSec: 1.5 },
    { autoRotateSec: 'abc' },
    { storeName: '   ' },
  ];
  for (const override of bad) {
    const result = validateSettings({ ...VALID, ...override });
    assert.equal(result.ok, false, JSON.stringify(override));
    assert.ok(result.errors.length > 0);
  }
});

test('shouldRejectNonObjectBody', () => {
  for (const body of [null, undefined, 'x', 3]) {
    assert.equal(validateSettings(body).ok, false);
  }
});
