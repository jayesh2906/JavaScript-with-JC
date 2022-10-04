/* 💡"JavaScript-with-JC"
👉Array.prototype.lastIndexOf and Its Polyfill 
The lastIndexOf() method returns the last index at which a given element is found in an array, or -1 if it is not present, array is searched backwards, starting at fromIndex.

💡Note - It does not mutate the original array, and returns an index or -1.
👉 One Level Up :- We can create our own custom lastIndexOf( Polyfill of lastIndexOf ), Check out the code below.👇 
*/

const numbers = [1, 2, 5, 3, 4, 5, 6];

const result1 = numbers.lastIndexOf(5);
console.log("result1", result1);

const result2 = numbers.lastIndexOf();
console.log("result2", result2);

const result3 = numbers.lastIndexOf(5, 1);
console.log("result3", result3);

const result4 = numbers.lastIndexOf(5, -2);
console.log("result4", result4);

const result5 = numbers.lastIndexOf("5");
console.log("result5", result5);

Array.prototype.customLastIndexOf = function (value, fromIndex) {
  if (fromIndex === undefined) {
    fromIndex = this.length - 1;
  }
  if (isNaN(fromIndex)) {
    return -1;
  }
  if (fromIndex < 0) {
    fromIndex += this.length;
  }
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === value) {
      return i;
    }
  }
  return -1;
};

const resultCustom1 = numbers.customLastIndexOf(5);
console.log("resultCustom1", resultCustom1); // 5

const resultCustom2 = numbers.customLastIndexOf();
console.log("resultCustom2", resultCustom2); // -1

const resultCustom3 = numbers.customLastIndexOf(5, 1);
console.log("resultCustom3", resultCustom3); // -1

const resultCustom4 = numbers.customLastIndexOf(5, -2);
console.log("resultCustom4", resultCustom4); // 5

const resultCustom5 = numbers.customLastIndexOf("5");
console.log("resultCustom5", resultCustom5); // -1
