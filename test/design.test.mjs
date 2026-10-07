import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEVICES, deviceFor, assetUrls } from '../public/design.js';

const PUBLIC_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

test('shouldPickDeviceFromViewportSize', () => {
  const cases = [
    [390, 844, 'mobile'],
    [844, 390, 'mobile'], // 가로로 돌린 휴대폰
    [1080, 1920, 'signage'],
    [1440, 1920, 'tablet-port'],
    [768, 1024, 'tablet-port'],
    [1920, 1080, 'tablet-land'],
    [1280, 800, 'tablet-land'],
  ];
  for (const [width, height, expected] of cases) {
    assert.equal(deviceFor(width, height), expected, `${width}x${height}`);
  }
});

test('shouldDefineArtboardSizeForEachDevice', () => {
  assert.deepEqual(DEVICES, {
    signage: { width: 1080, height: 1920 },
    'tablet-land': { width: 1920, height: 1440 },
    'tablet-port': { width: 1440, height: 1920 },
    mobile: { width: 1080, height: 2160 },
  });
});

test('shouldBuildBackgroundAndFrameUrls', () => {
  assert.deepEqual(assetUrls('cafe-dark', 'signage'), {
    bg: 'assets/cafe-dark/bg-signage.png',
    frame: 'assets/cafe-dark/frame-signage.png',
  });
  assert.deepEqual(assetUrls('bistro-light', 'tablet-land'), {
    bg: 'assets/bistro-light/bg-tablet-land.png',
    frame: 'assets/bistro-light/frame-tablet-land.png',
  });
});

test('shouldHaveAssetFilesForEveryThemeAndDevice', () => {
  const themes = ['cafe-dark', 'bistro-light'];
  const devices = ['signage', 'tablet-land', 'tablet-port', 'mobile'];
  const missing = [];
  for (const theme of themes) {
    if (!existsSync(join(PUBLIC_DIR, 'templates', `${theme}.css`))) {
      missing.push(`templates/${theme}.css`);
    }
    for (const device of devices) {
      const { bg, frame } = assetUrls(theme, device);
      for (const url of [bg, frame]) {
        if (!existsSync(join(PUBLIC_DIR, url))) missing.push(url);
      }
    }
  }
  assert.deepEqual(missing, []);
});
