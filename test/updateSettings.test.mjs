import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as XLSX from 'xlsx';
import { makeWorkbook } from '../test-support/makeWorkbook.mjs';
import { applySettings } from '../src/updateSettings.mjs';
import { parseWorkbook } from '../src/parseWorkbook.mjs';

const NEW_SETTINGS = {
  storeName: '새 카페',
  theme: 'bistro-light',
  device: 'tablet-land',
  tagline: 'ROASTERY',
  autoRotateSec: 15,
};
const silentLogger = { warn: () => {} };

const settingsRows = (workbook) => XLSX.utils.sheet_to_json(workbook.Sheets['_설정']);

test('shouldWriteAllKnownSettingsIntoSettingsSheet', () => {
  const workbook = makeWorkbook({ 커피: [['메뉴명', '가격'], ['라떼', 5000]] });
  applySettings(workbook, NEW_SETTINGS);
  assert.deepEqual(parseWorkbook(workbook, { logger: silentLogger }).settings, NEW_SETTINGS);
});

test('shouldReplaceExistingValuesAndKeepUnknownRows', () => {
  const workbook = makeWorkbook({
    커피: [['메뉴명', '가격'], ['라떼', 5000]],
    _설정: [['항목', '값'], ['매장명', '옛 카페'], ['메모', '유지'], ['테마', 'cafe-dark']],
  });
  applySettings(workbook, NEW_SETTINGS);
  const rows = settingsRows(workbook);
  assert.equal(rows.filter((r) => r.항목 === '매장명').length, 1);
  assert.equal(rows.find((r) => r.항목 === '매장명').값, '새 카페');
  assert.equal(rows.find((r) => r.항목 === '메모').값, '유지');
});

test('shouldNotTouchMenuSheets', () => {
  const workbook = makeWorkbook({ 커피: [['메뉴명', '가격'], ['라떼', 5000]] });
  applySettings(workbook, NEW_SETTINGS);
  const { pages } = parseWorkbook(workbook, { logger: silentLogger });
  assert.equal(pages[0].items[0].name, '라떼');
  assert.deepEqual(workbook.SheetNames, ['커피', '_설정']);
});

test('shouldWriteBlankDeviceWhenNull', () => {
  const workbook = makeWorkbook({ 커피: [['메뉴명', '가격']] });
  applySettings(workbook, { ...NEW_SETTINGS, device: null });
  assert.equal(parseWorkbook(workbook, { logger: silentLogger }).settings.device, null);
});
