const express = require('express');
const app = express();

app.get("/", (req, res)=>{
  res.send("hello, Node! <br> 가나다라");
})

app.get("/Contacts", (req, res)=>{
  res.send("Contacts page");
});

// post, put, delete


app.listen(3000, ()=>{
  console.log("서버 ㅗ");
});



