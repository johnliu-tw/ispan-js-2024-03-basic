// Rest & Spread Operation
function printNumbers(...numbers){
  console.log(numbers);
}
printNumbers(1,2,3,4);

function printNumbers2(number1, number2, number3){
  console.log(number1);
  console.log(number2);
  console.log(number3);
}
printNumbers2(...[1,2,3]);


// 小試身手2
let products = [
    {name: '蘋果', price: 100},
    {name: '水梨', price: null},
    {name: '香蕉', price: 200},
    {name: '橘子', price: 300},
    {name: '葡萄', price: 400},
]

for(let product of products ){
  if(product.price === null){
    continue;
  }
  
  if(product.price >= 300){
    for(let key in product){
       console.log(`${key}: ${product[key]}`);
    }
    break;
  }
}

// 小試身手1
let product1 = '10';
let product2 = '50';

let sum = parseInt(product1) + parseInt(product2);
console.log(`嗨, 您的價格${ sum >= 50 ? '' : '沒有' }超過限制`)


// 0328 homework
let book = {
    title: 'book',
    author: 'someone',
    year: 1999,
    isBorrowed: true,
    toggleBorrowedStatus: function(){
      this.isBorrowed = !this.isBorrowed;
    },
    displayInfo: function(){
      console.log('title' + this.title);
      console.log('author' + this.author);
      console.log('year' + this.year);
    }
  }
  

// 小試身手 12 from 0328
let fruitsSeller = {
    name: '野原新之助',
    age: 5,
    fruits: ['Orange', 'Apple', 'Papaya', 'Kiwi', 'Papaya'],
    countFruits: function(fruit){
        let count = 0;
        for(let index = 0; index < this.fruits.length; index++){
          if(this.fruits[index] === fruit){
            count ++;
          }
        }
  
        return count;
    },
    getInfo: function(){
      console.log('你好，我是' + this.name + '，今年' + this.age + '歲')
    }
}
  
fruitsSeller.getInfo();
console.log(fruitsSeller.countFruits('Bun'))
