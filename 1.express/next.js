let arr = [];
let fn1 = function(next){
    console.log(1);
    next();
}
let fn2 = function(next){
    console.log(2);
    next();
}
let fn3 = function(next){
    console.log(3);
}
arr.push(fn1);
arr.push(fn2);
arr.push(fn3);
let index = 0;
let next = ()=>{
    let fn = arr[index++];
    fn(next);
}
next();
