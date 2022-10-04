/* 💡"JavaScript-with-JC" 
👉Array.prototype.splice and Its Polyfill 
Array.prototype.splice modifies an original array and returns deleted values array.

💡splice method takes (start, howManyDelete, newAdd1, newAdd2, newAddN), If no argument  is passed then original array remains as it is and it returns an empty array [].

positive index =>  0  1  2
💡for an array = [10,20,30]  
negative index => -3 -2 -1

💡Example -
👉 CASE 1 :- (start index is positive)

const numbers = [10, 11, 12, 13, 14, 15];

const deletedNumbers = numbers.splice(1, 3, 77, 88, 99);
here, startIndex = 1, deleteCount = 3, addNewValue = [77,88,99]

console.log(numbers); [ 10, 77, 88, 99, 14, 15 ]
console.log(deletedNumbers); [ 11, 12, 13 ]

👉 CASE 2 :- (start index is negative)

const numbers = [10, 11, 12, 13, 14, 15];

const deletedNumbers = numbers.splice(-4, 3, 77, 88, 99);
here, startIndex = -4, deleteCount = 3, addNewValue = [77,88,99]

console.log(numbers); [ 10, 11, 77, 88, 99, 15 ]
console.log(deletedNumbers); [ 12, 13, 14 ]
 
💡Note - splice mutates the original array, and returns deleted values array.

💡Use Case -
👉 deleting a data from list of data
Let's take example of deleting a todo from todolist 👇

const todos = [
  { id: 1, todo: "Morning Walk" },
  { id: 2, todo: "Go to Office" },
  { id: 3, todo: "Go to Gym" },
  { id: 4, todo: "Watch Netflix" },
];

const deleteId = 2;
const findIndex = todos.findIndex(({ id }) => id === deleteId);

todos.splice(findIndex, 1);

console.log(todos);
output 👇
[
  { id: 1, todo: 'Morning Walk' },
  { id: 3, todo: 'Go to Gym' },
  { id: 4, todo: 'Watch Netflix' }
]

👉 One Level Up :- We can create our own custom splice( Polyfill of splice ), Check out the code below.👇 
*/

const numbers = [10, 11, 12, 13, 14, 15];

const deletedNumbers = numbers.splice(2, 3, 77, 88);

console.log("numbers", numbers);
console.log("deletedNumbers", deletedNumbers);

Array.prototype.customSplice = function (start, deleteCount) {
  let array = this;

  if (start !== undefined && deleteCount === undefined) {
    deleteCount = array.length;
  }
  start = Number(start);
  if (start < 0) {
    start = array.length + start;
  }
  if (isNaN(start)) {
    start = 0;
  }
  if (isNaN(deleteCount) || deleteCount < 0) {
    deleteCount = 0;
  }

  let end = start + Number(deleteCount);

  let valuesBeforeStart = [];
  let SplicedArray = [];
  let valuesAfterSplice = [];

  for (let i = 0; i < array.length; i++) {
    if (i < start) {
      valuesBeforeStart.push(array[i]);
    }
    if (i >= start && i < end) {
      SplicedArray.push(array[i]);
    }
    if (i >= end && i < array.length) {
      valuesAfterSplice.push(array[i]);
    }
  }

  for (let i = 2; i < arguments.length; i++) {
    valuesBeforeStart.push(arguments[i]);
  }

  let result = valuesBeforeStart.concat(valuesAfterSplice);
  let len = Math.max(array.length, result.length);

  for (i = 0; i < len; i++) {
    if (result.length > i) {
      array[i] = result[i];
    } else {
      array.pop();
    }
  }
  return SplicedArray;
};

const customNumbers = [10, 11, 12, 13, 14, 15];

const deletedCustomNums = customNumbers.customSplice(2, 3, 77, 88);

console.log(customNumbers); // [10, 11, 77, 88, 15]
console.log(deletedCustomNums); // [12, 13, 14]
