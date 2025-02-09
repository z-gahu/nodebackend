async function a() {
  return "OK";
}

async function b() {
  const result = await a();
  console.log(result);
}

b();

// 문제: Promise {'OK'}  대신 'OK'가 출력되도록 수정
// -> await 구문의 오른쪽에는 항상 Promise객체가 위치해야 한다.
