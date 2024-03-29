// 小試身手 11
function countPapaya(fruits){
  let count = 0;
  for(let index = 0; index < fruits.length; index++){
    if(fruits[index] === 'Papaya'){
      count ++;
    }
  }
  
  return count;
}

let result = countPapaya(['Orange', 'Apple', 'Papaya', 'Kiwi', 'Papaya']);
console.log(result);


// 小試身手 10
function countSum(numbers){
  for(let index = 0; index < numbers.length; index ++){
     let n = numbers[index];
     let sum = 0;
     for(let counter = 1; counter <= n; counter ++){
        sum = sum + counter;
     }
     console.log(sum);
  }
}

countSum([3, 10, 13]);


// 小試身手9
let numbers = [3, 10, 13];

for(let index = 0; index < numbers.length; index ++){
   let n = numbers[index];
   let sum = 0;
   for(let counter = 1; counter <= n; counter ++){
      sum = sum + counter;
   }
   console.log(sum);
}


// 小試身手8
let students = ['Alice', 'Bob'];
students.push('Charlie');
students.unshift('David');
students.splice(1, 1);

console.log(students.length);
console.log(students);


// 小試身手7
for(let counter = 1; counter <= 9; counter ++){
  for(let counter2 = 1; counter2 <= 9; counter2 ++){
    if(counter === counter2){
      console.log(counter + 'x' + counter2 + '=' + counter * counter2 + ' 棒');
    } else {
      console.log(counter + 'x' + counter2 + '=' + counter * counter2);
    }
    
  }
}


// 小試身手6
let n2 = 10;
let sum2 = 0;

for(let counter = 1; counter <= n2; counter ++){
  sum2 = sum2 + counter;
}
console.log(sum2);


// 小試身手5
let n = 10;
let counter = 1;
let sum = 0;

while(counter <= n){
  sum = sum + counter;
  counter ++;
}

console.log(sum);

// 小試身手4
let day = 4;
switch(day){
  case(1):
    console.log('星期一');
    break;
  case(2):
    console.log('星期二');
    break;
  case(3):
    console.log('星期三');
    break;
  case(4):
    console.log('星期四');
    break;
  case(5):
    console.log('星期五');
    break;
  case(6):
    console.log('星期六');
    break;
  case(7):
    console.log('星期日');
    break;
  default:
    console.log('輸出無效的數字');
    break;
}



// 小試身手3
let questions = 100;

if(questions <= 10){
  console.log(questions * 6);
} else if (questions <= 20){
  console.log(10 * 6 + (questions - 10) * 2);
} else if (questions <= 40){
  console.log(60 + 20 + (questions - 20) * 1);
} else {
  console.log(100);
}

// 小試身手2
let grade =100;

// 版本1
if(grade >= 90){
  console.log('A');
} else if(90 > grade && grade >= 80){
  console.log('B');
} else if(80 > grade && grade >= 70){
  console.log('C');
} else if(70 > grade && grade >= 60){
  console.log('D');
} else{
  console.log('E');
}
// 版本2
if(grade >= 90){
  console.log('A');
} else if(grade >= 80){
  console.log('B');
} else if(grade >= 70){
  console.log('C');
} else if(grade >= 60){
  console.log('D');
} else{
  console.log('E');
}

// 小試身手1
let chinese = 90;
let math = 80;
let english = 97;

console.log(chinese + math + english);
console.log((chinese + math + english) / 3);




