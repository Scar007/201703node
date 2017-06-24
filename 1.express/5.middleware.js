let express = require('express');
let app = express();
//编写一个中间件，输出本次请求的处理时间
//接到请求到响应结束之间的时间差
app.use(function(req,res,next){
    req.start = Date.now();
    let end = res.end;
    res.end = function(msg){
        end.call(res,msg);
        console.log(Date.now() - req.start);
    }
    next();
});
app.get('/',function(req,res){
   setTimeout(function(){
       console.log('home');
       res.end('home');
   },1000)
});

app.listen(8080);