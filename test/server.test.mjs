import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createServer, resolvePort } from '../server.mjs';
import { xlsxBuffer } from '../test-support/xlsxBuffer.mjs';

const HEADER = ['메뉴명', '가격', '설명', '품절', '카테고리'];
const silentLogger = { warn: () => {}, error: () => {}, info: () => {}, log: () => {} };

const menuSheets = (storeName, itemName, price) => ({
  커피: [HEADER, [itemName, price]],
  _설정: [
    ['항목', '값'],
    ['매장명', storeName],
  ],
});

// 임시 디렉터리에 menu.xlsx를 만들고, 테스트가 끝나면 서버와 디렉터리를 정리한다.
function makeFixture(t, sheets = menuSheets('빌런 커피', '아메리카노', 4500)) {
  const dir = mkdtempSync(join(tmpdir(), 'manupan-'));
  const file = join(dir, 'menu.xlsx');
  if (sheets) writeFileSync(file, xlsxBuffer(sheets));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  return { dir, file };
}

async function startServer(t, options) {
  const app = await createServer({ port: 0, logger: silentLogger, ...options });
  t.after(() => app.close());
  return app;
}

const getMenu = async (app) => (await fetch(`${app.url}/api/menu`)).json();

// SSE 스트림을 열고, 조건을 만족하는 텍스트가 올 때까지 읽는다.
async function openEventStream(t, app) {
  const controller = new AbortController();
  t.after(() => controller.abort());
  const response = await fetch(`${app.url}/events`, { signal: controller.signal });
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let received = '';

  const readUntil = async (text, timeoutMs = 2000) => {
    const deadline = Date.now() + timeoutMs;
    while (!received.includes(text)) {
      const remaining = deadline - Date.now();
      if (remaining <= 0) throw new Error(`timeout: "${text}" 수신 못함 (받은 내용: ${JSON.stringify(received)})`);
      const chunk = await Promise.race([
        reader.read(),
        new Promise((resolve) => setTimeout(() => resolve(null), remaining)),
      ]);
      if (chunk === null) continue;
      if (chunk.done) break;
      received += decoder.decode(chunk.value, { stream: true });
    }
    return received.includes(text);
  };

  return { response, readUntil, received: () => received };
}

test('shouldServeParsedMenuAtApiMenu', async (t) => {
  const { file } = makeFixture(t);
  const app = await startServer(t, { file });

  const response = await fetch(`${app.url}/api/menu`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /application\/json/);
  const menu = await response.json();
  assert.equal(menu.settings.storeName, '빌런 커피');
  assert.equal(menu.pages[0].name, '커피');
  assert.equal(menu.pages[0].items[0].name, '아메리카노');
  assert.equal(menu.pages[0].items[0].price, 4500);
});

test('shouldServeIndexHtmlAtRoot', async (t) => {
  const { file } = makeFixture(t);
  const app = await startServer(t, { file });

  const response = await fetch(`${app.url}/`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /text\/html/);
  assert.match(await response.text(), /<html/);
});

test('shouldOpenSseStreamWithEventStreamHeaders', async (t) => {
  const { file } = makeFixture(t);
  const app = await startServer(t, { file });

  const stream = await openEventStream(t, app);
  assert.match(stream.response.headers.get('content-type'), /text\/event-stream/);
  assert.match(stream.response.headers.get('cache-control'), /no-cache/);
  assert.ok(await stream.readUntil(': connected'));
});

test('shouldPushMenuUpdatedAndServeNewDataAfterFileReplaced', async (t) => {
  const { file } = makeFixture(t);
  const app = await startServer(t, { file });
  const stream = await openEventStream(t, app);
  await stream.readUntil(': connected');

  writeFileSync(file, xlsxBuffer(menuSheets('새 카페', '라떼', 5000)));

  assert.ok(await stream.readUntil('event: menu-updated'));
  const menu = await getMenu(app);
  assert.equal(menu.settings.storeName, '새 카페');
  assert.equal(menu.pages[0].items[0].name, '라떼');
});

test('shouldKeepPreviousDataWhenReparseFails', async (t) => {
  const { file } = makeFixture(t);
  const errors = [];
  const logger = { ...silentLogger, error: (message) => errors.push(message) };
  const app = await startServer(t, { file, logger });
  const stream = await openEventStream(t, app);
  await stream.readUntil(': connected');

  // zip 헤더만 남기고 잘라 낸, 읽을 수 없는 xlsx
  writeFileSync(file, xlsxBuffer(menuSheets('깨질 카페', '깨짐', 1)).subarray(0, 100));

  const deadline = Date.now() + 2000;
  while (errors.length === 0 && Date.now() < deadline) {
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  assert.ok(errors.length > 0, '재파싱 실패가 오류 로그로 남아야 한다');
  assert.equal(stream.received().includes('menu-updated'), false);
  const menu = await getMenu(app);
  assert.equal(menu.settings.storeName, '빌런 커피');
  assert.equal(menu.pages[0].items[0].name, '아메리카노');
});

test('shouldStartWithEmptyPagesWhenFileMissingAtBoot', async (t) => {
  const { dir } = makeFixture(t, null);
  const app = await startServer(t, { file: join(dir, 'missing.xlsx') });

  const menu = await getMenu(app);
  assert.deepEqual(menu.pages, []);
  assert.deepEqual(menu.settings, {
    storeName: '메뉴판',
    theme: 'cafe-dark',
    autoRotateSec: 0,
  });
});

test('shouldReadPortFromEnv', () => {
  assert.equal(resolvePort({ PORT: '4123' }), 4123);
  assert.equal(resolvePort({}), 3000);
  assert.equal(resolvePort({ PORT: 'abc' }), 3000);
  assert.equal(resolvePort({ PORT: '' }), 3000);
  assert.equal(resolvePort({ PORT: '-1' }), 3000);
});
