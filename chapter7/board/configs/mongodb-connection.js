const { MongoClient } = require("mongodb");
require("dotenv").config();

// 몽고 디비 연결 주소
const uri = process.env.MONGO_URL;

module.exports = function (callback) {
  // 몽고디비 커넥션 연결 함수 반환
  return MongoClient.connect(uri, callback);
};
