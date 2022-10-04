/* 💡"JavaScript-with-JC"
👉 Array.prototype.every and Its Polyfill 
The every() method tests whether all elements in an array pass the test implemented by the provided callback function. 

💡 Note - It does not mutate the original array, and returns a Boolean value.
👉 One Level Up :- We can create our own custom every( Polyfill of every ), Check out the code below.👇 
*/

const numbers = [1, 2, 3, 4, 5, 6];

const isGreaterThan5 = (value, index, array) => {
  return value > 5;
};

const result = numbers.every(isGreaterThan5);
console.log("result", result); // false

Array.prototype.customEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const resultCustom = numbers.customEvery(isGreaterThan5);
console.log("resultCustom", resultCustom); // false
