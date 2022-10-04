/* 💡"JavaScript-with-JC"
👉Array.prototype.includes and Its Polyfill 
The includes() method determines whether an array includes a certain value among its entries, returning true or false.

💡Note - It does not mutate the original array, and returns a Boolean value.
👉 One Level Up :- We can create our own custom includes( Polyfill of includes ), Check out the code below.👇 
*/

const numbers = [1, 2, 5, 3, 4, 5, 6];

const result1 = numbers.includes(5);
console.log("result1", result1);

const result2 = numbers.includes();
console.log("result2", result2);

const result3 = numbers.includes(5, 6);
console.log("result3", result3);

const result4 = numbers.includes(5, -3);
console.log("result4", result4);

const result5 = numbers.includes("5");
console.log("result5", result5);

Array.prototype.customIncludes = function (value, fromIndex) {
  if (fromIndex === undefined || isNaN(fromIndex)) {
    fromIndex = 0;
  }
  if (fromIndex < 0) {
    fromIndex += this.length;
  }
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === value) {
      return true;
    }
  }
  return false;
};

const resultCustom1 = numbers.customIncludes(5);
console.log("resultCustom1", resultCustom1); // true

const resultCustom2 = numbers.customIncludes();
console.log("resultCustom2", resultCustom2); // false

const resultCustom3 = numbers.customIncludes(5, 6);
console.log("resultCustom3", resultCustom3); // false

const resultCustom4 = numbers.customIncludes(5, -2);
console.log("resultCustom4", resultCustom4); // true

const resultCustom5 = numbers.customIncludes("5");
console.log("resultCustom5", resultCustom5); // false
