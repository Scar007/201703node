/**
 * cookie
 */
let http = require('http');
let url = require('url');
let querystring = require('querystring');
http.createServer(function(req,res){
    let {pathname} = url.parse(req.url,true);
    if(pathname == '/visit'){
        //第1次访问服务器，服务器返回 欢迎你第1次访问
        //第2次访问服务器，服务器返回 欢迎你第2次访问

    }
}).listen(8080);