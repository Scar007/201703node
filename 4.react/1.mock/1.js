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