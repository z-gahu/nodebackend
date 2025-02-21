// 6.5.2 몽구스로 스키마 만들기
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 스키마 객체 생성
const personSchema = new Schema({
  name: String,
  age: Number,
  email: { type: String, required: true },
});

module.exports = mongoose.model("Person", personSchema); // 모델 객체 생성 => 복수형인 people가 생성된다.
