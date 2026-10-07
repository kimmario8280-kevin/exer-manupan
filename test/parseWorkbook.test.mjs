import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseWorkbook } from '../src/parseWorkbook.mjs';
import { makeWorkbook } from '../test-support/makeWorkbook.mjs';

const HEADER = ['메뉴명', '가격', '설명', '품절', '카테고리'];
const silentLogger = { warn: () => {} };

// 메뉴 행 한 줄만 가진 workbook을 만들고 첫 페이지의 items를 돌려준다.
const itemsOf = (rows, options = { logger: silentLogger }) =>
  parseWorkbook(makeWorkbook({ 커피: [HEADER, ...rows] }), options).pages[0].items;

test('shouldConvertOneSheetToOnePage', () => {
  const { pages } = parseWorkbook(makeWorkbook({ 커피: [HEADER] }));
  assert.equal(pages.length, 1);
  assert.equal(pages[0].name, '커피');
  assert.deepEqual(pages[0].items, []);
});

test('shouldKeepSheetOrderAsPageOrder', () => {
  const workbook = makeWorkbook({ 음료: [HEADER], 커피: [HEADER], 디저트: [HEADER] });
  const names = parseWorkbook(workbook).pages.map((page) => page.name);
  assert.deepEqual(names, ['음료', '커피', '디저트']);
});

test('shouldIgnoreSheetsStartingWithUnderscore', () => {
  const workbook = makeWorkbook({
    _설정: [['항목', '값']],
    커피: [HEADER],
    _메모: [['메모']],
  });
  const names = parseWorkbook(workbook).pages.map((page) => page.name);
  assert.deepEqual(names, ['커피']);
});

test('shouldAddPageWhenSheetAdded', () => {
  const two = makeWorkbook({ 커피: [HEADER], 디저트: [HEADER] });
  const three = makeWorkbook({ 커피: [HEADER], 디저트: [HEADER], 음료: [HEADER] });
  assert.equal(parseWorkbook(two).pages.length, 2);
  assert.equal(parseWorkbook(three).pages.length, 3);
});

test('shouldMapRowToItemFields', () => {
  const items = itemsOf([['아메리카노', 4500, '깔끔한 산미', '', '에스프레소']]);
  assert.deepEqual(items, [
    {
      name: '아메리카노',
      price: 4500,
      description: '깔끔한 산미',
      soldOut: false,
      category: '에스프레소',
    },
  ]);
});

test('shouldParsePriceAsNumber', () => {
  const items = itemsOf([
    ['아메리카노', 4500],
    ['라떼', '5000'],
  ]);
  assert.strictEqual(items[0].price, 4500);
  assert.strictEqual(items[1].price, 5000);
});

test('shouldMarkSoldOutWhenY', () => {
  for (const mark of ['Y', 'y', ' Y ']) {
    const [item] = itemsOf([['아메리카노', 4500, '', mark]]);
    assert.equal(item.soldOut, true, `품절 값 ${JSON.stringify(mark)}`);
  }
});

test('shouldNotMarkSoldOutWhenBlank', () => {
  for (const mark of [undefined, '', 'N', '예']) {
    const [item] = itemsOf([['아메리카노', 4500, '', mark]]);
    assert.equal(item.soldOut, false, `품절 값 ${JSON.stringify(mark)}`);
  }
});

test('shouldSetCategoryNullWhenBlank', () => {
  const items = itemsOf([
    ['아메리카노', 4500, '', '', ''],
    ['라떼', 5000, '', '', ' 에스프레소 '],
  ]);
  assert.strictEqual(items[0].category, null);
  assert.strictEqual(items[1].category, '에스프레소');
});

test('shouldSetDescriptionEmptyWhenBlank', () => {
  const [item] = itemsOf([['아메리카노', 4500]]);
  assert.strictEqual(item.description, '');
});

test('shouldSkipRowWhenNameBlank', () => {
  const items = itemsOf([
    ['', 1000],
    ['  ', 2000],
    ['라떼', 5000],
  ]);
  assert.deepEqual(
    items.map((item) => item.name),
    ['라떼'],
  );
});

test('shouldSkipRowWhenPriceNotNumeric', () => {
  let items;
  assert.doesNotThrow(() => {
    items = itemsOf([
      ['공짜커피', '무료'],
      ['가격없음', ''],
      ['원화표기', '₩4,500'],
      ['라떼', 5000],
    ]);
  });
  assert.deepEqual(
    items.map((item) => item.name),
    ['라떼'],
  );
});

test('shouldLogSheetAndRowNumberWhenSkippingPrice', () => {
  const messages = [];
  const logger = { warn: (message) => messages.push(message) };
  const workbook = makeWorkbook({
    커피: [HEADER, ['아메리카노', 4500]],
    디저트: [HEADER, ['케이크', 6000], ['쿠키', '무료']],
  });
  parseWorkbook(workbook, { logger });
  assert.equal(messages.length, 1);
  assert.match(messages[0], /디저트/);
  assert.match(messages[0], /3/);
});

test('shouldReturnSettingsFromSettingsSheet', () => {
  const workbook = makeWorkbook({
    커피: [HEADER],
    _설정: [
      ['항목', '값'],
      ['매장명', '빌런 커피'],
      ['테마', 'bistro-light'],
      ['자동전환초', 5],
    ],
  });
  assert.deepEqual(parseWorkbook(workbook).settings, {
    storeName: '빌런 커피',
    theme: 'bistro-light',
    device: null,
    tagline: '',
    autoRotateSec: 5,
  });
});

test('shouldReturnDefaultSettingsWhenNoSettingsSheet', () => {
  const { settings } = parseWorkbook(makeWorkbook({ 커피: [HEADER] }));
  assert.deepEqual(settings, {
    storeName: '메뉴판',
    theme: 'cafe-dark',
    device: null,
    tagline: '',
    autoRotateSec: 0,
  });
});

test('shouldReturnEmptyPagesForWorkbookWithoutMenuSheets', () => {
  const { pages } = parseWorkbook(makeWorkbook({ _설정: [['항목', '값']] }));
  assert.deepEqual(pages, []);
});
