import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  formatPrice,
  renderItem,
  renderItems,
  renderTabs,
  resolveActivePage,
} from '../public/render.js';

const item = (overrides = {}) => ({
  name: '아메리카노',
  price: 4500,
  description: '깔끔한 산미',
  soldOut: false,
  category: null,
  ...overrides,
});

const CATEGORY_TITLE = /class="category-title"/g;

test('shouldFormatPriceWithThousandsSeparatorAndWon', () => {
  assert.equal(formatPrice(4500), '4,500원');
  assert.equal(formatPrice(500), '500원');
  assert.equal(formatPrice(12000), '12,000원');
});

test('shouldRenderItemNameAndDescription', () => {
  const html = renderItem(item());
  assert.match(html, /아메리카노/);
  assert.match(html, /깔끔한 산미/);
  assert.match(html, /4,500원/);
});

test('shouldMarkSoldOutItemWithClassAndLabel', () => {
  const html = renderItem(item({ soldOut: true }));
  assert.match(html, /sold-out/);
  assert.match(html, /품절/);
});

test('shouldNotMarkAvailableItemAsSoldOut', () => {
  const html = renderItem(item({ soldOut: false }));
  assert.doesNotMatch(html, /sold-out/);
  assert.doesNotMatch(html, /품절/);
});

test('shouldGroupItemsByCategory', () => {
  const html = renderItems([
    item({ name: '에스프레소A', category: '에스프레소' }),
    item({ name: '논커피B', category: '논커피' }),
    item({ name: '에스프레소C', category: '에스프레소' }),
  ]);
  assert.equal(html.match(CATEGORY_TITLE).length, 2);
  const position = (text) => html.indexOf(text);
  // 첫 등장 순서 유지: 에스프레소 그룹이 논커피 그룹보다 앞
  assert.ok(position('>에스프레소<') < position('>논커피<'));
  // 같은 카테고리끼리 묶임: A, C가 B보다 앞
  assert.ok(position('에스프레소A') < position('에스프레소C'));
  assert.ok(position('에스프레소C') < position('논커피B'));
});

test('shouldRenderWithoutGroupWhenNoCategory', () => {
  const none = renderItems([item({ name: '라떼' }), item({ name: '모카' })]);
  assert.equal(none.match(CATEGORY_TITLE), null);
  assert.match(none, /라떼/);
  assert.match(none, /모카/);

  const mixed = renderItems([
    item({ name: '라떼' }),
    item({ name: '에스프레소A', category: '에스프레소' }),
  ]);
  assert.equal(mixed.match(CATEGORY_TITLE).length, 1);
  assert.match(mixed, /라떼/);
  assert.match(mixed, /에스프레소A/);
});

test('shouldEscapeHtmlInItemText', () => {
  const html = renderItems([
    item({
      name: '<script>alert(1)</script>',
      description: `"a" & 'b'`,
      category: '<b>분류</b>',
    }),
  ]);
  assert.doesNotMatch(html, /<script>/);
  assert.doesNotMatch(html, /<b>/);
  assert.match(html, /&lt;script&gt;/);
  assert.match(html, /&amp;/);
  assert.doesNotMatch(html, /"a"/);
});

test('shouldRenderTabsFromPages', () => {
  const pages = [{ name: '커피' }, { name: '디저트' }, { name: '음료' }];
  const html = renderTabs(pages, '디저트');
  const tabs = html.match(/<button[^>]*role="tab"[^>]*>/g);
  assert.equal(tabs.length, 3);
  const selected = tabs.filter((tag) => tag.includes('aria-selected="true"'));
  assert.equal(selected.length, 1);
  assert.match(selected[0], /active/);
  assert.match(html, /<button[^>]*aria-selected="true"[^>]*>\s*디저트\s*</);
  assert.equal(html.match(/aria-selected="false"/g).length, 2);
});

test('shouldKeepActiveTabWhenPageStillExists', () => {
  const pages = [{ name: '커피' }, { name: '디저트' }];
  assert.equal(resolveActivePage(pages, '디저트'), '디저트');
});

test('shouldFallbackToFirstTabWhenActivePageRemoved', () => {
  const pages = [{ name: '커피' }, { name: '디저트' }];
  assert.equal(resolveActivePage(pages, '음료'), '커피');
  assert.equal(resolveActivePage(pages, undefined), '커피');
  assert.equal(resolveActivePage([], '커피'), null);
});
