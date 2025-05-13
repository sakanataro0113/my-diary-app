function NewEntry() {
  return (
    <div>
      <h1>新しい日記を書く</h1>
      <form>
        <div>
          <label>タイトル:</label>
          <input type="text" />
        </div>
        <div>
          <label>内容:</label>
          <textarea rows={10}></textarea>
        </div>
        <button type="submit">投稿</button>
      </form>
    </div>
  );
}

export default NewEntry;
