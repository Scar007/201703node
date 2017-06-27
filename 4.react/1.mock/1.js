class Button{
  //渲染 表示这个组件长成什么样子
  createDOMFromString(str){
    let div = document.createElement('div');
    div.innerHTML = str;
    return div.children[0];
  }
  render(){
     let element = this.createDOMFromString(`
          <button class="my-btn">
             <span style="color:blue" class="my-text">点赞</span>
          </button>
         `);
     element.addEventListener('click',function(){
         let myText = document.querySelector('.my-text');
         if(myText.innerText == '点赞'){
             myText.innerText = '取消';
         }else{
             myText.innerText = '点赞';
         }
     })
     return element;
  }
}