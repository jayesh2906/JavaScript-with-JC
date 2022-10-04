/* 💡"JavaScript-with-JC" 
👉 Implementation of filter method using reduce. 
*/

// array of numbers
const numbers = [1, 2, 3, 4, 5, 6];

const isOddNumber = (element, index, array) => {
  if (element % 2) {
    return true;
  }
  return false;
};

const oddNumbers = numbers.filter(isOddNumber);
console.log("oddNumbers", oddNumbers); // [ 1, 3, 5 ]

// Implementation of filter using reduce method
const reduceOddNumbers = numbers.reduce((acc, curr, index, array) => {
  if (isOddNumber(curr, index, array)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log("reduceOddNumbers", reduceOddNumbers); // [ 1, 3, 5 ]

console.log("--------------------------------------------------------");

// array of objects
const todos = [
  { id: 1, todo: "Morning Walk" },
  { id: 2, todo: "Go to Office" },
  { id: 3, todo: "Watch Netflix" },
  { id: 4, todo: "Go to Gym" },
  { id: 5, todo: "Go for Movie" },
];

const filterTodo = (todoItem, index, array) => {
  return todoItem.id !== 2;
};

const resultTodos = todos.filter(filterTodo);
console.log("resultTodos", resultTodos);

// Implementation of filter using reduce method
const reduceResultTodos = todos.reduce((acc, curr, index, array) => {
  if (filterTodo(curr, index, array)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log("reduceResultTodos", reduceResultTodos);
