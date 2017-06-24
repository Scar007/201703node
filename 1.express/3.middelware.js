let express = require('express');
let app = express();
//使用中间件 中间件一定要放在最上面，放在路由之前
/**
 * 1. 进行一些公共的处理
 * 2. 添加公共的属性和方法 req.query
 * 3. 进行权限检查
 */
app.use(function(req,res,next){
   console.log('middleware');
   res.setHeader('Content-Type','text/html;charset=utf-8');
   next();
});
// /signup 注册 /signin 登录 /signout 退出 其它 页面不存在
app.get('/signup',function(req,res){
    res.end('注册');
});
app.get('/signin',function(req,res){
    res.end('登录');
});
app.get('/signout',function(req,res){
    res.end('退出');
});
app.all('*',function(req,res){
    res.end('页面不存在');
});
app.listen(8080);