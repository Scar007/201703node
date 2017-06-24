let express = require('express');
let STATUS_CODES = require('_http_server').STATUS_CODES;
let app = express();
let users = [{id:1,name:'zfpx1'},{id:2,name:'zfpx2'}];
app.use(function(req,res,next){
    res.send = function(params){
        let type = typeof params;
        res.setHeader('Content-Type','text/html;charset=utf-8');
        switch (type){
            case 'object':
                params = JSON.stringify(params);
                break;
            case 'number':
                //设置响应对象的状态码
                res.statusCode = params;
                params = STATUS_CODES[params];
                break;
        }
        res.end(params);//响应体
    }
    next();
});
//express扩展了一个send方法，可以接收任意的数据类型
app.get('/users',function(req,res,next){
    console.log(next);
    res.send(users);

});
app.get('/not',function(req,res){
    res.send(404+"");
});
app.listen(8080);