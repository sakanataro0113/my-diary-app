import { Hono } from 'hono';
import { D1Database } from '@cloudflare/workers-types';

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.post('/', async (c) => {
  const { title, content } = await c.req.json();
  await c.env.DB
    .prepare('INSERT INTO diary (title, content) VALUES (?, ?)')
    .bind(title, content)
    .run();
  return c.text('Saved!');
});

export default app;
