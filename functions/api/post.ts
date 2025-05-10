import { Hono } from 'hono';
import { D1Database } from '@cloudflare/workers-types';

export type Env = {
  Bindings: {
    DB: D1Database;
  };
};

const app = new Hono<Env>();

app.post('/', async (c) => {
  const { content } = await c.req.json();
  await c.env.DB.prepare('INSERT INTO diary (content) VALUES (?)').bind(content).run();
  return c.text('Saved!');
});

export default app;
