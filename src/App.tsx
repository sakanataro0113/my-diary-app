import { useState } from 'react';
import './App.css';

type Entry = {
  id: number;
  content: string;
  createdAt: string;
};

function App() {
  const [content, setContent] = useState('');
  const [entries, setEntries] = useState<Entry[]>([]);

  const handleSubmit = () => {
    if (!content.trim()) return;

    const newEntry: Entry = {
      id: Date.now(),
      content,
      createdAt: new Date().toLocaleString(),
    };

    // 一旦ローカルで追加（あとでAPIに置き換える）
    setEntries([newEntry, ...entries]);
    setContent('');
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
      <h1>日記投稿アプリ</h1>
      <textarea
        rows={5}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="今日の出来事を書いてください..."
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={handleSubmit}>投稿する</button>

      <hr style={{ margin: '2rem 0' }} />

      <h2>投稿一覧</h2>
      {entries.length === 0 ? (
        <p>まだ投稿はありません。</p>
      ) : (
        entries.map((entry) => (
          <div key={entry.id} style={{ marginBottom: '1rem' }}>
            <div>{entry.content}</div>
            <small>{entry.createdAt}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
