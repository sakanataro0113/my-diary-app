// C:\Users\sakan\my-diary-app\_worker.js

import { Hono } from 'hono';
import { D1Database } from '@cloudflare/workers-types';
// Cloudflare Workersの環境でD1を使う場合、@cloudflare/workers-types は通常不要ですが、
// 型定義のために必要であれば残しても問題ありません。
// ただし、実際のランタイムでインポートするパスではありません。
// @cloudflare/workers-types は開発時の型チェック用です。
// import { D1Database } from '@cloudflare/workers-types'; // これは不要なことが多い

// Hono の型定義にD1Bindingを追加する場合
interface Bindings {
  DB: D1Database; // D1Database はグローバルに利用可能な型です
}

const app = new Hono<{ Bindings: Bindings }>();

// POST /
app.post('/', async (c) => {
  try {
    const { title, content } = await c.req.json();
    if (!title || !content) {
      return c.text('Title and content are required', 400);
    }

    await c.env.DB
      .prepare('INSERT INTO diary (title, content) VALUES (?, ?)')
      .bind(title, content)
      .run();
    return c.text('Saved!', 200);
  } catch (error) {
    console.error('Error saving diary entry:', error);
    return c.text(`Error: ${error.message}`, 500);
  }
});

// GET /diary (例: 全件取得)
app.get('/diary', async (c) => {
  try {
    const { results } = await c.env.DB.prepare('SELECT * FROM diary').all();
    return c.json(results);
  } catch (error) {
    console.error('Error fetching diary entries:', error);
    return c.text(`Error: ${error.message}`, 500);
  }
});

// Hono アプリケーションを Worker としてエクスポート
export default app;