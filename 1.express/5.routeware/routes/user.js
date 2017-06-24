let express = require('express');
//调用Router方法返回一个router的路由实例
let router = express.Router();
//可以通过router定义路由
router.get('/signup',function(req,res){
  res.end('注册');
});
router.get('/signin',function(req,res){
    res.end('登录');
});
module.exports = router;

