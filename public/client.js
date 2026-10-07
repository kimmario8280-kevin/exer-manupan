import { DEVICES, assetUrls, resolveDevice } from './design.js';
import { applyPreview } from './preview.js';
import { renderItems, renderTabs, resolveActivePage } from './render.js';
import { nextPageName, rotationIntervalMs } from './rotation.js';

const boardEl = document.getElementById('board');
const bgLayerEl = document.getElementById('layer-bg');
const frameLayerEl = document.getElementById('layer-frame');
const taglineEl = document.getElementById('tagline');
const storeNameEl = document.getElementById('store-name');
const themeEl = document.getElementById('theme');
const tabsEl = document.getElementById('tabs');
const itemsEl = document.getElementById('items');
const emptyEl = document.getElementById('empty');

let menu = { settings: {}, pages: [] };
let activePage = null;
let rotationTimer = null;

// 어드민이 정한 기기(없으면 창 크기로 판별한 기기)의 아트보드 비율과 배경·프레임 PNG를 적용한다.
function drawBoard({ theme, device: configured }) {
  const device = resolveDevice(configured, window.innerWidth, window.innerHeight);
  const { width, height } = DEVICES[device];
  const { bg, frame } = assetUrls(theme, device);
  boardEl.dataset.device = device;
  boardEl.style.setProperty('--ratio', width / height);
  // 이미지 URL은 CSS 변수가 아니라 요소의 인라인 스타일로 건다. 변수 안의 상대 경로는 CSS 파일 위치 기준으로 해석된다.
  bgLayerEl.style.backgroundImage = `url("${bg}")`;
  frameLayerEl.style.backgroundImage = `url("${frame}")`;
}

function drawHeader(settings) {
  const { storeName, theme, tagline } = settings;
  document.title = storeName;
  storeNameEl.textContent = storeName;
  taglineEl.textContent = tagline;
  taglineEl.hidden = !tagline;
  themeEl.href = `templates/${theme}.css`;
  drawBoard(settings);
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
    menu.settings = applyPreview(menu.settings, window.location.search);
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

window.addEventListener('resize', () => {
  if (menu.settings.theme) drawBoard(menu.settings);
});

// EventSource는 연결이 끊기면 브라우저가 자동으로 다시 연결한다.
new EventSource('/events').addEventListener('menu-updated', loadMenu);

loadMenu();
