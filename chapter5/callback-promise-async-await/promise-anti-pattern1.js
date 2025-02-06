// 문제점
// 1. 프로미스의 then()함수에 성공 시와 실패시 처리할 함수를 둘 다 넘기는 경우
// -> 이렇게 둘다 넘기면 프로미스는 장식에 불과하며 기존의 콜백함수에 결과와 에러를 동시에 넘기는 형태와 다를바 없다.
// catch() 함수로 예외처리하는게 좋다.

function myWork(work) {
  return new Promise((resolve, reject) => {
    if (work === "done") {
      resolve("게임가능");
    } else {
      reject(new Error("게임 불가능"));
    }
  });
}

// 콜백과 다를바없음
myWork("done").then(
  function (value) {
    console.log(value);
  },
  function (err) {
    console.error(err);
  }
);

// good
myWork("doing")
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.error(err);
  });
