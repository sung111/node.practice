// 요청 객체(req) 살펴보기  (결과 비교 파일 : 04\results\server-2.js)

const http = require("http");

const server = http.createServer((req, rse)=>{
  console.log(req);
});

server.listen(3000, ()=>{
  console.log('서버실행중');
});
