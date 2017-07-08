//引入mongoose模块
let mongoose = require('mongoose');
//用你自己提供的promise库替代掉原生的promise库
mongoose.Promise = Promise;
//创建连接对象
let conn = mongoose.createConnection('mongodb://127.0.0.1/201703chat');

module.exports = conn.model('Message',new mongoose.Schema({
  username:String,
  content:String,
  createAt:{type:Date,default:Date.now}
}));
