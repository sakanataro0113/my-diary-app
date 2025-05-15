import { Link } from 'react-router-dom';

type Props = {
  entries: { title: string; content: string }[];
};

export default function Home({ entries }: Props) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <h2>日記一覧</h2>

      <Link to="/new">
        <button style={{ marginBottom: '1rem' }}>日記を書く</button>
      </Link>

      {entries.length === 0 ? (
        <p>まだ日記がありません。</p>
      ) : (
        entries.map((entry, index) => (
          <div key={index} style={{ maxWidth: '600px', textAlign: 'left', marginBottom: '1rem' }}>
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
