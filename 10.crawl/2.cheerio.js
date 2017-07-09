let express = require('express');
let path = require('path');
let cheerio = require('cheerio');
let app = express();
let request = require('request');
let url = 'http://www.xinfadi.com.cn';
//设置模板引擎
app.set('view engine','html');
//设置模板存放的根目录
app.set('views',path.resolve('views'));
//设置HTML类型的模板用ejs来进行渲染
app.engine('html',require('ejs').__express);
app.get('/',function(req,res){
  //请求URL地址得到响应体
  request(url,function(err,response,body){
    //通过cheerio把响应体转成jquery对象
     let $ = cheerio.load(body);
     let foods = [];
     //通过选择符筛选出所有的li
     $('#tab1_div_0 .conLi').each(function(index,li){
        foods[index]=[];
        //循环li所有的em
        $(li).children().each(function(i,em){
          //如果文本的值不为空的话
          if($(em).text().trim())
            foods[index][i] = $(em).text();
        });
     });
     res.render('index',{foods});
  })
});
app.listen(8080);