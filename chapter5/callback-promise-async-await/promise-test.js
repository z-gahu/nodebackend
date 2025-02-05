// 콜백으로 만든 회원 가입 예제를 프로미스로 변경
const DB = [];

function saveDB(user) {
  const oldDBSize = DB.length;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    // 콜백 대신 Promise 객체 반환
    if (DB.length > oldDBSize) {
      resolve(user); // 성공시 유저정보 반환
    } else {
      reject(new Error("Save DB Error!")); // 실패시 에러 발생
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    // Promise 객체를 반환. 실패 처리 없음
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    // Promise 객체 반환
    resolve(`success register ${user.name}`); // 성공시 성공 메시지와 유저명 반환
  });
}

function registerByPromise(user) {
  // 비동기 호출이지만 순서를 지켜서 실행
  const result = saveDB(user).then(sendEmail).then(getResult);

  // 아직 완료되지 않았으므로 지연(pending) 상태
  console.log(" 상태", result);
  return result;
}

const myUser = { email: "andy@test.com", password: "1234", name: "andy" };
// const result = registerByPromise(myUser);
//  결괏값이 Promise이므로 then() 매서드에 홤수를 넣어서 결과값을 볼 수 있음
// result.then(console.log);

// 동시에 여러 프라미스 객체를 호출해 결과값을 받고 싶을때 사용
// 나열된 순서와 상관없이 다음과 같이 동시에 실행됩니다.
// 결과는 배열로 반환됩니다.
allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]);
allResult.then(console.log);
