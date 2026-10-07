import { DEVICES } from './design.js';

const FREE_TEXT_FIELDS = ['storeName', 'tagline'];

// 어드민 미리보기용: `?preview=1`일 때만 쿼리 값으로 설정을 덮어쓴다. 테마·디바이스는 아는 값만 받는다.
export function applyPreview(settings, search, themes = ['cafe-dark', 'bistro-light']) {
  const params = new URLSearchParams(search);
  if (params.get('preview') !== '1') return settings;
  const out = { ...settings };
  for (const field of FREE_TEXT_FIELDS) {
    if (params.has(field)) out[field] = params.get(field);
  }
  if (themes.includes(params.get('theme'))) out.theme = params.get('theme');
  if (Object.hasOwn(DEVICES, params.get('device'))) out.device = params.get('device');
  return out;
}
