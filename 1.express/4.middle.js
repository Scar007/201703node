let express = require('express');
let app = express();
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    next();
});
//中央
app.use(function(req,res,next){
    req.money = 100;
    next();
});
//省里
app.use(function(req,res,next){
   req.money -= 50;
   next();
});
//市里
app.use(function(req,res,next){
    req.money -= 30;
    //next如果传参数表示出错了,如果出错了会跳过后面所有的正常中间件，然后交给错误处理中间件来处理
    next();
});
//村里
app.use(function(req,res,next){
    console.log('村里');
    req.money -= 10;
    next();
});
app.get('/',function(req,res){
    res.end('中央发了 '+req.money+' 元');
});
//错误处理中间件  有四个参数
app.use(function(err,req,res,next){
   console.error(err);
   res.end('报警吧');
});
app.listen(8080);