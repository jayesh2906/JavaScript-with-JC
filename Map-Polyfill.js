/* 💡"JavaScript-with-JC"
👉 Array.prototype.map and It's Polyfill 
map is a higher order function in javascript that iterates through 
each element of an array and can modify each element of an array.

💡Example -
const numbers = [1, 2, 3, 4, 5];

const square = (element, index, array) => {
  return element * 2;
};

const doubleNumbers = numbers.map(square);
console.log("doubleNumbers", doubleNumbers); => [2, 4, 6, 8, 10]

💡map function takes callback function as an argument, This Callback takes 3 parameters 
current element, current index and array, Callback function runs for each element of an array

💡Note - map does not mutate the original array, Always returns new copy of a mutated array.

💡Use Cases -
1) displaying list of data in UI.
2) Editing one data from list of data :- Let's take example of editing a todolist
const todos = [
  {
    id: 1,
    task: "Go for Movie",
  },
  {
    id: 2,
    task: "Go to Gym",
  },
  {
    id: 3,
    task: "Play Cricket",
  },
];

If User wants to edit task of id=3, We can simply do

const updatedTodos = todos.map((item, index, arr) =>
  item.id === 3 ? { ...item, task: "Do code" } : item
);

console.log("updatedTodos", updatedTodos);
o/p - updatedTodos [
  { id: 1, task: 'Go for Movie' },
  { id: 2, task: 'Go to Gym' },
  { id: 3, task: 'Do code' }
]

Wait, It's not an end, We can create our own custom map( Polyfill of map ) Check out the code below.  
*/

const numbers = [1, 2, 3, 4, 5];

const square = (element, index, array) => {
  return element * 2;
};

const doubleNumbers = numbers.map(square);
console.log("doubleNumbers", doubleNumbers); // [ 2, 4, 6, 8, 10 ]

// Polyfill of map
Array.prototype.customMap = function (callback) {
  //this is pointing to numbers array here
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};

const doubleNumbersCustom = numbers.customMap(square);
console.log("doubleNumbersCustom", doubleNumbersCustom); // [ 2, 4, 6, 8, 10 ]
