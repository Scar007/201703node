class Component{
    constructor(){
        this.state = {};
    }
    //渲染 表示这个组件长成什么样子
    createDOMFromString(str) {
        let div = document.createElement('div');
        div.innerHTML = str;
        return div.children[0];
    }
    //设置状态对象1.用新对象替换掉老对象 2. 改变视图,用新的状态对象渲染出新的DOM对象并且替换掉老的DOM对象
    setState(newState){
        this.state = newState;
        //先缓存老的button对象
        let oldEle = this.element;
        //根据新的state生成新的element对象
        this.render();
        //把父元素中老button用新的button对象替换掉
        oldEle.parentElement.replaceChild(this.element, oldEle);
    }

    render() {
        this.element = this.createDOMFromString(this.getDOM());
        this.bindEvent();
        return this.element;
    }
}
class Button extends Component{
    constructor() {
        super();
        //状态指的是一个组件内部的变量
        this.state = {star: false};
    }

    handleClick() {
        this.setState({star: !this.state.star});
    }

    getDOM(){
        return (
            `
          <button class="my-btn">
             <span style="color:blue" class="my-text">${this.state.star ? '取消' : '点赞'}</span>
          </button>
         `
        )
    }
    bindEvent(){
        this.element.addEventListener('click', this.handleClick.bind(this))
    }

}