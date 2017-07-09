let express = require('express');
let path = requre('path');
let app = express();
let request = require('request');
let url = 'http://www.xinfadi.com.cn';
//设置模板引擎
app.set('view engine','html');
//设置模板存放的根目录
app.set('views',path.resolve('views'));
//设置HTML类型的模板用ejs来进行渲染
app.engine('html',require('ejs').__express);
app.get('/',function(req,res){
  request(url,function(err,response,body){
     res.render('index',{foods});
  })
});
app.listen(8080);