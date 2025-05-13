// src/pages/NewEntry.tsx
import { useState } from 'react';

export default function NewEntry() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, content });
    // あとでバックエンドに送る処理をここに追加します
    setTitle('');
    setContent('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>新しい日記</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            タイトル:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            内容:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">投稿</button>
      </form>
    </div>
  );
}
