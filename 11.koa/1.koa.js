//引入koa模块
const Koa = require('koa');
//创建Koa实例
let app = new Koa();
const fs = require('fs');
//使用中间件 不管客户端以什么访问访问什么路径
//ctx=context 上下文对象
// req(原生的) request 请求对象
// res(原生的) response 响应对象
app.use(async function(ctx){
  //就相当于以前res.end('hello');
  //let content = fs.readFileSync('./1.txt','utf8');
  //异步方法都没有返回值
  //async(异步) await(等待)最底层的await返回需要是Promise对象
  let content = await readFile();
  ctx.body = content;
});

async function readFile(){
  return new Promise(function(resolve,reject){
    fs.readFile('./1.txt','utf8',function(err,data){
        if(err){
          reject(err);
        }else{
          resolve(data);
        }
    });
  });
}

//监听8080端口
app.listen(8080);