import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = getServerSession(요청, 응답, authOptions);
  console.log(session.user.email);
  if (session) {
    요청.body.author = session.user.email;
  }
  // if (요청.method == "POST") {
  //   if (요청.body.title == "") {
  //     응답.status(500).json("제목을 쓰세요");
  //   }
  //   let db = (await connectDB).db("forum");
  //   let result = db.collection("post").insertOne(요청.body);
  //   응답.redirect(302, "/list");
  // }
}
