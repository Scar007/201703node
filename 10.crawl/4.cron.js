//cronjob 计划任务
let CronJob = require('cron').CronJob;
//第一个参数是任务执行的时机
/**
 * * 秒(0-59)
 * * 分钟(0-59)
 * * 小时(0-23)
 * * 日期(1-31)
 * * 月(0-11)
 * * 星期(0-6)
 *
 * * 代表任意的值
 * 5 固定的值
 * 5,15,25,30 只要值在这个枚举范围之内的都可以
 * 10-30 代表一个区间或者范围
 * 取值等于0表示每隔多长时间一次
 *
 */
let job = new CronJob("00 00 22 * * 1,5",function(){
   console.log(new Date().toLocaleString());
});
job.start();