/* 💡"JavaScript-with-JC" 
👉 Implementation of map method using reduce. 
*/

// array of numbers
const numbers = [1, 2, 3, 4, 5];

const doubleNumber = (value, index, array) => {
  return value * 2;
};

const result = numbers.map(doubleNumber);
console.log("result", result);

// Implementation of map using reduce method
const reduceResult = numbers.reduce((acc, curr, index, array) => {
  acc.push(doubleNumber(curr, index, array));
  return acc;
}, []);

console.log("reduceResult", reduceResult);

console.log("--------------------------------------------------------");

// array of objects
const todos = [
  { id: 1, todo: "Morning Walk" },
  { id: 2, todo: "Go to Office" },
  { id: 3, todo: "Watch Netflix" },
  { id: 4, todo: "Go to Gym" },
  { id: 5, todo: "Go for Movie" },
];

const addStatus = (todoItem, index, array) => {
  return { ...todoItem, status: "completed" };
};

const resultTodos = todos.map(addStatus);
console.log("resultTodos", resultTodos);

// Implementation of map using reduce method
const reduceResultTodos = todos.reduce((acc, curr, index, array) => {
  acc.push(addStatus(curr, index, array));
  return acc;
}, []);
console.log("reduceResultTodos", reduceResultTodos);
