/* 💡"JavaScript-with-JC"
👉Array.prototype.find and Its Polyfill 
Array.prototype.find is a higher order function that returns the first element in the an array that satisfies the condition of provided callback function and 
if no values satisfy the condition of callback then returns undefined.

💡Example -
const numbers = [2, 4, 5, 6, 7, 9];

const isOddNumber = (number, index, array) => {
  if (number % 2) {
    return true;
  }
  return false;
};

const findFirstOdd = numbers.find(isOddNumber);
console.log(findFirstOdd); => 5

💡find function takes callback function as an argument, This Callback takes 3 parameters 
current element, current index and array, Callback function runs until the condition gets satisfy.

💡Note - find does not mutate the original array, and returns found value or undefined.

💡find Vs filter -
👉 1) find returns only first found value whereas filter returns an array of filtered values.
    Let's take an example 👇

    const numbers = [2, 4, 5, 6, 7, 6];

    const isGreaterThan5 = (number, index, array) => {
    if (number > 5) {
        return true;
    }
    return false;
    };

    const findResult = numbers.find(isGreaterThan5);
    console.log(findResult); => 6 (returns value)

    const filterResult = numbers.filter(isGreaterThan5);
    console.log(filterResult); 
    // o/p [ 6, 7, 6] (returns array of values)


👉 2) callback function passed to filter executes for each value of an array (n times) whereas in case of find, 
callback executes until the first value is found and does not execute for the remaining values in the array.

👉 3) If no value matches, find method returns undefined whereas filter method returns empty array [].

💡Use Case -
👉 Finding selected item details 👇

const cart = [
  { id: 1, item: "Nike Shoe Black", price: 3499 },
  { id: 2, item: "U.S Polo Shirt Black", price: 2399 },
  { id: 3, item: "U.S Polo Trouser Gray", price: 3199 },
];

const getItemDetails = (itemiId) => {
  const findShoe = cart.find(({ id }) => id === itemiId);
  console.log(findShoe);
};

getItemDetails(1);
// o/p { id: 1, item: 'Nike Shoe Black', price: 3499 }
 
👉 One Level Up :- We can create our own custom find( Polyfill of find ), Check out code below.👇 
*/

const numbers = [2, 4, 5, 6, 7, 9];

const isOddNumber = (number, index, array) => {
  if (number % 2) {
    return true;
  }
  return false;
};

const findFirstOdd = numbers.find(isOddNumber);
console.log(findFirstOdd); // 5

// 👉 Polyfill of find
Array.prototype.customFind = function (callback) {
  // 👉 this is pointing to numbers array here
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

const findFirstOddCustom = numbers.customFind(isOddNumber);
console.log(findFirstOddCustom); // 5
