/**
 * 1. 百度 mongoose  谷歌
 * README.md
 **/
//1. 引入mongoose模块
let mongoose = require('mongoose');
//2. 连接数据库 mongodb://IP或域名:端口号/数据库的名字
//连接上之后并不会立刻创建对应的数据库，只有当真正向此数据库里面插入数据的时候才会真正创建
mongoose.connect('mongodb://127.0.0.1:27017/201703node',function (err) {
  if(err){
    console.error(err);
  }else{
    console.log('数据库连接成功');
  }
});
//定义Schema 数据库集合的骨架模型 规定一个集合中文档的属性名和属性的类型
//规定一个集合的存储方式 collection指定的是集合的名称
let UserSchema = new mongoose.Schema({
  username:String,
  age:Number
},{collection:'user'});//集合的名称
//Schema不能操作数据库，只有模型才能操作数据库
//model 1参数是模型的名称，唯一的
let User = mongoose.model('User',UserSchema);
//exports.User = User;
//异步的 当一个任务执行时间比长的会做成异步
//主键特点 1 唯一 2. 与业务无关
//如果字段比schema定义的多，那么多余的字段会忽略掉
//如果字段比schema定义的少，那么只会保存提供的字段
/*User.create({username:'zfpx1'},function(err,doc){
  if(err){
    console.error(err);
  }else{
    //doc是保存成功之后的文档对象
    // _id 主键是一个文档的主键，每当一个文档保存到数据库的时候会给此对象自动生成一个主键.
    console.log(doc);
  }
});*/
// CRUD C-Create-增加 R-Read-查询 U-Update-修改 D-Delete-删除
//如果err是null,docs一定会有值吗？
// User.find({},function(err,docs){
//   console.log(docs);
// });
//1参数是更新的条件 2参数指定更新后的值 3参数callback
//update规定最多只匹配一条
// multiply=乘 multiple 多样的 如果匹配到多条记录，则全部更新
// increase 增加 +1
/*User.update({username:'zfpx1'},{$inc:{age:1}},{multi:true},function(err,result){
  //{ ok: 1, nModified: 0, n: 1 }
  // ok=1表示更新成功
  // nModified 实际修改的条数
  // n 匹配到的条数
  console.log(err);
  console.log(result);
});*/
//删除 1参数是删除的条件
/*User.remove({username:'zfpx1'},function(err,result){
  console.log(result);
});*/
/*let users = [];
for(let i=1;i<=10;i++){
  users.push({username:'zfpx'+i,age:i});
}
User.create(users);*/
//当前页码
let pageNum = 2;
//每页的条数
let pageSize = 3;
//sort 排序 age是排序字段 1升序还是-1降序
//skip 是跳过指定的条数
//skip限定返回的条数
//exec = execute 执行
// User.find({})
//   .sort({age:-1})
//   .skip(pageSize*(pageNum-1))
//   .limit(pageSize)
//   .exec(function(err,docs){
//     console.log(docs);//1-> 4 5 6  -1=> 7 6 5
//   });

User.findOne({},function(err,doc){
  console.log(doc);
});

User.findById('595728e2637dfd04984d0761',function(err,doc){
  console.log(doc);
});






