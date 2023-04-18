import { connectDB } from "@/util/database";

export default async function Detail() {
  const db = (await connectDB).db("forum");
  // 하나만 가져오려면 find() 가 아니라 findOne()을 사용한다
  // 괄호 안쪽에는 가져오고 싶은 도큐먼트의 일부 메세지를 적는다
  let result = await db.collection("post").findOne({ title: "안녕" });
  console.log(result);
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>글제목</h4>
      <p>글내용</p>
    </div>
  );
}
