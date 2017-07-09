let async = require('async');
// series 串行执行，第一个执行完，第二才能开始，第二个执行完了第三个才能开始
//如果中途任务出错了，那么会跳过剩余的任务执行最终的回调函数
console.time('cost');
async.series([
  function(callback){
   setTimeout(function(){
     console.log('1');
     callback(null,'a');
   },2000);
  },
  function(callback){
    setTimeout(function(){
      console.log('2');
      callback('出错了','b');
    },3000);
  },
  function(callback){
    setTimeout(function(){
      console.log('3');
      callback(null,'c');
    },1000);
  }
],function(err,result){
  console.log(err);
  console.log(result);
  console.timeEnd('cost');
});