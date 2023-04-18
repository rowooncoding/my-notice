import { connectDB } from "@/util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  //포스트에 있는 모든 데이터를 가져와서 array로 변환해주세요
  await db.collection("post").find().toArray();
  return <div></div>;
}
