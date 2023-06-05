import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
export default async function handler(req, res) {
  if (req.method == "POST") {
    let 저장할거 = {
      content: "댓글내용",
      parent: "부모게시물_id",
      author: "유저이메일",
    };
    let db = (await connectDB).db("forum");
    let result = await db.collection("comment").insertOne(저장할거);
    res.status(200).json("저장완료");
  }
}
