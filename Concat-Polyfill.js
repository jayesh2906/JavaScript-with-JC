/* 💡"JavaScript-with-JC"
👉Array.prototype.concat and Its Polyfill 
The concat() method is used to merge two or more arrays.

💡Note - It does not mutate the original array, and returns a new array.
👉 One Level Up :- We can create our own custom concat( Polyfill of concat ), Check out the code below.👇 
*/

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers3 = [7, 8, 9];

const result = numbers1.concat(numbers2, numbers3);

console.log("result", result); // [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.customConcat = function () {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(this[i]);
  }
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      temp.push(arguments[i][j]);
    }
  }
  return temp;
};

const resultCustom = numbers1.customConcat(numbers2, numbers3);

console.log("resultCustom", resultCustom); // [1, 2, 3, 4, 5, 6, 7, 8, 9];
