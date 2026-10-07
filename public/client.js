import { renderItems, renderTabs, resolveActivePage } from './render.js';
import { nextPageName, rotationIntervalMs } from './rotation.js';

const storeNameEl = document.getElementById('store-name');
const themeEl = document.getElementById('theme');
const tabsEl = document.getElementById('tabs');
const itemsEl = document.getElementById('items');
const emptyEl = document.getElementById('empty');

let menu = { settings: {}, pages: [] };
let activePage = null;
let rotationTimer = null;

function drawHeader({ storeName, theme }) {
  document.title = storeName;
  storeNameEl.textContent = storeName;
  themeEl.href = `templates/${theme}.css`;
}

function drawPages(pages) {
  activePage = resolveActivePage(pages, activePage);
  const page = pages.find((p) => p.name === activePage);
  emptyEl.hidden = pages.length > 0;
  // renderTabs·renderItems는 사용자 텍스트를 모두 이스케이프한다.
  tabsEl.innerHTML = renderTabs(pages, activePage);
  itemsEl.innerHTML = page ? renderItems(page.items) : '';
}

function draw() {
  drawHeader(menu.settings);
  drawPages(menu.pages);
}

function restartRotation() {
  clearInterval(rotationTimer);
  const interval = rotationIntervalMs(menu.settings.autoRotateSec, menu.pages);
  if (interval === null) return;
  rotationTimer = setInterval(() => {
    activePage = nextPageName(menu.pages, activePage);
    draw();
  }, interval);
}

async function loadMenu() {
  try {
    const response = await fetch('/api/menu');
    menu = await response.json();
  } catch (error) {
    console.error('메뉴를 불러오지 못했습니다.', error);
    return;
  }
  draw();
  restartRotation();
}

tabsEl.addEventListener('click', (event) => {
  const tab = event.target.closest('[role="tab"]');
  if (!tab) return;
  activePage = tab.textContent;
  draw();
  restartRotation();
});

// EventSource는 연결이 끊기면 브라우저가 자동으로 다시 연결한다.
new EventSource('/events').addEventListener('menu-updated', loadMenu);

loadMenu();
