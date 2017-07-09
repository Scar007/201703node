let request = require('request');
let url = 'http://top.baidu.com/category?c=1&fr=topindex';
//此模块可以实现GBK转成utf8字符串
let iconv = require('iconv-lite');
//err 错误对象 response 响应对象 body 响应体
//encoding默认值是utf8
request({url,encoding:null},function(err,response,body){
  //当请求成功并且成功获取到响应的时候
  if(!err && response.statusCode == 200){
    //就是把gbk类型的buffer转成utf8字符串
    body = iconv.decode(body,'GBK');
    console.log(body);
  }

});