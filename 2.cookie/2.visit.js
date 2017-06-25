/**
 * cookie
 */
let http = require('http');
let url = require('url');
let querystring = require('querystring');
// key = visit
http.createServer(function(req,res){
    let {pathname} = url.parse(req.url,true);
    res.setHeader('Content-Type','text/html;charset=utf-8');
    if(pathname == '/visit'){
        //第1次访问服务器，服务器返回 欢迎你第1次访问
        //第2次访问服务器，服务器返回 欢迎你第2次访问
        let cookie = req.headers.cookie;
        let visit = 1;
        if(cookie){
            let cookieObj = querystring.parse(cookie,'; ');
            if(cookieObj.visit){
                visit = parseInt(cookieObj.visit)+1;
            }
        }
        res.setHeader('Set-Cookie','visit='+visit);
        res.end(`顾客，欢迎你的第${visit}次访问`);
    }
}).listen(8080);