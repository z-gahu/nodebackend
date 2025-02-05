// 유지보수성을 높이는 관점에서 라우터 리펙토링
// 분기문에서 사용되는 매개변수가 같은 패턴을 보일때는 맵 자료구조가 유용

const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");
    if (path in urlMap) {
      console.log("urlMap->", urlMap);

      console.log("path->", path);
      urlMap[path](req, res);
    } else {
      notFound(req, res);
    }
  })
  .listen("3000", () => console.log("라우터를 리펙토링 해보자!"));

const user = (req, res) => {
  const userInfo = url.parse(req.url, true).query;
  res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);
};

const feed = (req, res) => {
  res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
        `);
};

const notFound = (req, res) => {
  res.statusCode = 404;
  res.end("404 page not found");
};

// 라우터 규칙 매핑 키로 패스가 들어가고 값에 함수를 할당
const urlMap = {
  "/": (req, res) => res.end("HOME"),
  "/user": user,
  "/feed": feed,
};

console.log(urlMap);
