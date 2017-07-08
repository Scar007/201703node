let express = require('express');
//typeof app
//app是一个请求监听函数，app.listen.启动监听
//app会在客户端请求到来的时候执行
let app = express();
app.get('/clock',function(req,res){
  //我作为服务器，我允许本机的63342端口来访问我这个服务器
  res.setHeader('Access-Control-Allow-Origin','*');
  res.send(new Date().toLocaleString());
});
//在特定的端口上监听客户端的请求
app.listen(8080);