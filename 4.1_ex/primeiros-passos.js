let a = 5;
let b = '5';

// a = 10 && b = '2'
// 102 --> number + string will concat
// 8 --> all other operations will work normally with value of numeric string
// 20
// 5
// 0
// a = 10 && b = undefined
// NaN --> when either element is undefined all operations result in undefined
// a = 10 && b = 'xablau'
// 10xablau --> number + string will concat
// NaN --> number + text string all other operations will result in NaN
// a = 'xablau' && b = 5
// xablau5 --> string plus number will concat
// NaN --> all other operations will result in NaN
// a = 5 && b = 0
// 5
// 5
// 0
// Infinity
// NaN

let sum = a + b;
console.log(sum);

let subtract = a - b;
console.log(subtract);

let multiply = a * b;
console.log(multiply);

let divide = a / b;
console.log(divide);

let remainder = a % b;
console.log(remainder);

if (a > b) {
  console.log(a);
} else if (a < b) {
  console.log(b);
} else if (a == b) {
  console.log('The numbers are equal');
} else {
  console.log('invalid comparison');
};
