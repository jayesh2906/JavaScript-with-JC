/* 💡"JavaScript-with-JC"
👉Array.prototype.slice and Its Polyfill 
Array.prototype.slice returns a shallow copy of an original array slicing it from given start index to end index (excluding end index) i.e start to end-1.

💡slice method takes two arguments(optional) start and end, if no argument passed then it returns shallow copy of a original array with all values.

positive index =>  0  1  2
💡for an array = [10,20,30]  
negative index => -3 -2 -1
 
💡Note - slice does not mutate the original array, and returns sliced array.

💡Example -
const numbers = [10, 11, 12, 13, 14, 15, 16];

const result1 = numbers.slice(2, 5); // 2 to 4
console.log(result1); // [ 12, 13, 14 ]

const result2 = numbers.slice(2); // 2 to n-1
console.log(result2); // [ 12, 13, 14, 15, 16 ]

const result3 = numbers.slice(-4, -1); // -4 to -2
console.log(result3); // [ 13, 14, 15 ]

const result4 = numbers.slice(-4); // -4 to n-1
console.log(result4); // [ 13, 14, 15, 16 ]

const result5 = numbers.slice(2, -1); // 2 to -2
console.log(result5); // [ 12, 13, 14, 15 ]

const result6 = numbers.slice(); // 0 to n-1
console.log(result6); // [ 10, 11, 12, 13, 14, 15, 16 ]

const result7 = numbers.slice(false, true); // 0 to 1
console.log(result7); // [ 10 ]

💡Use Case -
👉 displaying list of data for current page in pagination 👇

const names = [ "a","b","c","d","e","f","g","h","i","j","k","l",
"m","o","p","q","r","s","t","u","v","w","x","y","z" ];

const currentPage = 2;
const pageSize = 10;

const diplayNames = names.slice(pageSize * (currentPage - 1),pageSize * currentPage);
console.log(diplayNames);
ouyput ["k","l","m","o","p","q","r","s","t","u"]
 
👉 One Level Up :- We can create our own custom slice( Polyfill of slice ), Check out the code below.👇 
*/

const numbers = [10, 11, 12, 13, 14, 15, 16];

Array.prototype.customSlice = function (start, end) {
  let array = this;
  let temp = [];

  if (start === undefined && end === undefined) {
    return [...array];
  }
  if (end === undefined) {
    end = array.length;
  }
  if (start < 0) {
    start = array.length + start;
  }
  if (end < 0) {
    end = array.length + end;
  }

  for (let i = parseInt(+start); i < parseInt(+end); i++) {
    temp.push(array[i]);
  }
  return temp;
};

const result1 = numbers.customSlice(2, 5);
console.log(result1); // [ 12, 13, 14 ]

const result2 = numbers.customSlice(-4, -1);
console.log(result2); // [ 13, 14, 15 ]

const result3 = numbers.customSlice();
console.log(result3); // [ 10, 11, 12, 13, 14, 15, 16 ]

const result4 = numbers.customSlice(false, true); // 0 to 1
console.log(result4); // [ 10 ] implicit type coercion 👆
