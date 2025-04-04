const user = require("./user.js");
const {hello, hello2} = require("./hello.js");
// const hello2 = require("./hello.js");
const c = require('ansi-colors');
console.log(c.red(`hi`));

hello(user);
hello2(user);

console.log( c.red( hello(user) ) ); // 안되농
