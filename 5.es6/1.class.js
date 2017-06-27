class Person{
  constructor(name){
      //this代表当前组件的实例,私有属性是每个实例所独有的，不共享
      this.name = name;
  }
  //静态属性 静态属性是属于类
  static country(){return '中国'}
  //公有的方法,所有的实例共有的方法
  getName(){
    return this.name;
  }
}
class Student extends Person{
    constructor(name,age){
        //调用父类的构造函数
        super(name);
        this.age = age;
    }
    getAge(){
        return this.age;
    }
}
console.log(Person.country());
// function Person(name){
//     this.name = name;
// }
// Person.prototype.getName = function(){
//     return this.name;
// }
Person.home = 'beijing';
//es6的类相当于es5构造函数+原型
let p = new Person('zfpx');
console.log(p.getName());
let s = new Student('zfpx',8);
console.log(s.getAge());
console.log(s.getName());