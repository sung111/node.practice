// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)
const path = require("path");

// join 함수를자용하면 문자열들을 가지고 전체경로를 만들수있음.
const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);

//경로만 추출
const dir = path.dirname(fullPath);
console.log(dir);

// 파일이름만 추출
const fn1 = path.basename(__filename);
console.log(`전체 경로( __filename) : ${__filename}`);
console.log("파일명만 가져오기 : ", fn1);

// 확장자를 제외하기
const fn2 = path.basename(__filename, '.js');
console.log("확장자 빼기 :", fn2);