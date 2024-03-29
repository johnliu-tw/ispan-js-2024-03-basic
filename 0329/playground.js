// 小試身手4
// 1. 標準方式
// function getRealPrice(price, discount = 0.2){
//   return price * (1 - discount);
// }

// 2. 函式表達式
// const getRealPrice = function(price, discount = 0.2){
//   return price * (1 - discount);
// }

// 3. 箭頭函式
const getRealPrice = (price, discount = 0.2) => price * (1 - discount);

console.log(getRealPrice(100));
console.log(getRealPrice(100, 0.3));



// 小試身手3
function findMax(...numbers){
  let result = 0;
  for(number of numbers){
    // 第一輪, number => 1
    // 第二輪, number => 2
    // 第三輪, number => 5
    // 第四輪, number => 7
    // 第五輪, number => 3
    if(number > result){
       // 第一輪, result = 1
       // 第二輪, result = 2
       // 第三輪, result = 5
       // 第四輪, result = 7
       result = number;
    }
  }
  
  return result;
}
console.log(findMax(1,2,5,7,3));
console.log(findMax(1,2,5));
console.log(findMax(1,2,5,7,3,10));

// 7


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
