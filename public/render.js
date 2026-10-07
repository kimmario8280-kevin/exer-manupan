import { DEVICE_LABELS } from './design.js';

const PRICE_LOCALE = 'ko-KR';
const CURRENCY_SUFFIX = '원';
const SOLD_OUT_LABEL = '품절';
const CSS = Object.freeze({
  item: 'item',
  soldOut: 'sold-out',
  soldOutLabel: 'sold-out-label',
  categoryTitle: 'category-title',
  tab: 'tab',
  tabActive: 'active',
  deviceButton: 'device-button',
  deviceButtonActive: 'active',
});

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function formatPrice(price) {
  return `${price.toLocaleString(PRICE_LOCALE)}${CURRENCY_SUFFIX}`;
}

export function renderItem({ name, price, description, soldOut }) {
  const className = soldOut ? `${CSS.item} ${CSS.soldOut}` : CSS.item;
  return (
    `<li class="${className}">` +
    `<span class="name">${escapeHtml(name)}</span>` +
    `<span class="description">${escapeHtml(description)}</span>` +
    `<span class="price">${formatPrice(price)}</span>` +
    (soldOut ? renderSoldOutLabel() : '') +
    '</li>'
  );
}

function renderSoldOutLabel() {
  return `<span class="${CSS.soldOutLabel}">${SOLD_OUT_LABEL}</span>`;
}

// 카테고리의 첫 등장 순서를 유지하며 [카테고리, 항목들] 쌍으로 묶는다.
function groupByCategory(items) {
  const groups = new Map();
  for (const item of items) {
    if (!groups.has(item.category)) groups.set(item.category, []);
    groups.get(item.category).push(item);
  }
  return [...groups];
}

function renderCategoryTitle(category) {
  return `<h3 class="${CSS.categoryTitle}">${escapeHtml(category)}</h3>`;
}

export function renderItems(items) {
  return groupByCategory(items)
    .map(([category, groupItems]) => {
      const title = category === null ? '' : renderCategoryTitle(category);
      return `${title}<ul>${groupItems.map(renderItem).join('')}</ul>`;
    })
    .join('');
}

function renderTab(name, active) {
  const className = active ? `${CSS.tab} ${CSS.tabActive}` : CSS.tab;
  return `<button role="tab" class="${className}" aria-selected="${active}">${escapeHtml(name)}</button>`;
}

export function renderTabs(pages, activeName) {
  return pages.map(({ name }) => renderTab(name, name === activeName)).join('');
}

export function resolveActivePage(pages, activeName) {
  if (pages.some((page) => page.name === activeName)) return activeName;
  return pages[0]?.name ?? null;
}

function renderDeviceButton(device, label, active) {
  const className = active ? `${CSS.deviceButton} ${CSS.deviceButtonActive}` : CSS.deviceButton;
  return `<button type="button" class="${className}" data-device="${device}" aria-pressed="${active}">${label}</button>`;
}

export function renderDeviceButtons(activeDevice) {
  return Object.entries(DEVICE_LABELS)
    .map(([device, label]) => renderDeviceButton(device, label, device === activeDevice))
    .join('');
}
