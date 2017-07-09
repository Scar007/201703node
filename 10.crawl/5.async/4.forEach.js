let async = require('async');
let files = [
  {filename:'1.txt',content:'1'},
  {filename:'2.txt',content:'2'},
  {filename:'3.txt',content:'3'}
]
let fs = require('fs');
console.time('cost')
async.forEach(files,function(item,cb){
  setTimeout(function(){
    fs.writeFileSync(item.filename,item.content);
    cb();
  },1000)
},function(){
  console.log('well done!');
  console.timeEnd('cost');
});