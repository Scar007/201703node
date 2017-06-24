function express(){
    //app是请求监听函数
    let app = function(req,res){
        for(let i=0;i<app.routes.length;i++){
            let route = app.routes[i];
            if(req.method == route.method && req.url == route.path){
               return  route.listener(req,res);
            }
        }
    }
    app.routes = [];
    app.get = function(path,listener){
      app.routes.push({
          method:'GET',path,listener
      });
    }
    app.listen = function(port){
        require('http').createServer(app).listen(port);
    }
    return app;
}
module.exports = express;