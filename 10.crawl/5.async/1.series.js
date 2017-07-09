let async = require('async');
// series 串行执行，第一个执行完，第二才能开始，第二个执行完了第三个才能开始
//如果中途任务出错了，那么会跳过剩余的任务执行最终的回调函数
console.time('cost');
function series(tasks,callback){
   let index = 0;
   let result = [];
   function next(err,data){
    if(err){
      return callback(err,result);
    }
    if(index==tasks.length){
      return callback(err,result);
    }
    if(index>0){
       result.push(data);
    }
    let fn = tasks[index++];
    fn(next);
   }
   next();
}
series([
  function(next){
   setTimeout(function(){
     console.log('1');
     next(null,'a');
   },2000);
  },
  function(next){
    setTimeout(function(){
      console.log('2');
      next(null,'b');
    },3000);
  },
  function(next){
    setTimeout(function(){
      console.log('3');
      next(null,'c');
    },1000);
  }
],function(err,result){
  console.log(err);
  console.log(result);
  console.timeEnd('cost');
});