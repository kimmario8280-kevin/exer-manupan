import * as XLSX from 'xlsx';

// { 시트명: 2차원 배열 } → workbook. 시트 순서는 객체 키 순서를 따른다.
export function makeWorkbook(sheets) {
  const workbook = XLSX.utils.book_new();
  for (const [name, aoa] of Object.entries(sheets)) {
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet(aoa), name);
  }
  return workbook;
}
