// 1부터 10까지 1초에 하나씩 출력하는 코드를 작성

function waitOneSecond(msg) {
  // 1초 대기하고 메시지 출력
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(`${msg}`), 1000);
  });
}

async function conuntOneToTen() {
  // 10초 동안 1초마다 메시지 출력
  for (let x of [...Array(10).keys()]) {
    // 0부터 9까지 루프를 순회
    // 1초 대기후 result에 결괏값 저장
    let result = await waitOneSecond(`${x + 1}초 대기 중...`);
    console.log(result);
  }
  console.log("완료");
}

conuntOneToTen();
