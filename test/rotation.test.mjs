import { test } from 'node:test';
import assert from 'node:assert/strict';
import { nextPageName, rotationIntervalMs } from '../public/rotation.js';

const pages = [{ name: '커피' }, { name: '디저트' }, { name: '음료' }];

test('shouldAdvanceToNextPageEveryNSeconds', () => {
  assert.equal(nextPageName(pages, '커피'), '디저트');
  assert.equal(nextPageName(pages, '디저트'), '음료');
  // 마지막 페이지 다음은 첫 페이지로 순환한다
  assert.equal(nextPageName(pages, '음료'), '커피');
});

test('shouldNotRotateWhenZero', () => {
  assert.equal(rotationIntervalMs(0, pages), null);
  assert.equal(rotationIntervalMs(5, pages), 5000);
  // 페이지가 1개 이하면 순환할 이유가 없다
  assert.equal(rotationIntervalMs(5, [{ name: '커피' }]), null);
  assert.equal(rotationIntervalMs(5, []), null);
});
