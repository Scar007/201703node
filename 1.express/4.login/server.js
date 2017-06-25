/**
 * 注册 登录 欢迎页
 * 1. 当访问注册页面的时候返回注册表单，然后填写表单，填写完成后提交到服务器并进行注册。然后跳转到登录页。
 * 2. 然后输入登录信息，并提交表单，然后提交到服务器，验证是否登录成功，如果成功，跳转到欢迎页，如果登录失败跳回到登录页。
 */
let express = require('express');
let path = require('path');
let app = express();
//设置模板引擎
app.set('view engine','html');
//设置模板存放的根目录 根目录是一个物理文件夹
app.set('views',path.resolve('views'));
//如果模板的后缀是html的话还是使用ejs的渲染方法来渲染。
app.engine('html',require('ejs').__express);

let user = require('./routes/user');



app.listen(8080);
