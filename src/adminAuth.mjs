import { timingSafeEqual } from 'node:crypto';

const BASIC_PREFIX = 'Basic ';

const sameText = (a, b) => {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
};

// HTTP Basic 헤더가 주어진 계정과 일치하는지 검사한다.
export function isAuthorized(header, { user, password }) {
  if (typeof header !== 'string' || !header.startsWith(BASIC_PREFIX)) return false;
  const decoded = Buffer.from(header.slice(BASIC_PREFIX.length), 'base64').toString();
  const separator = decoded.indexOf(':');
  if (separator < 0) return false;
  return sameText(decoded.slice(0, separator), user) && sameText(decoded.slice(separator + 1), password);
}
