const DB = [];

//회원 가입 API 함수
function register(user) {
  // 콜백이 3중으로 중첩된 함수
  return saveDB(user, function (user) {
    return sendEmail(user, function (user) {
      return getResult(user);
    });
  });
}

// DB에 저장 후 콜백 실행
function saveDB(user, callback) {
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return callback(user);
}

// 이메일 발송 로그만 남기는 코드 시리행 후 콜백 실행
function sendEmail(user, callback) {
  console.log(`emali to ${user.name}`);
  return callback(user);
}

// 결과를 반환하는 함수
function getResult(user) {
  return `success register ${user.name}`;
}

const result = register({
  email: "andy@test.com",
  passward: "1234",
  name: "andy",
});
console.log(result);
