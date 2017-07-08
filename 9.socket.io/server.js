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
//io是一个服务器端实例
let io = require('socket.io')(server);
//监听客户端的连接事件，当客户端连接成功之后会执行对应的回调函数，并封装一个socket对象传入回调函数
io.on('connection',function(socket){
  socket.on('message',function(msg){
    //把消息发送给所有的客户端
    io.emit('message',msg);
    //把消息发送给某个客户端
    //socket.send('hello');
    //socket.emit('message','hello');
  });
});

/*function send(){
  var args = Array.prototype.slice.call(arguments);
  //args = ['hello']
  args.unshift('message');
  //args = ['message','hello']
  this.emit.apply(this, args);
  //socket.emit('message','hello');
  return this;
};*/

server.listen(8080);
/**
 * 1.实现匿名聊天
 *    1. 一个人发言后会发给服务器
 *    2. 服务器会广播给所有的客户端
 *    3. 所有的客户端收到消息后会在列表里显示出这条消息
 **/