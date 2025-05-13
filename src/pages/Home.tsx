import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>日記アプリ</h1>
      <Link to="/new">
        <button>日記を書く</button>
      </Link>
      <div>
        <h2>過去の日記</h2>
        <p>（まだありません）</p>
      </div>
    </div>
  );
}

export default Home;
