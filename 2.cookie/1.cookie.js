/**
 * cookie
 */
let http = require('http');
let url = require('url');
let querystring = require('querystring');
http.createServer(function(req,res){
   let {pathname} = url.parse(req.url,true);
   if(pathname == '/write'){//写cookie
       //当客户端第一次访问服务器的时候，服务器通过响应头把cookie种植到客户端
      res.setHeader('Set-Cookie','xxx=yyy');
      res.end('write');
   }else if(pathname == '/read'){//读cookie
   //当客户端再次访问服务器听时候，会把上次写入保存的cookie重新通过请求头发给服务器  req.headers.cookie
       //name=zfpx; age=9
       let result = querystring.parse(req.headers.cookie,'; ');
       console.log(result);
       res.end(result.name);
   }
}).listen(8080);