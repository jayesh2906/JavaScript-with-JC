/* 💡"JavaScript-with-JC"
👉 Reduce method is one of the most powerful method in javascript, Let's check the power of reduce method, We can re-implement most of 
the javascript array methods using only reduce method. let's re-build forEach(), some(), find() and every() method using reduce. 
*/

// 👉 1) Implementation of forEach() using reduce method

const numbers = [1, 2, 3, 4, 5];

const display = (value, index, array) => {
  console.log(value);
};

numbers.forEach(display);

// let's re-build forEach using reduce this time 👇

numbers.reduce((acc, curr, index, array) => {
  display(curr, index, array);
}, undefined);

// -------------------------------------------------------------------

// 👉 2) Implementation of some() using reduce method

const someNumbers = [1, 2, 3, 4, 5, 6];

const isGreaterThan5 = (value, index, array) => {
  return value > 5;
};

const someResult = someNumbers.some(isGreaterThan5);
console.log("someResult", someResult); // true

// let's re-build some using reduce this time 👇

const reduceSomeResult = someNumbers.reduce((acc, curr, index, array) => {
  if (isGreaterThan5(curr, index, array)) {
    acc = true;
  }
  return acc;
}, false);
console.log("reduceSomeResult", reduceSomeResult); // true

// -------------------------------------------------------------------

// 👉 3) Implementation of find() using reduce method

const findNumbers = [2, 4, 5, 6, 7, 9];

const isOddNumber = (number, index, array) => {
  if (number % 2) {
    return true;
  }
  return false;
};

const findFirstOdd = findNumbers.find(isOddNumber);
console.log(findFirstOdd); // 5

// let's re-build some using reduce this time 👇

let found = false;
const reduceFindFirstOdd = findNumbers.reduce((acc, curr, index, array) => {
  if (isOddNumber(curr, index, array) && !found) {
    acc = curr;
    found = true;
  }
  return acc;
}, undefined);
console.log(reduceFindFirstOdd); // 5

// 👉 4) Implementation of every() using reduce method

const everyNumbers = [11, 12, 13, 14, 15];

const everyResult = everyNumbers.every(isGreaterThan5);
console.log("everyResult", everyResult); // true

// let's re-build every using reduce this time 👇

const reduceEveryResult = everyNumbers.reduce((acc, curr, index, array) => {
  if (!isGreaterThan5(curr, index, array)) {
    acc = false;
  }
  return acc;
}, true);
console.log("reduceEveryResult", reduceEveryResult); // true
