import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div className="list-bg">
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <h4>{result[i].title}</h4>
            {/* 문자와 자료형을 합칠때는 +를 사용하자!!! */}
            <Link href={"/detail/" + result[i]._id}>링크</Link>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
