import { DEVICES, DEVICE_LABELS } from '/design.js';

const THEME_LABELS = Object.freeze({
  'cafe-dark': { name: '카페 다크', dot: '#caa05a' },
  'bistro-light': { name: '비스트로 라이트', dot: '#ab3f2d' },
});
const AUTO_DEVICE_LABEL = '자동 (창 크기)';
const PREVIEW_DEFAULT_DEVICE = 'tablet-land';
const PREVIEW_DEBOUNCE_MS = 250;

const formEl = document.getElementById('form');
const themeButtonsEl = document.getElementById('theme-buttons');
const deviceButtonsEl = document.getElementById('device-buttons');
const storeNameEl = document.getElementById('store-name');
const taglineEl = document.getElementById('tagline');
const autoRotateEl = document.getElementById('auto-rotate');
const saveEl = document.getElementById('save');
const statusEl = document.getElementById('status');
const previewEl = document.getElementById('preview');
const previewFrameEl = document.getElementById('preview-frame');
const captionEl = document.getElementById('preview-caption');

let choices = { themes: [], devices: [] };
let state = null; // 화면에서 편집 중인 값
let previewTimer = null;

function setStatus(message, kind = '') {
  statusEl.textContent = message;
  statusEl.dataset.kind = kind;
}

function choiceButton(label, pressed, dataset, dot) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'choice';
  button.setAttribute('aria-pressed', String(pressed));
  Object.assign(button.dataset, dataset);
  if (dot) {
    const dotEl = document.createElement('span');
    dotEl.className = 'dot';
    dotEl.style.setProperty('--dot', dot);
    button.append(dotEl);
  }
  button.append(label);
  return button;
}

function drawChoices() {
  themeButtonsEl.replaceChildren(
    ...choices.themes.map((theme) => {
      const label = THEME_LABELS[theme] ?? { name: theme, dot: 'currentColor' };
      return choiceButton(label.name, theme === state.theme, { theme }, label.dot);
    }),
  );
  const devices = [
    choiceButton(AUTO_DEVICE_LABEL, state.device === null, { device: '' }),
    ...choices.devices.map((device) =>
      choiceButton(DEVICE_LABELS[device] ?? device, device === state.device, { device })),
  ];
  deviceButtonsEl.replaceChildren(...devices);
}

function previewUrl() {
  const params = new URLSearchParams({
    preview: '1',
    theme: state.theme,
    storeName: state.storeName,
    tagline: state.tagline,
  });
  if (state.device) params.set('device', state.device);
  return `/?${params}`;
}

// 편집 중인 값을 iframe에 쿼리로 넘겨 저장 전에 미리 본다. 미리보기 비율은 고른 기기의 아트보드를 따른다.
function drawPreview() {
  const { width, height } = DEVICES[state.device ?? PREVIEW_DEFAULT_DEVICE];
  previewFrameEl.style.setProperty('--ratio', width / height);
  previewEl.src = previewUrl();
  captionEl.textContent = state.device ? `${DEVICE_LABELS[state.device]} · ${width}×${height}` : AUTO_DEVICE_LABEL;
}

function schedulePreview() {
  clearTimeout(previewTimer);
  previewTimer = setTimeout(drawPreview, PREVIEW_DEBOUNCE_MS);
}

function fillForm() {
  storeNameEl.value = state.storeName;
  taglineEl.value = state.tagline;
  autoRotateEl.value = state.autoRotateSec;
}

async function load() {
  const response = await fetch('/api/admin/settings');
  if (!response.ok) throw new Error(`설정을 불러오지 못했습니다 (${response.status})`);
  const body = await response.json();
  choices = { themes: body.themes, devices: body.devices };
  state = { ...body.settings };
  fillForm();
  drawChoices();
  drawPreview();
}

themeButtonsEl.addEventListener('click', (event) => {
  const button = event.target.closest('[data-theme]');
  if (!button) return;
  state.theme = button.dataset.theme;
  drawChoices();
  drawPreview();
});

deviceButtonsEl.addEventListener('click', (event) => {
  const button = event.target.closest('[data-device]');
  if (!button) return;
  state.device = button.dataset.device || null;
  drawChoices();
  drawPreview();
});

formEl.addEventListener('input', () => {
  state.storeName = storeNameEl.value;
  state.tagline = taglineEl.value;
  state.autoRotateSec = autoRotateEl.value;
  setStatus('저장하지 않은 변경이 있습니다.');
  schedulePreview();
});

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  saveEl.disabled = true;
  setStatus('저장 중…');
  try {
    const response = await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    });
    const body = await response.json();
    if (!response.ok) {
      setStatus(body.errors.join(' '), 'error');
      return;
    }
    state = { ...body.settings };
    fillForm();
    setStatus('Excel에 저장했습니다. 메뉴판에 바로 반영됩니다.', 'ok');
  } catch (error) {
    setStatus(`저장하지 못했습니다: ${error.message}`, 'error');
  } finally {
    saveEl.disabled = false;
  }
});

load().catch((error) => setStatus(error.message, 'error'));
