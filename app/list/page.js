import { connectDB } from "@/util/database";
import Link from "next/link";
// import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            {/* 문자와 자료형을 합칠때는 +를 사용하자!!! */}
            <Link prefetch={false} href={"/detail/" + result[i]._id}>
              <h4>{result[i].title}</h4>
            </Link>
            <Link href={"/edit/" + result[i]._id}>📝수정</Link>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
