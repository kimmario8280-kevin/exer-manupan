// SSE 프레임은 빈 줄(\n\n)로 끝나야 한다. 코멘트 줄(:)은 연결 유지·확인용이다.
const formatComment = (text) => `: ${text}\n\n`;

// 본문은 비워 두고, 클라이언트가 /api/menu를 다시 호출해 새 데이터를 받는다.
const formatEvent = (eventName) => `event: ${eventName}\ndata: {}\n\n`;

export function createSseHub() {
  const clients = new Set();
  return {
    register(res) {
      clients.add(res);
      res.on('close', () => clients.delete(res));
      res.write(formatComment('connected'));
    },
    broadcast(eventName) {
      // 순회 중 Set 삭제는 안전하다. 쓰기에 실패한 클라이언트는 제거하고 나머지에는 계속 보낸다.
      for (const res of clients) {
        try {
          res.write(formatEvent(eventName));
        } catch {
          clients.delete(res);
        }
      }
    },
  };
}
