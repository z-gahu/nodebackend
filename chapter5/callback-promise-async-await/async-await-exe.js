async function a() {
  return "OK";
}

function b() {
  const result = a();
  console.log(result);
}

b();

// 문제: Promise {'OK'}  대신 'OK'가 출력되도록 수정
