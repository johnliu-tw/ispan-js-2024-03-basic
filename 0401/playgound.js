// 小試身手3
function getTaiwanDate(){
  const dateObject = new Date();
  const twYear = dateObject.getFullYear() - 1911;
  let twMonth = dateObject.getMonth() + 1;
  let twDate = dateObject.getDate();
  twMonth = twMonth > 9 ? twMonth : '0' + twMonth;
  twDate = twDate > 9 ? twDate : '0' + twDate;
  
  return `${twYear}-${twMonth}-${twDate}`
}

console.log(getTaiwanDate());

function getTaiwanDate2(year = 0, month = 0, date = 0){
  const dateObject = new Date();
  if(year !== 0 && month !== 0 && date !== 0){
    dateObject.setFullYear(year);
    dateObject.setMonth(month - 1);
    dateObject.setDate(date);
  }
  
  const twYear = dateObject.getFullYear() - 1911;
  let twMonth = dateObject.getMonth() + 1;
  let twDate = dateObject.getDate();
  twMonth = twMonth > 9 ? twMonth : '0' + twMonth;
  twDate = twDate > 9 ? twDate : '0' + twDate;
  
  return `${twYear}-${twMonth}-${twDate}`
}

console.log(getTaiwanDate2(2020, 3, 20));


function getLuckyNumber(){
  return Math.floor(Math.random() * 26 + 20);
}

console.log(getLuckyNumber());

function getLuckyNumber2(min = 20, max = 46){
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getLuckyNumber2(1.44, 3.89));


// 小試身手2
let numbers = [-5, 2, -8, 12, 15];

let max = Math.max(...numbers);
let min = Math.min(...numbers);

let absNumbers = [];
for(let number of numbers){
  absNumbers.push(Math.abs(number));
}
let maxAbs = Math.max(...absNumbers);
let powerNumber = Math.sqrt(Math.pow(2, 6));
let ceil = Math.ceil(-5.7);
let floor = Math.floor(15.2);
let round = Math.round(12.4)

console.log(max + min + maxAbs + powerNumber + ceil + floor + round);

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
  
  
  
