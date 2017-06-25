let express = require('express');
let session = require('express-session');
let app = express();
app.use(session({
    resave:true,//每次客户端请求过来的时候都要重新保存session
    saveUninitialized:true,//保存未使用过的session
    secret:'zfpx' //是用来加密cookie的
}));
app.get('/write',function(req,res){
  req.session.amount = 1000;
  res.send('ok');
});
//s%3AKUCHWY8UHlToB1NvnbakQlrPuRXYnrCh.MbyAwMU2VoJda5lk%2Bz2TIP84D02Ov4QgdufERQQ6XRg
app.get('/read',function(req,res){
    res.send(req.session.amount+'元');
});

app.get('/visit',function(req,res){
  let amount = req.session.amount;
  if(amount){
      req.session.amount -= 100;
  }else{
      req.session.amount= 1000;
  }
  res.send(`你还有${req.session.amount}元`);
});
app.listen(8080);