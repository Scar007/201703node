let express = require('express');
//router=app
let router = express.Router();
let users = [];
router.get('/signup',function(req,res){
  //路径必须是相对绝径
  res.render('user/signup',{title:'用户注册'});
});
//处理提交注册表单请求
router.post('/signup',function(req,res){
   users.push(req.body);
   //重定向 让客户端重新向另外一个地址发出请求
   res.redirect('/user/signin');
});
router.get('/signin',function(req,res){
  res.render('user/signin',{title:'用户登录'});
});
router.post('/signin',function(req,res){
 let user = req.body;
 let oldUser = users.find(function(item){
     return user.username == item.username && user.password == item.password
 });
 if(oldUser){
     //向客户端种植cookie
    res.cookie('username',oldUser.username,{
        domain:'www.zfpx.cn'
    });
    res.redirect('/welcome');
 }else{
    res.redirect('back');
 }
});

module.exports = router;