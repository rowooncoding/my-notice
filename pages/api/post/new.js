import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    let db = (await connectDB).db("forum");
    let result = db.collection("post").insertOne(요청.body);
    응답.redirect(302, "/list");
  }
}
