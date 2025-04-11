

const http = require("http");
const fs = require('fs');
const path = require('path');

const server = http.createServer( (req, res)=>{
  if( req.url === '/'){
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data)=>{
      if(err){
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end("서버오류");
      }else {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);
      }
    })
  } else {
    res.writeHead(404, {'conTent-Type': 'text/plain; charset=utf-8'});
    res.end('페이지 낫파운드');
  }
})

server.listen(3000, ()=>{
  console.log("서버 ㄱㄱ");
})