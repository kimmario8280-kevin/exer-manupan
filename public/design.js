// design/project의 디자인 에셋 규격. 기기마다 배경(bg)과 프레임(frame) PNG가 아트보드 크기로 한 쌍씩 있다.
export const DEVICES = Object.freeze({
  signage: Object.freeze({ width: 1080, height: 1920 }),
  'tablet-land': Object.freeze({ width: 1920, height: 1440 }),
  'tablet-port': Object.freeze({ width: 1440, height: 1920 }),
  mobile: Object.freeze({ width: 1080, height: 2160 }),
});

const ASSET_DIR = 'assets';

// 기기를 가르는 경계값(CSS px)
const MOBILE_MAX_WIDTH = 600; // 이보다 좁으면 휴대폰
const LANDSCAPE_MIN_WIDTH = 900; // 가로 화면이 이 이상이면 태블릿(가로)
const SIGNAGE_MAX_ASPECT = 0.6; // 세로 화면에서 가로/세로가 이 이하면 사이니지(1080×1920 = 0.5625), 넘으면 태블릿(세로)

export function deviceFor(width, height) {
  if (width < MOBILE_MAX_WIDTH) return 'mobile';
  if (width > height) return width >= LANDSCAPE_MIN_WIDTH ? 'tablet-land' : 'mobile';
  return width / height <= SIGNAGE_MAX_ASPECT ? 'signage' : 'tablet-port';
}

export function assetUrls(theme, device) {
  return {
    bg: `${ASSET_DIR}/${theme}/bg-${device}.png`,
    frame: `${ASSET_DIR}/${theme}/frame-${device}.png`,
  };
}
