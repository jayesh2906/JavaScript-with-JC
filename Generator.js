/* 💡"JavaScript-with-JC"
👉 Generator  
Generator is a function that can be paused and resumed from where it was paused. It is written as the function keyword followed by an asterisk (*).
Generator returns a Generator object that is used by calling the next method.

💡 Use cases :-
👉 1) Creating Infinite loop ( generating unique Id ).
👉 2) Iterators ( looping through an array ).
👉 3) Handling promises using async generator.
👉 4) State management using Redux Saga.
*/

// simple Example
function simpleExample() {
  function* getNumbers() {
    yield 1;
    yield 2;
    yield 3;
  }

  const numberObject = getNumbers();
  const first = numberObject.next();
  const second = numberObject.next();
  const third = numberObject.next();
  const fourth = numberObject.next();

  console.log(first); // { value: 1, done: false }
  console.log(second); // { value: 2, done: false }
  console.log(third); // { value: 3, done: false }
  console.log(fourth); // { value: undefined, done: true }
}
// simpleExample();

// Use cases :-
// 1) Creating Infinite loop ( generating unique Id )
function infiniteLoop() {
  function* generateId() {
    let id = 1;
    while (true) {
      yield id++;
    }
  }

  const uniqueId = generateId();
  console.log(uniqueId.next().value); // 1
  console.log(uniqueId.next().value); // 2
  console.log(uniqueId.next().value); // 3
  console.log(uniqueId.next().value); // 4
  console.log(uniqueId.next().value); // 5 => infinite loop

  // passing value to next
  function passValuetoNext() {
    function* generateId() {
      let id = 1;
      while (true) {
        const increment = yield id;
        if (increment != null) {
          id += increment;
        } else {
          id++;
        }
      }
    }

    const uniqueId = generateId();
    console.log(uniqueId.next().value); // 1
    console.log(uniqueId.next().value); // 2
    console.log(uniqueId.next(5).value); // 7
    console.log(uniqueId.next().value); // 8
    console.log(uniqueId.next().value); // 9 => infinite loop
  }
  passValuetoNext();
}
// infiniteLoop()

// 2) Iterators ( looping through an array )
function iterators() {
  function* arrayIterator(array) {
    for (let i = 0; i < array.length; i++) {
      yield array[i];
    }
  }

  const arrayItem = arrayIterator([11, 22, 33, 44]);
  console.log(arrayItem.next().value); // 11
  console.log(arrayItem.next().value); // 22
  console.log(arrayItem.next().value); // 33
  console.log(arrayItem.next().value); // 44
}
// iterators();

// 3) Handling promises using async generator
const taskOne = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First task resolved");
    }, 1000);
  });
};

const taskTwo = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second task resolved");
    }, 1000);
  });
};

const taskThree = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Third task resolved");
    }, 1000);
  });
};

async function* generateTasks() {
  yield await taskOne();
  yield await taskTwo();
  yield await taskThree();
}

// using then and catch
const tasks = generateTasks();
tasks
  .next()
  .then((response) => {
    console.log(response); // { value: 'First task resolved', done: false }
  })
  .catch((error) => console.log(error));

tasks
  .next()
  .then((response) => {
    console.log(response); // { value: 'Second task resolved', done: false }
  })
  .catch((error) => console.log(error));

tasks
  .next()
  .then((response) => {
    console.log(response); // { value: 'Third task resolved', done: false }
  })
  .catch((error) => console.log(error));

// More cleaner way
async function doTasks() {
  const tasks = generateTasks();
  for await (let result of tasks) {
    console.log(result);
  }
}
doTasks().catch((error) => {
  console.log("error", error);
});

/* Output
First task resolved
Second task resolved
Third task resolved 
*/
