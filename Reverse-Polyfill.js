/* 💡"JavaScript-with-JC"
👉Array.prototype.reverse and Its Polyfill 
The reverse() method reverses an array and returns the reference to the same array

💡Note - It mutates the original array.
👉 One Level Up :- We can create our own custom reverse( Polyfill of reverse ), Check out the code below.👇 
*/

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reverse();

console.log("result", result); // [ 5, 4, 3, 2, 1 ]
console.log("numbers", numbers); // [ 5, 4, 3, 2, 1 ]

Array.prototype.customReverse = function () {
  let array = this;
  let j = array.length - 1;

  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    j--;
  }

  return array;
};

const numbersCustom = [1, 2, 3, 4, 5];

const resultCustom = numbersCustom.customReverse();

console.log("resultCustom", resultCustom); // [ 5, 4, 3, 2, 1 ]
console.log("numbersCustom", numbersCustom); // [ 5, 4, 3, 2, 1 ]
