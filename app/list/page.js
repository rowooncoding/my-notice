import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <h4>{result[i].title}</h4>
            <p>1월 1일</p>
          </div>
        );
      })}
      {/* <div className="list-item">
        <h4>{result[0].title}</h4>
        <p>1월 1일</p>
      </div>
      <div className="list-item">
        <h4>{result[1].title}</h4>
        <p>1월 1일</p>
      </div>
      <div className="list-item">
        <h4>{result[2].title}</h4>
        <p>1월 1일</p>
      </div> */}
    </div>
  );
}
