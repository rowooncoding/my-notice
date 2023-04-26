"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            {/* 문자와 자료형을 합칠때는 +를 사용하자!!! */}
            <Link prefetch={false} href={"/detail/" + result[i]._id}>
              <h4>{result[i].title}</h4>
            </Link>
            <Link href={"/edit/" + result[i]._id}>📝</Link>
            <span
              onClick={() => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: result[i]._id,
                })
                  .then((r) => {
                    return r.json();
                  })
                  .then((r) => {
                    console.log(r);
                  });
              }}
            >
              🗑️
            </span>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
