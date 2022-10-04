/* 💡"JavaScript-with-JC"
👉Array.prototype.findIndex and Its Polyfill 
The findIndex() method returns the index of the first element in an array that satisfies the provided callback function. 
If no elements satisfy the callback function, -1 is returned.

💡Note - It does not mutate the original array, and returns an index or -1.
👉 One Level Up :- We can create our own custom findIndex( Polyfill of findIndex ), Check out the code below.👇 
*/

const numbers = [1, 2, 5, 3, 4, 5, 6];

const valueEqualto5 = (value, index, array) => {
  return value === 5;
};

const valueEqualto8 = (value, index, array) => {
  return value === 8;
};

const result1 = numbers.findIndex(valueEqualto5);
console.log("result1", result1); // 2

const result2 = numbers.findIndex(valueEqualto8);
console.log("result2", result2); // -1

Array.prototype.customFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

const resultCustom1 = numbers.customFindIndex(valueEqualto5);
console.log("resultCustom1", resultCustom1); // 2

const resultCustom2 = numbers.customFindIndex(valueEqualto8);
console.log("resultCustom2", resultCustom2); // -1
