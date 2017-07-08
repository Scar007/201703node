let Socket = require('ws');
//创建一个ws的客户端，连接服务器
let socket = new Socket('ws://localhost:8080');
//客户端成功连接上服务器之后会触发open事件
socket.on('open',function(){
  console.log('客户端连接服务器成功');
  socket.send('服务器你好');
});
//当客户端收到服务器端发过来的消息时
socket.on('message',function(msg){
 console.log(msg);
});