const express = require('express');
const app = express();

app.get("/", (req, res)=>{
  res.send("hello, Node! <br> 가나다라");
})

// 연락처 가져오기
app.get("/contacts", (req, res)=>{
  res.send("Contacts page");
});
// 새연락처 추가하기
app.post("/contacts", (req, res)=>{
  res.send("Create contacts");
  console.log("Create contacts");
})

// 연락처 1개 가져오기
app.get("/contacts/:id", (req, res)=>{
  res.send(`View Contact for ID : ${req.params.id}`);
})

//연락처 수정하기
app.put("/contacts/:id", (req, res)=>{
  res.send(`Update Contact for ID : ${ req.params.id }`);
})

// 삭제
app.delete("/contacts/:id", (req, res)=>{
  res.send(`삭제다 시발아${req.params.id}`);
})

// post, put, delete

app.listen(3000, ()=>{
  console.log("서버 ㅗ");
});



