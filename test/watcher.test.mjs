import { test } from 'node:test';
import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import { createDebouncer, createWatcher } from '../src/watcher.mjs';

const enableFakeTimers = (t) => t.mock.timers.enable({ apis: ['setTimeout'] });

// chokidar.watch(path, options) 대역: 호출 인자를 기록하고 이벤트를 직접 내보낼 수 있다.
function fakeWatch() {
  const calls = [];
  const emitter = new EventEmitter();
  emitter.close = () => {};
  const watch = (...args) => {
    calls.push(args);
    return emitter;
  };
  return { watch, calls, emitter };
}

const FILE = 'data/menu.xlsx';

test('shouldCallbackOnceAfter300msOfSilence', (t) => {
  enableFakeTimers(t);
  let calls = 0;
  const trigger = createDebouncer(() => calls++, 300);

  trigger();
  t.mock.timers.tick(299);
  assert.equal(calls, 0);
  t.mock.timers.tick(1);
  assert.equal(calls, 1);
});

test('shouldMergeBurstOfEventsIntoOneCallback', (t) => {
  enableFakeTimers(t);
  let calls = 0;
  const trigger = createDebouncer(() => calls++, 300);

  for (let i = 0; i < 5; i++) {
    trigger();
    if (i < 4) t.mock.timers.tick(100);
  }
  assert.equal(calls, 0);
  t.mock.timers.tick(299);
  assert.equal(calls, 0);
  t.mock.timers.tick(1);
  assert.equal(calls, 1);
  t.mock.timers.tick(1000);
  assert.equal(calls, 1);
});

test('shouldRestartTimerWhenEventArrivesBeforeDelay', (t) => {
  enableFakeTimers(t);
  let calls = 0;
  const trigger = createDebouncer(() => calls++, 300);

  trigger();
  t.mock.timers.tick(200);
  trigger();
  t.mock.timers.tick(299);
  assert.equal(calls, 0);
  t.mock.timers.tick(1);
  assert.equal(calls, 1);
});

test('shouldTreatAddChangeUnlinkEventsAsSamePath', (t) => {
  enableFakeTimers(t);
  const { watch, emitter } = fakeWatch();
  let calls = 0;
  createWatcher({ watch, file: FILE, onChange: () => calls++ });

  emitter.emit('add', FILE);
  emitter.emit('change', FILE);
  emitter.emit('unlink', FILE);
  t.mock.timers.tick(300);
  assert.equal(calls, 1);
});

test('shouldWatchOnlyTargetFile', (t) => {
  enableFakeTimers(t);
  const { watch, calls: watchCalls, emitter } = fakeWatch();
  let calls = 0;
  createWatcher({ watch, file: FILE, onChange: () => calls++ });

  assert.equal(watchCalls.length, 1);
  assert.equal(watchCalls[0][0], FILE);

  emitter.emit('change', 'data/~$menu.xlsx');
  t.mock.timers.tick(300);
  assert.equal(calls, 0);

  emitter.emit('change', FILE);
  t.mock.timers.tick(300);
  assert.equal(calls, 1);
});
