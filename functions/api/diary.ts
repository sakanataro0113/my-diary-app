import { Hono } from 'hono';
import { z } from 'zod';

export type Env = {
  Bindings: {
    DB: D1Database;
  };
};

const app = new Hono<Env>();

// 日記を取得
app.get('/', async (c) => {
  const { results } = await c.env.DB.prepare('SELECT * FROM diary ORDER BY created_at DESC').all();
  return c.json(results);
});

// 日記を投稿
app.post('/', async (c) => {
  const body = await c.req.json();
  const schema = z.object({ content: z.string().min(1) });
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return c.json({ error: 'Invalid input' }, 400);
  }

  await c.env.DB.prepare('INSERT INTO diary (content, created_at) VALUES (?, datetime("now"))')
    .bind(parsed.data.content)
    .run();

  return c.json({ success: true });
});

export default app;
