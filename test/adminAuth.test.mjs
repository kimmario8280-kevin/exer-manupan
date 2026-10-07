import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isAuthorized } from '../src/adminAuth.mjs';

const CREDENTIALS = { user: 'admin', password: '1234' };
const basic = (text) => `Basic ${Buffer.from(text).toString('base64')}`;

test('shouldAuthorizeCorrectBasicCredentials', () => {
  assert.equal(isAuthorized(basic('admin:1234'), CREDENTIALS), true);
});

test('shouldRejectWrongOrMissingCredentials', () => {
  for (const header of [undefined, '', 'Bearer x', basic('admin:0000'), basic('root:1234'), basic('admin'), 'Basic !!']) {
    assert.equal(isAuthorized(header, CREDENTIALS), false, String(header));
  }
});

test('shouldAllowColonInPassword', () => {
  assert.equal(isAuthorized(basic('admin:a:b'), { user: 'admin', password: 'a:b' }), true);
});
