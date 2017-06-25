let express = require('express');
let cookieParser = require('cookie-parser');
/**
 * 写cookie res.cookie(name,value);
 * 读cookie req.cookies.name  cookie-parser
 */
let app = express();
app.use(cookieParser());
/*app.get('/visit',function(req,res){
  let visit = req.cookies.visit;
  if(visit){
      visit = parseInt(visit)+1;
  } else{
      visit = 1;
  }
  res.cookie('visit',visit,{
      //如果httpOnly设置为true,那么浏览器的控制台不能通过JS读取或设置此cookie,会更加安全
      httpOnly:true
  });
  res.send(`这是你的第${visit}次光临`);
});*/
//向客户端写入cookie
app.get('/write',function(req,res){
    // /read1/xxx
 // res.cookie('name','zfpx',{path:'/read1'});
  //res.cookie('name','zfpx',{maxAge:10*1000});
    res.cookie('name','zfpx',{expires:new Date(Date.now()+10*1000)});
  res.send('ok');
});
app.get('/read1',function(req,res){
    console.log(req.cookies);
    res.send(req.cookies);
});
app.get('/read2',function(req,res){
    console.log(req.cookies);
    res.send(req.cookies);
});
app.listen(8080);