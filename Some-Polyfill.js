/* 💡"JavaScript-with-JC"
👉Array.prototype.some and Its Polyfill 
The some() method tests whether at least one element in the array passes the test implemented by the provided callback function.

💡Note - It does not mutate the original array, and returns a Boolean value.
👉 One Level Up :- We can create our own custom some( Polyfill of some ), Check out the code below.👇 
*/

const numbers = [1, 2, 3, 4, 5, 6];

const isGreaterThan5 = (value, index, array) => {
  return value > 5;
};

const result = numbers.some(isGreaterThan5);
console.log("result", result); // true

Array.prototype.customSome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const resultCustom = numbers.customSome(isGreaterThan5);
console.log("resultCustom", resultCustom); // true
