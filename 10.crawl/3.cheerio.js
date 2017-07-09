let cheerio = require('cheerio');
//cheerio和jquery一模一样，是node里面的jquery
let $ = cheerio.load(`
   <ul class="messages">
      <li class="message">1</li>
      <li class="message">2</li>
   </ul>
`);
console.log($.html());
let ul = $('.messages');
ul.find('li').each(function(index,item){
  let $this = $(item);
  console.log($this.text());
})
