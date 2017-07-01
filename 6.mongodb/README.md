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
use admin 切换到admin数据库下
db.help()   可以查看所有的使用可以的方法
db.shutdownServer() 用来安全安闭服务器
```

## 为什么要学mongodb
1. 性能非常高,支持的并发多
4核16G服务器 mysql 1200并发 mongodb 16000*50=
2. 支持分布式
数据存储能力是可以无限扩展的
3. 内部语法用的是javascript
4. 内部数据存储结构JSON

## 后台工程师常用的数据库
- sqlserver 只能跟在window上
- Oracle(DB2) 非常的贵，性能可靠，单机版
- mysql 开源、免费、性能可靠
- mongodb json javascript
- redis、couchbase、memcached  k-v 键-值数据库
- hive hbase (hadoop)  大数据分析



