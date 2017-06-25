/**
 * 注册 登录 欢迎页
 * 1. 当访问注册页面的时候返回注册表单，然后填写表单，填写完成后提交到服务器并进行注册。然后跳转到登录页。
 * 2. 然后输入登录信息，并提交表单，然后提交到服务器，验证是否登录成功，如果成功，跳转到欢迎页，如果登录失败跳回到登录页。
 */
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let app = express();
//设置模板引擎
app.set('view engine','html');
//设置模板存放的根目录 根目录是一个物理文件夹
app.set('views',path.resolve('views'));
//如果模板的后缀是html的话还是使用ejs的渲染方法来渲染。
app.engine('html',require('ejs').__express);
let user = require('./routes/user');
//使用静态文件中间件,它是一个中间件，是一个函数，用来响应客户端对服务器端的静态文件请求
//用静态文件根目录绝对路径+客户端请求路径得到此静态文件的绝对路径，然后把此文件从硬盘读出到内存中并作为响应体发回给客户端
app.use(express.static(path.resolve('../../node_modules')));
//只有post请求，并且有请求体的才需要使用此中间件
app.use(bodyParser.urlencoded({extended:true}));
//所有的express中间件都是一个函数，需要执行才能得到真正的中间件函数
app.use(cookieParser());
app.use('/user',user);
/**
 * 如果是一个URL路径一定要加/
 * 如果是一个文件路径，则需要是相对路径
 *
 */
app.get('/welcome',function(req,res){
    //req.cookies = querystring.parse(req.headers.cookie,'; ')
    res.send('欢迎'+req.cookies.username+'光临');
});
app.listen(8080);
