// 게시판 프로젝트의 app.js
const express = require("express");
const handlerbars = require("express-handlebars");
const postService = require("./services/post-service"); // 서비스 파일 로딩
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //req.body와 POST를 요청을 해석하기 위한 설정

// 몽고디비 연결 함수
const mongodbConnection = require("./configs/mongodb-connection");

app.engine(
  "handlebars",
  handlerbars.create({
    helpers: require("./configs/handlebars-helpers"),
  }).engine
); // 1. 템플릿 엔진으로 핸들바 등록
app.set("view engine", "handlebars"); // 2. 웹페이지 로드 시 사용할 템플릿 엔진 설정
app.set("views", __dirname + "/views"); //3. 뷰 디렉터리를 views로 설정

// 4. 라우터 설정
app.get("/", (req, res) => {
  res.render("home", {
    title: "테스트 게시판",
    message: "만나서 반값습니다.!",
  });
});

app.get("/write", (req, res) => {
  res.render("write", { title: "테스트 게시판" });
});

//글쓰기
app.post("/write", async (req, res) => {
  const post = req.body;
  //글쓰기후 결과 반환
  const result = await postService.writePost(collection, post);

  // 생성된 도큐먼트의 _id를 사용해 상세베이지로 이동
  res.redirect(`/detail/${result.insertedId}`);
});

app.get("/detail/:id", async (req, res) => {
  res.render("detail", {
    title: "테스트 게시판",
  });
});

let collection;
app.listen(3000, async () => {
  console.log("Server started");
  // mongodbConnection() 의 결과는 mongoClient
  const mongoClient = await mongodbConnection();

  // mongodbClient.db()로 디비 선택 collection() 으로 컬렉션 선택 후 collection에 할당
  collection = mongoClient.db().collection("post");
  console.log("Mongodb connected");
});
