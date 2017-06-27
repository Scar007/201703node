class Component{
    constructor(){
        this.state = {};
    }
    //渲染 表示这个组件长成什么样子 str html字符串
    createDOMFromString(str) {
        //<div><button/></div>
        let div = document.createElement('div');
        div.innerHTML = str;
        //返回buttonDOM节点
        return div.children[0];
    }
    //设置状态对象1.用新对象替换掉老对象 2. 改变视图,用新的状态对象渲染出新的DOM对象并且替换掉老的DOM对象
    setState(newState){
        this.state = newState;
        //先缓存老的button对象
        let oldEle = this.element;
        //根据新的state生成新的element对象
        let newEle = this.render();
        //把父元素中老button用新的button对象替换掉
        oldEle.parentElement.replaceChild(newEle, oldEle);
    }

    render() {
        this.element = this.createDOMFromString(this.getDOM());
        //绑定事件
        this.bindEvent();
        //返回此dom节点
        return this.element;
    }
    //挂载
    mount(container){
        container.appendChild(this.render());
    }
}