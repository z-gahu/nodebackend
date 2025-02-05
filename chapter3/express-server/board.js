//간단한 계시판 만들기
// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d  "title=제목1&name=andy&text=안녕하세요~" http://localhost:3000/posts
// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d  "title=제목2&name=andy&text=박승규입니다.~" http://localhost:3000/posts
// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d  "title=제목3&name=andy&text=좋은 하루 보내세요~" http://localhost:3000/posts

// curl -X DELETE localhost:3000/posts/2

const express = require("express");
const app = express();
let posts = []; //게시글 리스트로 사용할 posts에 빈 리스트 할당

// req.body를 사용하려면 JSON 미들웨어를 사용해야 합니다.
// 사용하지 않으면 undefined 로 반환
app.use(express.json()); // json 미들웨어 활성화

// POST 요청시 컨텐트 타입이 applicition/x-www-form-urlencoded인 경우 파싱
app.use(express.urlencoded({ extended: true })); // JSON 미들웨어와 함께 사용

app.get("/", (req, res) => {
  // "/" 로 요청이 오면 실행
  res.json(posts); // 게시글 리스트를  JSON형식으로 보여줌
});

app.post("/posts", (req, res) => {
  // "/posts" 로 요청이 오면 실행
  const { title, name, text } = req.body; // HTTP 요청의 body 데이터를 변수에 할당

  // 게시글 리스트에 새로운 게시글 정보 추가
  posts.push({ id: posts.length + 1, title, name, text, createdDt: Date() });
  res.json({ title, name, text });
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id; // app.delete에 설정한 path 정보에서 id값을 가져옴
  console.log("삭제된 게시글:", id);
  const filteredPosts = posts.filter((post) => post.id !== +id); // 글 삭제 로직
  const isLengthChanged = posts.length !== filteredPosts.length; // 삭제 확인

  posts = filteredPosts;

  if (isLengthChanged) {
    // posts의 데이터 개수가 변경되었으면 삭제 성공
    res.json("OK");
    return;
  }
  res.json("NOT CHANGED"); //  변경되지 않음
});

app.listen(3000, () => {
  console.log("welcome posts START!!");
});
