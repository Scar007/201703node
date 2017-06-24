let req = {};
let fn1 = function(next){
    console.log(1);
    req.money = 100;;
    next();
}
let fn2 = function(next){
    console.log(2,req.money);
    next();
}
let fn3 = function(next){
    console.log(3);
}
let arr = [fn1,fn2,fn3];
let index = 0;

let next = ()=>{
    let fn = arr[index++];
    fn(next);
}
next();
