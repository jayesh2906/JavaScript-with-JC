/* 💡"JavaScript-with-JC"
👉Array.prototype.join and Its Polyfill 
The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. 

💡Note - It does not mutate the original array, and returns a string value. 
If the array has only one item, then that item will be returned without using the separator.

👉 One Level Up :- We can create our own custom join( Polyfill of join ), Check out the code below.👇 
*/

const names = ["jay", "sam", "john"];

const result = names?.join();
console.log("result", result);

const result1 = names?.join("");
console.log("result1", result1);

const result2 = names?.join(" ");
console.log("result2", result2);

const result3 = names?.join("-");
console.log("result3", result3);

console.log("------------------------------");

Array.prototype.customJoin = function (separator) {
  let resultString = "";
  if (!this?.length) {
    return resultString;
  }
  if (separator === undefined) {
    separator = ",";
  }
  resultString = this[0];
  for (let i = 1; i < this.length; i++) {
    resultString = resultString + separator + this[i];
  }
  return resultString;
};

const resultCustom = names?.customJoin();
console.log("resultCustom", resultCustom); // jay,sam,john

const resultCustom1 = names?.customJoin("");
console.log("resultCustom1", resultCustom1); // jaysamjohn

const resultCustom2 = names?.customJoin(" ");
console.log("resultCustom2", resultCustom2); // jay sam john

const resultCustom3 = names?.customJoin("-");
console.log("resultCustom3", resultCustom3); // jay-sam-john
