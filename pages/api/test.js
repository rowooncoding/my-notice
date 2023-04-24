export default function handler(req, res) {
  if (req.mothod == "POST") {
    //포스트 요청을 했을 때만 리턴 코드를 실행시켜준다
    return res.status(200).json("처리완료");
  }
}
