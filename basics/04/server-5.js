// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)

const http = require("http");

const server = http.createServer((req, res)=>{
  // req.url : 요청경로
  // req.method : 요청 방식식
  res.setHeader("Content-type", "text/plain");
  
  const { url, method } = req;
  // 위에 코드는 아래코드를 간소화 한것.
  // const url = req.url;
  // const mehtod = req.mehod;
  // 이것을 JavaScript 에서는 구조분해 할당(destructing)
  console.log(method === "GET" && url === "/home")
  console.log(method === "GET" )
  console.log(url === "/home" );

  
  if(method === "GET" && url === "/home"){
    res.write("home");
    res.end();
  } else if (method === "get" && url === "/about"){
    //write문이 1개뿐일경우 end 전달인자에 글씨를 줘서 표시 할수 있음.
    res.end("ABOUT");
  } else {
    res.end("Not Found");
  }
});

server.listen(3000, ()=>{
  console.log('서버실행중');
});