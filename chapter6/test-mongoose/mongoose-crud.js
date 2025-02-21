// 6.5.3 몽구스와 익스프레스로 crud api 만들기
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./person-model");

const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.MONGO_URL;

mongoose.set("strictQuery", false);
// 몽구스에서 빈 객체{}로 넣으면 모든 값을 불러오게 되어 문제가 되는 경우. 에러를 내도록 하는 설정
// Mongoose6: 기본값 true
// Mongoose7: 기본값 false

const app = express();
app.use(bodyParser.json()); // HTTP에서 Body를 파싱하기 위한 설정. 미들웨어 추가
app.listen(3000, async () => {
  console.log("Server start!");
  const mongodbUri = uri;

  // 몽고디비에 커넥션 맺기
  mongoose
    .connect(mongodbUri, { useNewUrlParser: true })
    .then(console.log("Connect to MongoDB"));
});

// 모든 person 데이터 출력
app.get("/person", async (req, res) => {
  const person = await Person.find({});
  console.log("person 조회");
  res.send(person);
});

// 특정 이메일로 person 찾기
app.get("/person/:email", async (req, res) => {
  const person = await Person.findOne({ email: req.params.email });
  res.send(person);
});

// person 데이터 추가하기
app.post("/person", async (req, res) => {
  const person = new Person(req.body);
  await person.save();
  res.send(person);
});

// person 데이터 수정하기
app.put("/person/:email", async (req, res) => {
  const person = await Person.findOneAndUpdate(
    { email: req.params.email },
    { $set: req.body },
    { new: true }
  );
  console.log(person);
  res.send(person);
});

// person 데이터 삭제하기
app.delete("/person/:email", async (req, res) => {
  await Person.deleteMany({ email: req.params.email });
  res.send({ success: true });
});
