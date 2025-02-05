// 이상적인 Promise 코드
function goodPromise(val) {
  // 프라미스 생성후 반환
  return new Promise((resolve, reject) => {
    resolve(val);
  });
}

goodPromise("세상에")
  // Promise에서 resolve 이후에는 then 호출가능
  .then((val) => {
    return val + " 이런";
  })
  .then((val) => {
    return val + " 코드는";
  })
  .then((val) => {
    return val + " 없습니다.";
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    // Promise 에서 reject가 호출되었을 경우
    console.log(err);
  });
