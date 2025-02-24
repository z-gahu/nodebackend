//글쓰기
async function writePost(collection, post) {
  // 생성일시와 조회수를 넣기
  post.hits = 0;
  post.createdDt = new Date().toISOString(); //날짜는 ISO포멧으로저장
  return await collection.insertOne(post); // 몽고디비에 post저장 후 결과 반환
}

module.exports = {
  // require()로 파일을 임포트시 외부로 노출하는 객체
  writePost,
};
