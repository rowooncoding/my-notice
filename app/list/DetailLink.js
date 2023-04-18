"use client";
// next/router이 아닌 next/navigation으로 변경
import { useRouter } from "next/navigation";

export default function DetailLink() {
  //보통 router이라고 많이 사용한다
  let router = useRouter();
  //router.push('이동할 경로')
  //router.back() : 뒤로가기
  //router.forward() : 앞으로가기
  //router.refresh() : 새로고침
  //router.prefetch() : 미리 로드를 해서 빠르게 이동하도록 해주지만 link태그에 이미 내장되어있다.
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      버튼
    </button>
  );
}
