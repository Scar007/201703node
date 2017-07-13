const Koa = require('koa');
let app = new Koa();
//1start 2start 2end 1end
app.use(async  function (ctx, next) {
  console.log('logger1 start');
  await next();
  console.log('logger1 end');
});
app.use(async function (ctx, next) {
  console.log('logger2 start');
  await next();
  console.log('logger2 end');
});
app.use(async function (ctx) {
  ctx.body = 'hello';
});
app.listen(8080);