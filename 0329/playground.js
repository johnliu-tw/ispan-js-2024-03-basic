

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
