/* 💡"JavaScript-with-JC"
👉Array.prototype.concat and Its Polyfill 
The concat() method is used to merge two or more arrays.

💡Note - It does not mutate the original array, and returns a new array.
👉 One Level Up :- We can create our own custom concat( Polyfill of concat ), Check out the code below.👇 
*/

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const value1 = "jc";
const value2 = "2";
const value3 = function () {};
const value4 = undefined;
const value5 = null;
const numbers3 = [7, 8, 9];

const result = numbers1.concat(
  numbers2,
  value1,
  value2,
  value3,
  value4,
  value5,
  numbers3
);

console.log("result", result);
//  [ 1, 2, 3, 4, 5, 6, 'jc', '2', [Function: value3], undefined, null, 7, 8, 9 ]

Array.prototype.customConcat = function () {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(this[i]);
  }
  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      for (let j = 0; j < arguments[i].length; j++) {
        temp.push(arguments[i][j]);
      }
    } else {
      temp.push(arguments[i]);
    }
  }
  return temp;
};

const resultCustom = numbers1.customConcat(
  numbers2,
  value1,
  value2,
  value3,
  value4,
  value5,
  numbers3
);

console.log("resultCustom", resultCustom);
//  [ 1, 2, 3, 4, 5, 6, 'jc', '2', [Function: value3], undefined, null, 7, 8, 9 ]
