import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  setEntries: React.Dispatch<React.SetStateAction<{ title: string; content: string }[]>>;
};

export default function NewEntry({ setEntries }: Props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEntries(prev => [...prev, { title, content }]);
    navigate('/');
  };

  return (
    <div>
      <h2>日記を書く</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="内容"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: '100%', height: '200px' }}
        />
        <br />
        <button type="submit">投稿</button>
      </form>
    </div>
  );
}
