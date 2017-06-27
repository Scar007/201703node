class Button{
    constructor(){
        //状态指的是一个组件内部的变量
        this.state = {star:false};
    }
  //渲染 表示这个组件长成什么样子
  createDOMFromString(str){
    let div = document.createElement('div');
    div.innerHTML = str;
    return div.children[0];
  }
  handleClick(){
    this.state = {star:!this.state.star};
    //先缓存老的button对象
    let oldEle = this.element;
    //根据新的state生成新的element对象
    this.createElement();
    //把父元素中老button用新的button对象替换掉
    oldEle.parentElement.replaceChild(this.element,oldEle);
  }
  createElement(){
      this.element = this.createDOMFromString(`
          <button class="my-btn">
             <span style="color:blue" class="my-text">${this.state.star?'取消':'点赞'}</span>
          </button>
         `);
      this.element.addEventListener('click',this.handleClick.bind(this))
  }
  render(){
      this.createElement();
     return this.element;
  }
}