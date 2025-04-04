const c = require('ansi-colors');

const hello = (name) => {
  console.log(`${name} 님, 안녕하세요?`);
};
const hello2 = (name) =>{
  console.log( c.redBright(`${name} 님, 안녕하세요?`) + "이건가?" );
}

module.exports = {hello, hello2};
//exports 내보낼것을 정의