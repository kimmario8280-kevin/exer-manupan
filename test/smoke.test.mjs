import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as XLSX from 'xlsx';

test('shouldRunTestRunnerAndImportDependencies', () => {
  assert.equal(typeof XLSX.utils.aoa_to_sheet, 'function');
});
