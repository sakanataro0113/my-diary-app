type Props = {
  entries: { title: string; content: string }[];
};

export default function Home({ entries }: Props) {
  return (
    <div>
      <h2>日記一覧</h2>
      {entries.length === 0 ? (
        <p>まだ日記がありません。</p>
      ) : (
        entries.map((entry, index) => (
          <div key={index}>
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
