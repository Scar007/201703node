/**
 * 聊天室
 * 页面 express
 * 消息通信 socket.io
 */
let express = require('express');
let app = express();
app.get('/',function(req,res){
   res.sendFile('./index.html');
});
//然后会得到一个服务器的实例
let server = require('http').createServer(app);


server.listen(8080);
