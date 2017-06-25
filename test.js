let cookie = 'name=zfpx; age=9fddfsdfds; home=beijing';
// let reg = /age=([^;]+)/;
// let result = cookie.match(reg);
// console.log(result[1]);
let querystring = require('querystring');
let result = querystring.parse(cookie,'; ');
console.log(result);