import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    let db = (await connectDB).db("forum");
    await db.collection("user_cred").insertOne(요청.body);
  }
}
