/* 💡"JavaScript-with-JC"
👉Array.prototype.unshift and Its Polyfill 
The unshift() method adds n number of elements to the beginning of an array and returns the new length of the array.

💡Note - It mutates the original array, and returns new length array.
👉 One Level Up :- We can create our own custom unshift( Polyfill of unshift ), Check out the code below.👇 
*/

const numbers = [1, 2, 3, 4, 5];

const result = numbers.unshift("88", "99");

console.log("result", result); // 7
console.log("numbers", numbers); // ["88", "99", 1, 2, 3, 4, 5];

Array.prototype.customUnshift = function () {
  let array = this;
  let temp = [];

  for (let i = 0; i < array.length; i++) {
    temp.push(array[i]);
  }

  const arrLength = arguments.length + array.length;

  for (i = 0; i < arrLength; i++) {
    if (arguments[i]) {
      array[i] = arguments[i];
    } else {
      array[i] = temp[i - arguments.length];
    }
  }

  return arrLength;
};

const numbersCustom = [1, 2, 3, 4, 5];

const resultCustom = numbersCustom.customUnshift("88", "99");

console.log("resultCustom", resultCustom); // 7
console.log("numbersCustom", numbersCustom); // ["88", "99", 1, 2, 3, 4, 5];
