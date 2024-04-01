// Math random() 考考你
console.log((Math.random() * 14) + 16 ); // 16 ~30

// Math.max, min 呼叫方式
console.log(Math.max(1, 2, 3));
console.log(Math.max(...[1, 2, 3]));

console.log(Math.min(1, 2, 3));
console.log(Math.min(...[1, 2, 3]));


// 小試身手1
let inviteList = ['John', 'Dave', 'Macy'];
let newInviteList = ['Judy', 'Tom'];

console.log(inviteList.includes('Dave'));
console.log(inviteList.indexOf('Dave'));

inviteList = inviteList.concat(newInviteList);
inviteList = inviteList.reverse();
inviteList = inviteList.join(',');

// inviteList = inviteList.reverse().join(',');
console.log(inviteList);

// Day2 回家作業
let person = {
    name: '野原新之助',
    age: 30,
    hobbies: ['drawing', 'coding', 'reading', 'swimming', 'skating', 'running'],
    getInfo: function(){
      return `你好, 我是${this.name}, 今年${this.age}歲`
    },
    isAdult: function(){
      return this.age > 18 ? true : false;
    },
    printPerson: function(){
      for( let key in person ){
        if(typeof person[key] === 'function'){
           continue;
        }
        
        if(key === 'hobbies'){
          let count = 1;
          for(let hobby of person['hobbies']){
            if(hobby === 'coding'){
               continue;
            }
            
            console.log(`hobby: ${hobby}`);
            count ++;
            if(count === 5){
               break;
            }
          }
        } else {
          console.log(`${key}: ${person[key]}`); 
        }
      }
    }
  }
  
  console.log(person.getInfo());
  console.log(person.isAdult());
  person.printPerson();
  
  
  
