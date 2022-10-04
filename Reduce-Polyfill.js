/* 💡"JavaScript-with-JC"
👉Array.prototype.reduce and Its Polyfill 
Array.prototype.reduce is a higher order function that iterates through each value of an array and reduces array of values into single value.

💡Example -
const numbers = [1, 2, 3, 4, 5, 6];

const summation = (acc, curr, index, array) => {
  acc = acc + curr;
  return acc;
};

💡With initial value as second argument (callback loops for n times)
accumulator takes initial value, and current takes first value of an array 👇

const sumOfNumbers = numbers.reduce(summation, 0); 
console.log(sumOfNumbers) => 21

💡Without initial value as second argument (callback loops for (n-1) times)
accumulator takes first value of an array, and current takes second value of an array 👇

const sumOfNumbers = numbers.reduce(summation);
console.log(sumOfNumbers) => 21

💡reduce function takes callback function and initial value as an argument, This Callback takes 4 parameters 
accumulator, current element, current index and array, Callback function runs for each element of an array

💡Note - reduce does not mutate the original array, Always returns reduced single value.

💡Use Cases -
👉 1) Calculation of total bill of user cart 👇

const shipping = 99;
const cart = [
  { itemName: "Nike Shoes Black", price: 3499 },
  { itemName: "U.S Polo Shirt Black", price: 2399 },
  { itemName: "U.S Polo Trouser Gray", price: 3199 },
];

const bill = cart.customReduce((total, item, index, array) => {
  total = total + item.price;
  return total;
}, shipping);
console.log(bill); => 9196 Rs

👉 2) Removing duplicated values in an array 👇

const DuplicateNumbers = [1, 1, 2, 2, 3, 4, 5, 1];

const DuplicatesRemoved = DuplicateNumbers.reduce(
  (acc, curr, index, arr) => (acc.includes(curr) ? acc : [...acc, curr]),
  []
);

console.log(DuplicatesRemoved); => [ 1, 2, 3, 4, 5 ]

👉 3) Counting occurrences of items in an array 👇

const names = ["Jayesh", "John", "Sam", "Sam", "Jayesh", "Jayesh"];

const nameOccurrences = names.reduce((acc, currName) => {
  return {
    ...acc,
    [currName]: (acc[currName] || 0) + 1,
  };
}, {});

console.log(nameOccurrences);
// o/p { Jayesh: 3, John: 1, Sam: 2 }

👉 One Level Up :- We can create our own custom reduce( Polyfill of reduce ), Check out the below code. 
*/

const numbers = [1, 2, 3, 4, 5, 6];

const summation = (acc, curr, index, array) => {
  acc = acc + curr;
  return acc;
};

const total = numbers.reduce(summation);
console.log("total", total); //21

// Polyfill of reduce
Array.prototype.customReduce = function (callback, initial) {
  let result = initial;

  // this is pointing to numbers array here,
  // If initial value is not passed then callback skips first iteration as initial value is undefined.
  for (let i = 0; i < this.length; i++) {
    result =
      result !== undefined ? callback(result, this[i], i, this) : this[i];
  }
  return result;
};

const totalCustom = numbers.customReduce(summation, 0);
console.log("totalCustom", totalCustom); // 21
