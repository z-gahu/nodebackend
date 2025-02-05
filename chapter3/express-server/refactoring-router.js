// 3.6.3 Node.js 라이브러리로 만든 서버를 익스프레스로 구현하기
const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("익스프레스로 라우터 리펙토링 하기");
});

// GET 메서드의 라우팅 설정
app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res) {
  const user = url.parse(req.url, true).query;

  // 결과값으로 유저명과 나이 제공
  // http://localhost:3000/user?name=mike&age=20
  res.json(`[user] name : ${user.name}, age: ${user.age}`);
}

function feed(_, res) {
  // /feed로 요청이 오면 실행되는 함수
  res.json(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        </ul>`);
}
