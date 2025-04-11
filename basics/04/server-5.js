// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)

const http = require("http");
const path = require('path');

const server = http.createServer( (req, res) =>{
  // req.url : 요청경로
  // req.method : 요청 방식임 ㅇㅇ

  
  const {url, method} = req;
  // const url = req.url;
  // const method = req.method;
  
  res.setHeader("Content-type", "text/html; charset=utf-8");
  if(method === "GET" && url ==="/home"){
    // res.write("home 시발아");
    // res.statusCode = 200;
    res.sendfile(path.join(__dirname, 'index.html'));
    res.end("HOME");
  } else if (method === "GET" && url ==="/about"){
    res.end("ABOUT")
  } else {
    res.end("NOT FOUND");
  }



})

server.listen(3000, ()=>{
  console.log("ㅗ");
})