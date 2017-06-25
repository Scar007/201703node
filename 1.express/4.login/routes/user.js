let express = require('express');
//router=app
let router = express.Router();
router.get('/signup',function(req,res){
  //路径必须是相对绝径
  res.render('user/signup',{title:'用户注册'});
});
module.exports = router;