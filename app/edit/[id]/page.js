import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(result);
  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" value={result.title} />
        <input name="content" value={result.content} />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
