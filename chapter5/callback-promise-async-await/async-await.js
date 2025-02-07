async function myName() {
  return "Andy";
}

// async 를 사용하면 Promise로 반환값을 감싸서 넘겨준다.
// console.log(myName());

async function showName() {
  const name = await myName();
  console.log(name);
}

console.log(showName());
