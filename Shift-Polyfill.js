/* 💡"JavaScript-with-JC"
👉Array.prototype.shift and Its Polyfill 
The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

💡Note - It mutates the original array, and returns first element.
👉 One Level Up :- We can create our own custom shift( Polyfill of shift ), Check out the code below.👇 
*/

const numbers = [1, 2, 3, 4, 5];

const result = numbers.shift();

console.log("result", result); // 1
console.log("numbers", numbers); // [ 2, 3, 4, 5 ]

Array.prototype.customShift = function () {
  let array = this;
  let result = array[0];

  for (let i = 0; i < this.length; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return result;
};

const numbersCustom = [1, 2, 3, 4, 5];

const resultCustom = numbersCustom.customShift();

console.log("resultCustom", resultCustom); // 1
console.log("numbersCustom", numbersCustom); // [ 2, 3, 4, 5 ]
