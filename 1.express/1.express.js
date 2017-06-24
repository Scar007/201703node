let express = require('express');
let app = express();

//处理客户端向服务器发出的GET / 请求
// get post options put delete
app.get('/',function(req,res){
   res.end('home');
});
app.get('/about',function(req,res){
    res.end('about1');
});
app.post('/about',function(req,res){
    res.end('post about');
});
app.put('/about',function(req,res){
    res.end('put about');
});
app.delete('/about',function(req,res){
    res.end('delete about');
});
//all是匹配所有的方法 *能匹配所有的路径
app.all('*',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('你请求的路径不存在');
});
app.listen(8080);