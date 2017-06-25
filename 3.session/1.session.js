/**
 * 1.当客户端第一次访问咖啡厅的时候，老板给送我一张余额为1000的储值卡。
 * 2. 以后每当我们去消费，老板会把卡上减去100元。
 **/
let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();
app.use(cookieParser());
//这是服务器向客户端写入卡号时候的key(属性名)
let SESSION_KEY = 'xxx';
//在服务器端开辟内存，存放每个卡号对应的信息
let sessions = {};
app.get('/visit',function(req,res){
    //从客户端发过来的cookie中得到卡号
    let sessionId = req.cookies['xyz'];// 899
    if(sessionId){
        //通过卡号找到此卡号在服务器端记录
        let sessionObj = sessions[sessionId];
        if(sessionObj){
            sessionObj.amount -= 100;
            res.send(`你好，欢迎你老顾客 ，你的卡还有${sessionObj.amount}元`);
        }else{
            newCard();
        }

    }else{//如果客户端是第一次访问服务器
        newCard();
    }
    function newCard(){
        //先生成一个卡号,卡号唯一，不容易我被猜到 899
        let newSessionId = Date.now()+'_'+Math.random();
        //在服务器端记录此卡号对应的余额 899
        sessions[newSessionId] = {amount:1000};
        //把生成的卡号通过cookie发送给客户端
        res.cookie('xyz',newSessionId);
        res.send(`客人，欢迎你初次光临，送你一张1000元的卡`);
    }
});
app.listen(8080);