let WSServer = require('ws').Server;
//端口号是用来分区同一台计算机上的不同服务程序的
let server = new WSServer({port: 8080});
//当服务器收到客户端的请求时，会执行对应的回调函数
// socket=request+response 每个客户端都有自己的socket对象
server.on('connection', function (socket) {
  //服务器接收客户端的消息
  socket.on('message', function (msg) {
    console.log(msg);//msg代表客户端发过来的消息
    socket.send('服务器回应:'+msg);
  });
});
