// 함수 선언하고 호출하기  (결과 비교 파일 : 02\results\function-1.js)
// 함수 선언
const c = require('ansi-colors')
function greeting(name){
  console.log(c.green(`${name}`), `님, 안녕하쇼?`);
}

// 함수 호출
greeting("혜성인디?")
