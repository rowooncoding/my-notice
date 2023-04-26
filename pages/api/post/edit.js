import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .updateOne({ _id: 1234 }, { $set: req.body });
  }
}
