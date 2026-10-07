import * as XLSX from 'xlsx';
import { makeWorkbook } from './makeWorkbook.mjs';

// { 시트명: 2차원 배열 } → .xlsx 파일 내용(Buffer)
export function xlsxBuffer(sheets) {
  return XLSX.write(makeWorkbook(sheets), { type: 'buffer', bookType: 'xlsx' });
}
