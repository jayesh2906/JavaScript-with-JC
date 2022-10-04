/* 💡"JavaScript-with-JC"
👉Array.prototype.indexOf and Its Polyfill 
The indexOf() method returns the first index at which a given element is found in an array, or -1 if it is not present.

💡Note - It does not mutate the original array, and returns an index or -1.
👉 One Level Up :- We can create our own custom indexOf( Polyfill of indexOf ), Check out the code below.👇 
*/

const numbers = [1, 2, 5, 3, 4, 5, 6];

const result1 = numbers.indexOf(5);
console.log("result1", result1);

const result2 = numbers.indexOf();
console.log("result2", result2);

const result3 = numbers.indexOf(5, 3);
console.log("result3", result3);

const result4 = numbers.indexOf(5, -2);
console.log("result4", result4);

const result5 = numbers.indexOf("5");
console.log("result5", result5);

Array.prototype.customIndexOf = function (value, fromIndex) {
  if (fromIndex === undefined || isNaN(fromIndex)) {
    fromIndex = 0;
  }
  if (fromIndex < 0) {
    fromIndex += this.length;
  }
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === value) {
      return i;
    }
  }
  return -1;
};

const resultCustom1 = numbers.customIndexOf(5);
console.log("resultCustom1", resultCustom1); // 2

const resultCustom2 = numbers.customIndexOf();
console.log("resultCustom2", resultCustom2); // -1

const resultCustom3 = numbers.customIndexOf(5, 3);
console.log("resultCustom3", resultCustom3); // 5

const resultCustom4 = numbers.customIndexOf(5, -2);
console.log("resultCustom4", resultCustom4); // 5

const resultCustom5 = numbers.customIndexOf("5");
console.log("resultCustom5", resultCustom5); // -1
