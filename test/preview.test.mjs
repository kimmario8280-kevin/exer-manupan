import { test } from 'node:test';
import assert from 'node:assert/strict';
import { applyPreview } from '../public/preview.js';

const BASE = { storeName: '빌런', theme: 'cafe-dark', device: null, tagline: '', autoRotateSec: 0 };

test('shouldKeepSettingsWhenNoPreviewQuery', () => {
  assert.deepEqual(applyPreview(BASE, ''), BASE);
});

test('shouldOverrideKnownFieldsFromQuery', () => {
  const out = applyPreview(BASE, '?preview=1&theme=bistro-light&device=mobile&storeName=새집&tagline=TAG');
  assert.equal(out.theme, 'bistro-light');
  assert.equal(out.device, 'mobile');
  assert.equal(out.storeName, '새집');
  assert.equal(out.tagline, 'TAG');
});

test('shouldIgnoreOverridesWithoutPreviewFlag', () => {
  assert.deepEqual(applyPreview(BASE, '?theme=bistro-light'), BASE);
});

test('shouldIgnoreUnknownThemeAndDeviceInQuery', () => {
  const out = applyPreview(BASE, '?preview=1&theme=neon&device=tv');
  assert.equal(out.theme, 'cafe-dark');
  assert.equal(out.device, null);
});
