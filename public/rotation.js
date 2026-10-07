const MS_PER_SECOND = 1000;

// 마지막 페이지 다음은 첫 페이지다. 현재 페이지가 목록에 없으면 첫 페이지로 시작한다.
export function nextPageName(pages, current) {
  const index = pages.findIndex((page) => page.name === current);
  return pages[(index + 1) % pages.length].name;
}

// 0이거나 페이지가 1개 이하면 순환하지 않는다(null).
export function rotationIntervalMs(autoRotateSec, pages) {
  const rotates = autoRotateSec > 0 && pages.length > 1;
  return rotates ? autoRotateSec * MS_PER_SECOND : null;
}
