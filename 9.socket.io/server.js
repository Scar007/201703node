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
//io是一个服务器端实例 websocket服务器是依赖http服务器
let io = require('socket.io')(server);
//监听客户端的连接事件，当客户端连接成功之后会执行对应的回调函数，并封装一个socket对象传入回调函数
//这是一个全局的对象，记录着所有的客户端用户名和socket对应关系
let sockets = {};
io.on('connection',function(socket){
  //保存用户名，因为每个客户端都需要一个用户名，所以要放在函数里
  let username;
  socket.on('message',function(msg){
     if(username){
       //判断是公聊还是私聊 @ 用户名只要不是空格就行 内容随意
       let reg = /@([^ ]+) (.+)/;
       let result = msg.match(reg);
       //如果匹配上那么就是私聊
       if(result){
          let toUser = result[1];//对方的用户名
          let content = result[2];//想说的话
         //找到私聊对方的socket对象并且发送消息
          sockets[toUser].send({
            username,
            content,
            createAt:new Date().toLocaleString()
          });
       }else{
         //把消息发送给所有的客户端
         io.emit('message',{
           username,
           content:msg,
           createAt:new Date().toLocaleString()
         });
       }

     }else{
       username = msg;//把客户端发过来的第一条消息当成此用户的用户名
       //记录一下用户名和它对应的socket对象的关系
       sockets[username]  = socket;
       io.emit('message',{//向所有的客户端广播，说有新人来了
         username:'系统',//用户名
         content:`欢迎${username}来到聊天室`,//内容
         createAt:new Date().toLocaleString() //创建时间
       });
     }

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
 * 1. 实现匿名聊天
 *    1. 一个人发言后会发给服务器
 *    2. 服务器会广播给所有的客户端
 *    3. 所有的客户端收到消息后会在列表里显示出这条消息
 * 2. 实现具名聊天
 *    1.当客户端第一次发言的时候，服务器会把这个发言的内容当成用户名。
 *    2. 那么此客户端以后再发言的时候，服务器会把发言当作此用户名的发言。
 * 3. 实现私聊
 *    1.让用户名可点击，点击的时候会在输入框中出现 @用户名 xxx
 *    2. 发送给服务器后，服务器要判断是否是私聊，如果是私聊的话会把此消息单独发给对应的用户
 * 4. 消息持久化到数据库中
 * 5. 当打开页面的时候自动加载最近的20条数据
 * 6. 实现分房间聊天功能
 **/