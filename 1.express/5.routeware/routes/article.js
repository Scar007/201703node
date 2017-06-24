let express = require('express');
//调用Router方法返回一个router的路由实例
let router = express.Router();
//可以通过router定义路由
router.get('/add',function(req,res){
  res.send('增加文章');
});

router.get('/delete',function(req,res){
    res.send('删除文章');
});

module.exports = router;

