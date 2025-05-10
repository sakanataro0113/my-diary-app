import { Hono } from 'hono'
import { D1Database } from '@cloudflare/workers-types'

// Honoの型定義にBindingsだけを正確に指定
const app = new Hono<{ Bindings: { DB: D1Database } }>()

app.post('/', async (c) => {
  const { content } = await c.req.json()
  await c.env.DB
    .prepare('INSERT INTO diary (content) VALUES (?)')
    .bind(content)
    .run()
  return c.text('Saved!')
})

export default app
