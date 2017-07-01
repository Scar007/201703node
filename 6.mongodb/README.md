## 如何启动mongodb
### 启动服务器端
```
mongod --dbpath=真实存在事先创建好的路径
```
### 如何启动客户端
```
mongo
```
### 如何优雅的安全的停止服务器
```
use admin
db.help()   可以查看所有的使用可以的方法
db.shutdownServer() 用来安全安闭服务器
```