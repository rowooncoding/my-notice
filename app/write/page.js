export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/test" method="POST">
        <input name="title" />
        <input name="content" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
