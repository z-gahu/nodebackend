// localhost:3000 접근 메시지 반환하는 서버
const express = require("express"); // express 모듈 불러오기
const app = express(); // express 초기화후 app 할당
const port = 3000;

app.get("/", (req, res) => {
  res.set({ "Content-Type": "text/html; charset=utf-8" }); //헤더값 설정
  res.end("헬로 Express");
});

app.listen(port, () => {
  console.log(`Start SerVER : use ${port}`);
});
