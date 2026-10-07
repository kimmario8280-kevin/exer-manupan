import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import chokidar from 'chokidar';
import express from 'express';
import * as XLSX from 'xlsx';
import { isAuthorized } from './src/adminAuth.mjs';
import { ALLOWED_THEMES, parseSettings } from './src/parseSettings.mjs';
import { applySettings } from './src/updateSettings.mjs';
import { validateSettings } from './src/validateSettings.mjs';
import { DEVICES } from './public/design.js';
import { parseWorkbook } from './src/parseWorkbook.mjs';
import { createSseHub } from './src/sseHub.mjs';
import { createWatcher } from './src/watcher.mjs';

const ROOT_DIR = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(ROOT_DIR, 'public');
const ADMIN_DIR = join(ROOT_DIR, 'admin');
const MENU_FILE = join(ROOT_DIR, 'data', 'menu.xlsx');

const DEFAULT_PORT = 3000;
const DEFAULT_ADMIN = Object.freeze({ user: 'admin', password: '1234' });
const MENU_UPDATED_EVENT = 'menu-updated';
const SSE_HEADERS = Object.freeze({
  'Content-Type': 'text/event-stream',
  'Cache-Control': 'no-cache',
  Connection: 'keep-alive',
});

export function resolvePort(env) {
  const port = Number(env.PORT);
  return Number.isInteger(port) && port > 0 ? port : DEFAULT_PORT;
}

const emptyMenu = () => ({ settings: parseSettings(undefined), pages: [] });

const listen = (app, port) =>
  new Promise((resolve) => {
    const server = app.listen(port, () => resolve(server));
  });

// 열려 있는 SSE 연결이 있으면 server.close가 끝나지 않으므로 먼저 끊는다.
const shutdown = (server) =>
  new Promise((resolve) => {
    server.closeAllConnections();
    server.close(resolve);
  });

// 인증이 필요한 어드민 경로에 거는 미들웨어. 실패하면 브라우저가 로그인 창을 띄우도록 401 + WWW-Authenticate를 보낸다.
const requireAdmin = (credentials) => (req, res, next) => {
  if (isAuthorized(req.headers.authorization, credentials)) return next();
  res.set('WWW-Authenticate', 'Basic realm="menu admin", charset="UTF-8"');
  res.status(401).send('로그인이 필요합니다.');
};

export async function createServer({ file, port = 0, logger = console, admin = DEFAULT_ADMIN }) {
  const load = () => parseWorkbook(XLSX.read(readFileSync(file)), { logger });
  let menu;
  try {
    menu = load();
  } catch (error) {
    logger.error(`메뉴 파일을 읽지 못해 빈 메뉴판으로 시작함: ${error.message}`);
    menu = emptyMenu();
  }
  const hub = createSseHub();
  const watcher = createWatcher({
    watch: chokidar.watch,
    file,
    onChange: () => {
      try {
        menu = load();
      } catch (error) {
        logger.error(`메뉴 파일을 읽지 못해 이전 데이터를 유지함: ${error.message}`);
        return;
      }
      hub.broadcast(MENU_UPDATED_EVENT);
    },
  });
  const saveSettings = (settings) => {
    const workbook = applySettings(XLSX.read(readFileSync(file)), settings);
    writeFileSync(file, XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' }));
  };
  const app = express();
  const adminOnly = requireAdmin(admin);
  app.use('/admin', adminOnly, express.static(ADMIN_DIR));
  app.get('/api/admin/settings', adminOnly, (_req, res) =>
    res.json({ settings: menu.settings, themes: ALLOWED_THEMES, devices: Object.keys(DEVICES) }));
  app.put('/api/admin/settings', adminOnly, express.json(), (req, res) => {
    const result = validateSettings(req.body);
    if (!result.ok) return res.status(400).json({ errors: result.errors });
    try {
      saveSettings(result.settings);
    } catch (error) {
      logger.error(`설정을 Excel에 저장하지 못함: ${error.message}`);
      return res.status(500).json({ errors: [`Excel 저장 실패: ${error.message}`] });
    }
    res.json({ settings: result.settings });
  });
  app.use(express.static(PUBLIC_DIR));
  app.get('/events', (_req, res) => {
    res.writeHead(200, SSE_HEADERS);
    hub.register(res);
  });
  app.get('/api/menu', (_req, res) => res.json(menu));
  const server = await listen(app, port);
  return {
    url: `http://127.0.0.1:${server.address().port}`,
    close: async () => {
      await watcher.close();
      await shutdown(server);
    },
  };
}

const isMainModule = () =>
  process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href;

// `npm start`처럼 직접 실행할 때만 서버를 띄운다. 테스트에서 import할 때는 띄우지 않는다.
if (isMainModule()) {
  const app = await createServer({
    file: MENU_FILE,
    port: resolvePort(process.env),
    admin: { user: process.env.ADMIN_USER ?? DEFAULT_ADMIN.user, password: process.env.ADMIN_PASSWORD ?? DEFAULT_ADMIN.password },
  });
  console.log(`메뉴판 서버 실행 중: ${app.url}`);
}
