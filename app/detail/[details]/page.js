import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail() {
  const db = (await connectDB).db("forum");
  // 하나만 가져오려면 find() 가 아니라 findOne()을 사용한다
  // 괄호 안쪽에는 가져오고 싶은 도큐먼트의 일부 메세지를 적는다
  // 제목따위를 적으면 중복되는게 많기 때문에 자동으로 생성되는 고유 아이디를 적어주면 좋다
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId("643e427ea41eb390520f70de") });
  console.log(result);
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
