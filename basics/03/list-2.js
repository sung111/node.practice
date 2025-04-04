// fs 모듈의 readdir 함수 연습하기 ( 결과 비교 파일 : 03\results\list-2.js)

const fs = require("fs");

// readdir 는 비동기함수면서 콜백을 사용함
// readdir 는 경로와 콜백함수를 받음.
// 콜백함수의 매개변수가 err 과 files 임.
fs.readdir('./', (err, files)=>{
  if(err){
    console.log(err);
  } 
  console.log(files);
});
// 결과 list-2.js 가있는 현재 폴더
// 즉 03 폴더의 모든파일이 console 에 찍히게됨

