import * as XLSX from 'xlsx';
import { parseSettings } from './parseSettings.mjs';

const HIDDEN_SHEET_PREFIX = '_';
const SETTINGS_SHEET = '_설정';
const COLUMNS = Object.freeze({
  name: '메뉴명',
  price: '가격',
  description: '설명',
  soldOut: '품절',
  category: '카테고리',
});

const trimmedText = (raw) => String(raw ?? '').trim();

const isMenuSheet = (sheetName) => !sheetName.startsWith(HIDDEN_SHEET_PREFIX);

const isValidPrice = (raw) => trimmedText(raw) !== '' && Number.isFinite(Number(raw));

const sheetToRows = (sheet) => XLSX.utils.sheet_to_json(sheet);

// __rowNum__은 0부터 세는 시트 행 번호다. 사용자가 Excel에서 보는 행 번호는 1을 더한다.
const excelRowNumber = (row) => row.__rowNum__ + 1;

const toItem = (row) => ({
  name: row[COLUMNS.name],
  price: Number(row[COLUMNS.price]),
  description: row[COLUMNS.description] ?? '',
  soldOut: trimmedText(row[COLUMNS.soldOut]).toUpperCase() === 'Y',
  category: trimmedText(row[COLUMNS.category]) || null,
});

function parseMenuSheet(sheetName, sheet, logger) {
  const items = sheetToRows(sheet)
    .filter((row) => trimmedText(row[COLUMNS.name]) !== '')
    .filter((row) => {
      const valid = isValidPrice(row[COLUMNS.price]);
      if (!valid) {
        logger.warn(`${sheetName} 시트 ${excelRowNumber(row)}행: 가격이 숫자가 아니어서 건너뜀`);
      }
      return valid;
    })
    .map(toItem);
  return { name: sheetName, items };
}

function parseSettingsSheet(sheet) {
  return parseSettings(sheet && sheetToRows(sheet));
}

export function parseWorkbook(workbook, { logger = console } = {}) {
  const pages = workbook.SheetNames
    .filter(isMenuSheet)
    .map((name) => parseMenuSheet(name, workbook.Sheets[name], logger));
  const settings = parseSettingsSheet(workbook.Sheets[SETTINGS_SHEET]);
  return { settings, pages };
}
