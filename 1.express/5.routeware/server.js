let express = require('express');
let app = express();
let user = require('./routes/user');
/**
 * 用户注册  /user/signup
 * 用户登录 /user/signin
 * 用户退出 /user/signout
 * 增加文章  /article/add
 * 删除文章 /article/delete
 */
//意味着会把此路径和客户端的请求路径进行匹配
//中间件的路径匹配，匹配是前缀，也就是说只要请求路径是以/user开头就可以匹配上
app.use('/user',user);
app.listen(8080);