class Counter extends Component {
    constructor() {
        super();
        //状态指的是一个组件内部的变量
        this.state = {count: 0};
    }

    handleClick() {
        this.state.count++;
        this.setState(this.state);
    }

    getDOM() {
        return (
            `
            <div>
                <p>${this.state.count}</p>
                <button class="my-btn">+</button>
            </div>
         
         `
        )
    }
    bindEvent() {
        this.element.querySelector('.my-btn').addEventListener('click', this.handleClick.bind(this))
    }

}
