let express = require('express');
let url = require('url');
let app = express();
app.get('/',function(req,res){
    console.log(req.method);//获取请求的方法名
    console.log(req.url);//请求的路径
    console.log(req.headers);//请求头
    //let urlObj = url.parse(req.url,false);
    //  name=zfpx&age=8 查询字符串
    // 后来 查询字符串可以是指一种格式,比如说当提交表单的时候，如果请求方法是GET方式，会把表单转成查询字符串放在URL的？后面，如果请求方法是POST的话，会把表单转成查询字符串放在请求体里
    //console.log(urlObj.query);
    //此处的query一定是来自于?传参  /xxx?name=zfpx
    console.log(req.query);
    //user-agent 用户代理
    res.statusCode = 500;//响应的状态码
    res.end('hello');
});
//路径参数
// /user/1/zfpx1  /user/2/zfpx2
//params是路径参数对象
app.get('/user/:xxx/:yyy',function(req,res){
    // req.params = {xxx:1,yyy:'zfpx1'}
   console.log(req.params);
   res.end('user');
});
app.listen(8080);