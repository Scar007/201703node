let express = require('express');
let app = express();
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    //  http://locahost:8080/user?name=zfpx
    console.log(req.path);//pathname 路径名
    next();
});
app.get('/',function(req,res){
    res.end('home');
});
//   /about?name=zfpx 匹配路径的时候其实是匹配的请求的路径名，也就是端口号后面到？前面的部分
app.get('/about',function(req,res){
    res.end('about');
});

app.listen(8080);