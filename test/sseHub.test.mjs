import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSseHub } from '../src/sseHub.mjs';

// Express 응답 객체 대역: 쓰여진 청크를 기록하고, close 이벤트를 직접 내보낼 수 있다.
function fakeResponse() {
  const writes = [];
  const handlers = {};
  return {
    writes,
    failing: false,
    write(chunk) {
      if (this.failing) throw new Error('write failed');
      writes.push(chunk);
    },
    on(event, handler) {
      handlers[event] = handler;
    },
    emit(event) {
      handlers[event]?.();
    },
  };
}

const MENU_UPDATED = 'event: menu-updated\ndata: {}\n\n';

test('shouldSendConnectedCommentOnRegister', () => {
  const hub = createSseHub();
  const res = fakeResponse();

  hub.register(res);

  assert.deepEqual(res.writes, [': connected\n\n']);
});

test('shouldBroadcastMenuUpdatedEventToAllClients', () => {
  const hub = createSseHub();
  const first = fakeResponse();
  const second = fakeResponse();
  hub.register(first);
  hub.register(second);

  hub.broadcast('menu-updated');

  assert.equal(first.writes.at(-1), MENU_UPDATED);
  assert.equal(second.writes.at(-1), MENU_UPDATED);
});

test('shouldRemoveClientOnClose', () => {
  const hub = createSseHub();
  const closed = fakeResponse();
  const open = fakeResponse();
  hub.register(closed);
  hub.register(open);

  closed.emit('close');
  hub.broadcast('menu-updated');

  assert.deepEqual(closed.writes, [': connected\n\n']);
  assert.equal(open.writes.at(-1), MENU_UPDATED);
});

test('shouldNotThrowWhenBroadcastWithoutClients', () => {
  const noClients = createSseHub();
  assert.doesNotThrow(() => noClients.broadcast('menu-updated'));

  const hub = createSseHub();
  const broken = fakeResponse();
  const healthy = fakeResponse();
  hub.register(broken);
  hub.register(healthy);
  broken.failing = true;

  assert.doesNotThrow(() => hub.broadcast('menu-updated'));
  assert.equal(healthy.writes.at(-1), MENU_UPDATED);
});
