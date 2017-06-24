let obj = {name:'zfpx',home:{
    province:'guangdong',
    city:'dongguan'
}};
let str1 = require('querystring').stringify(obj);
console.log(str1);
let str2 = require('qs').stringify(obj);
console.log(str2);
//extended:false
console.log(require('querystring').parse(str1));
//extended:true
console.log(require('qs').parse(str2));