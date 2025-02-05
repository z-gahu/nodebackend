// 현재 상영 영화 순위를 20위까지 보여주는 코드
const axios = require("axios");
const url =
  "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

axios
  .get(url)
  .then((result) => {
    if (result.status != 200) {
      throw new Error("요청에 실패했습니다.");
    }

    if (result.data) {
      // 3. result.data가 있으면 결과를 반환
      return result.data;
    }

    throw new Error("데이터 없습니다."); // data가 없으면 에러
  })
  .then((data) => {
    // 4에서 3에서 받은 데이터 처리
    if (!data.articleList || data.articleList.size == 0) {
      // 크기가 0이면 에러
      throw new Error("데이터가 없습니다.");
    }
    return data.articleList; // 영화 리스트 반환
  })
  .then((articles) => {
    return articles.map((article, idx) => {
      // 영화 리스트를 제목과 순위 정보로 분리
      return { title: article.title, rank: idx + 1 };
    });
  })
  .then((results) => {
    for (let movieinfo of results) {
      // 받은 영화 리스트 정보 출력
      console.log(`[${movieinfo.rank}위] ${movieinfo.title}`);
    }
  })
  .catch((err) => {
    //중간에 발생한 에러들을 여기서 처리
    console.log("<<에러발생>>");
    console.error(err);
  });
