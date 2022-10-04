/* 💡"JavaScript-with-JC"
👉 Closures, Function along with it's lexical scope bundled together to form a closure.
In simple words, Each and every function in javascript has access to its outer function's scope. 
Inner function can access all the variables and functions of it's outer function 
even after the execution context of outer function has been completely removed from the call stack.  
*/

// 💡Example -
const outer = () => {
  var a = 99;
  const inner = () => {
    console.log(a);
  };
  return inner;
};

console.log(outer()); // [Function: inner]
const getInner = outer(); // In this line, execution context of
// outer function will be deleted from callstack.
getInner(); // 99 => Even after outer fn is completely removed,
// inner fn has access to it's varaiable a here.

// 💡Uses of Closures
// 1) Memoization 👇
// Memoizing the result of the function and if later the same function is called with same arguments
// then return memoized result instead of executing whole function again

const memoizedMultiplyBy100 = () => {
  const cache = {};

  return (num) => {
    if (cache[num]) {
      return cache[num];
    }
    const result = num * 100;
    cache[num] = result;
    return result;
  };
};

// Here, inner return function has access to cache object of outer function

const multiplyBy100 = memoizedMultiplyBy100();

console.log(multiplyBy100(1)); // 100
console.log(multiplyBy100(2)); // 200
console.log(multiplyBy100(3)); // 300
console.log(multiplyBy100(4)); // 400
console.log(multiplyBy100(2)); // 200

// 2) Module Design Pattern 👇
// All the members and methods of a particular module should be encapsulated together to maintain the well-structured code

const todosModule = (() => {
  let todos = ["office", "gym", "party", "drive"];

  const getTodos = () => {
    return todos;
  };

  const addTodo = (newTodo) => {
    todos.push(newTodo);
    return todos;
  };

  const deleteTodo = (todoName) => {
    const findIndex = todos.indexOf(todoName);
    todos.splice(findIndex, 1);
    return todos;
  };

  return {
    getTodos,
    addTodo,
    deleteTodo,
  };
})();

// console.log(todos); // todos is not defined
console.log(todosModule.getTodos());
// [ 'office', 'gym', 'party', 'drive' ]
console.log(todosModule.addTodo("sleep"));
// [ 'office', 'gym', 'party', 'drive', 'sleep' ]
console.log(todosModule.deleteTodo("gym"));
// [ 'office', 'party', 'drive', 'sleep' ]

// 3) Famous setTimeout question  👇

(() => {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
})();
// this will print 5(0th sec) 5(1st sec) 5(2nd sec) 5(3rd sec) 5(4th sec)

// Now, Let's use closure to get expected output, we need to just wrap the setTimeout in function
// outer function wrapper will take different arguments each time from 0 to 4,
// and because of closure, inner setTimeout will points to different i( from 0 to 4 )

(() => {
  for (var i = 0; i < 5; i++) {
    const wrapper = (i) => {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    };
    wrapper(i);
  }
})();
// this will print 0(0th sec) 1(1st sec) 2(2nd sec) 3(3rd sec) 4(4th sec)

// 💡Advantages of Closures

// 1) Data hiding, Encapsulation, variables can not be access or modified directly from outside the functions 👇
function Person() {
  var name = "Jay";

  this.getName = () => {
    return name;
  };

  this.setName = () => {
    name = "Jc";
  };
}

const jayesh = new Person();
// console.log(name); // name is not defined
console.log(jayesh.getName()); // Jay
jayesh.setName();
console.log(jayesh.getName()); // Jc

// 💡Disadvantages of Closures

// 👉 Overconsumption of memory.
// 👉 Variables are not Garbage collected.
// 👉 Memory leaks.
