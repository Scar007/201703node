/**
 * 聊天室
 * 页面 express
 * 消息通信 socket.io
 */
let express = require('express');
let path = require('path');
let app = express();
//path must be absolute or specify root to res.sendFile
app.get('/',function(req,res){
   res.sendFile(path.resolve('./index.html'));
});
//然后会得到一个服务器的实例
let server = require('http').createServer(app);

server.listen(8080);
/**
 * 1.实现匿名聊天
 *    1. 一个人发言后会发给服务器
 *    2. 服务器会广播给所有的客户端
 *    3. 所有的客户端收到消息后会在列表里显示出这条消息
 **/