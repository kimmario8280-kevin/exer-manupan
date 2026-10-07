import * as XLSX from 'xlsx';
import { SETTING_KEYS } from './parseSettings.mjs';

const SETTINGS_SHEET = '_설정';
const HEADER = ['항목', '값'];

const toCell = (value) => value ?? '';

// `_설정` 시트의 알려진 항목 값을 바꾸고 모르는 항목 행은 그대로 둔다. 시트가 없으면 만든다. workbook을 직접 수정한다.
export function applySettings(workbook, settings) {
  const sheet = workbook.Sheets[SETTINGS_SHEET];
  const rows = sheet ? XLSX.utils.sheet_to_json(sheet, { header: 1 }).slice(1) : [];
  for (const [field, key] of Object.entries(SETTING_KEYS)) {
    const row = rows.find(([name]) => name === key);
    if (row) row[1] = toCell(settings[field]);
    else rows.push([key, toCell(settings[field])]);
  }
  const updated = XLSX.utils.aoa_to_sheet([HEADER, ...rows]);
  if (sheet) workbook.Sheets[SETTINGS_SHEET] = updated;
  else XLSX.utils.book_append_sheet(workbook, updated, SETTINGS_SHEET);
  return workbook;
}
