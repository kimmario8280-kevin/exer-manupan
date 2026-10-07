import { DEVICES } from '../public/design.js';
import { ALLOWED_THEMES } from './parseSettings.mjs';

const text = (value) => (typeof value === 'string' ? value.trim() : '');

// 어드민이 보낸 설정을 검증한다. parseSettings와 달리 잘못된 값을 조용히 바꾸지 않고 오류로 돌려준다.
export function validateSettings(input) {
  if (input === null || typeof input !== 'object') {
    return { ok: false, errors: ['설정 객체가 필요합니다.'] };
  }
  const errors = [];
  const storeName = text(input.storeName);
  if (!storeName) errors.push('매장명은 비울 수 없습니다.');
  if (!ALLOWED_THEMES.includes(input.theme)) errors.push(`알 수 없는 테마: ${input.theme}`);
  const device = input.device || null;
  if (device !== null && !Object.hasOwn(DEVICES, device)) errors.push(`알 수 없는 디바이스: ${device}`);
  const autoRotateSec = Number(input.autoRotateSec);
  if (!Number.isInteger(autoRotateSec) || autoRotateSec < 0) {
    errors.push('자동전환초는 0 이상의 정수여야 합니다.');
  }
  if (errors.length > 0) return { ok: false, errors };
  return {
    ok: true,
    settings: { storeName, theme: input.theme, device, tagline: text(input.tagline), autoRotateSec },
  };
}
