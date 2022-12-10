/* 💡"JavaScript-with-JC" - Guess the Output? */

// 👉 MCQ-1
function MCQ1() {
  const person = {
    name: "Jayesh",
    displayName1: function () {
      console.log("name1", this.name);
    },
    displayName2: () => {
      console.log("name2", this.name);
    },
  };
  person.displayName1();
  person.displayName2();

  // 👍A) name1 Jayesh , name2 Jayesh
  // 💡B) name1 Jayesh , name2 undefined
  // 💖C) name1 Jayesh , name2
  // 😀D) name1 , name2 Jayesh

  /* 
  In window browser answer is C) name1 Jayesh , name2 because arrow function inherits "this" from its outer function where "this" is window.
  and window has by default property name that is used for setting or returning the name of a window and in above case window.name is empty string.
  
  In other compilers answer is B) name1 Jayesh , name2 undefined because arrow function inherits "this" from its outer function where "this" refers to global object.
  */
}
// MCQ1();

// 👉 MCQ-2
function MCQ2() {
  let name = "Jayesh";
  function printName() {
    if (name === "Jayesh") {
      let name = "JC";
      console.log(name);
    }
    console.log(name);
  }
  printName();

  // 👍A) Jayesh     💡B) Jayesh, JC
  // 💖C) JC, JC     😀D) JC, Jayesh

  /* Answer is D) JC, Jayesh because let variables are block scope, name inside if condition will shadow outer name*/
}
// MCQ2();

// 👉 MCQ-3
function MCQ3() {
  var player = "Virat";
  function displayPlayer() {
    if (player === "Virat") {
      var player = "VK";
      console.log(player);
    }
    console.log(player);
  }
  displayPlayer();

  // 👍A) VK, Virat    💡B) VK, VK
  // 💖C) undefined    😀D) VK, undefined

  /* 
   Answer is C) undefined because var variables are functional scope, When displayPlayer fn starts executing, Execution context of
   displayPlayer will be created in callstack and at the memory creation phase var variable player is initialized as undefined. 
   hence if condition will become false and It will print only undefined.
  */
}
// MCQ3();

// 👉 MCQ-4
function MCQ4() {
  const person = {
    name: "Jayesh",
    age: 24,
  };

  const getAge = person.age;
  delete person.age;

  console.log(person);
  console.log(getAge);

  // 👍A) { name: 'Jayesh', age: 24 }, null
  // 💡B) { name: 'Jayesh' }, 24
  // 💖C) { name: 'Jayesh' }, undefined
  // 😀D) { name: 'Jayesh', age: 24 }, 24

  /*
  Answer is B) { name: 'Jayesh' }, 24 because delete keyword deletes property of an object and we are setting getAge as pass by value.
 */
}
// MCQ4();

// 👉 MCQ-5
function MCQ5() {
  // No Strict Mode
  name = "Jayesh"; // window.name ( property of window object )
  console.log(delete name);

  const displayName = (function (name) {
    console.log(delete name); // Local variable of function
    return name;
  })("JC");

  console.log(displayName);

  // 👍A) true, false, JC
  // 💡B) true, true, undefined
  // 💖C) false, false, JC
  // 😀D) false, true, undefined

  /*
  Answer is A) true, false, JC because delete keyword deletes only property of an object. 
  delete keyword can not delete local variables ( declared with var, let, and const ) and functions. 
  delete keyword can delete global variables as they are property of window object.
 */
}
// MCQ5();

// 👉 MCQ-6
function MCQ6() {
  const arr = [];

  for (var i = 0; i < 5; i++) {
    arr[i] = function () {
      return i;
    };
  }

  console.log(arr[0]());
  console.log(arr[4]());

  // 👍A) 0, 4     💡B) 4, 4
  // 💖C) 5, 5     😀D) TypeError

  /*
  Answer is C) 5, 5 because variables declared with var keyword are function-scoped or globally-scoped but not blocked scoped. 
  Inner function will form the closure and points to the updated value of i that is 5. 
  In the case of Let variable, as they are blocked scoped so inner function will hold different values of i from 0 to 4.
 */

  /* 👇 In the case of Let variable */
  const arrBlock = [];

  for (let i = 0; i < 5; i++) {
    arrBlock[i] = function () {
      return i;
    };
  }

  console.log(arrBlock[0]()); // 0
  console.log(arrBlock[4]()); // 4
}
// MCQ6();

// 👉 MCQ-7
function MCQ7() {
  let person = { name: "Jayesh" };
  const personArray = [person];
  person = null;
  console.log(personArray);

  personArray = [];
  console.log(personArray);

  // 👍A) [ { name: "Jayesh" } ], []
  // 💡B) [ { name: "Jayesh" } ] , TyperError
  // 💖C) [ null ], TypeError
  // 😀D) [ {} ], []

  /*
  Answer is B) [ { name: "Jayesh" } ] , TyperError because person = null will only disconnect the person variable from value { name: "Jayesh"} which is stored in memory, personArray[0] will still point to same value { name: "Jayesh"}.
  and personArray = [] at this line TyperError as const variable can't be redeclared and throws Uncaught TypeError: Assignment to constant variable.  
 */
}
// MCQ7();

// 👉 MCQ-8
function MCQ8() {
  const value = { number: 10 };

  const addition = (x = { ...value }) => {
    console.log((x.number += 5));
  };

  addition();
  addition();
  addition(value);
  addition(value);

  // 👍A) 15, 20, 25, 30    💡B) 15, 15, 20, 25
  // 💖C) 15, 15, 15, 15    😀D) 15, 15, 15, 20

  /*
  Answer is D) 15, 15, 15, 20 because when we call addition function 3rd time with passing value object as an argument, then x will take value as pass by reference and will update number property of original object ( value in this case ) to 15.  
  Hence, while calling addition function 4th time will console 15 + 5 => 20.
 */
}
// MCQ8();

// 👉 MCQ-9
function MCQ9() {
  function makePerson() {
    return {
      userName: "Jayesh",
      ref: this,
    };
  }

  const person = makePerson();
  console.log(person.ref.userName);

  // 👍A) Jayesh      💡B) ""
  // 💖C) undefined   😀D) TypeError

  /*
  Answer is C) undefined because "this" keyword in makePerson function will refer to the window object,
  person.ref.userName is same as Window.userName and no property named with userName is present in window object, Hence It will console undefined.
 */

  // 👇 We can get "Jayesh" as an output by doing small change in above question :-
  function makePerson2() {
    return {
      userName: "Jayesh",
      // 👇 Here, We have assigned a function to ref property of an object, and function's "this" will point to the returned object.
      ref: function () {
        return this;
      },
    };
  }

  const person2 = makePerson2();
  console.log(person2.ref().userName); // Jayesh
}
// MCQ9();

// 👉 MCQ-10
function MCQ10() {
  const user = {
    userName: "Jayesh",
    displayName: function () {
      console.log(this.userName);
    },
  };

  setTimeout(user.displayName, 1000);

  // 👍A) Jayesh     💡B) undefined
  // 💖C) ""         😀D) TypeError

  /*
  Answer is B) undefined because setTimeout is using user.displayName as a callback function rather than object method.
  callback function's "this" will refer to the window object and It will console undefined as there is no property such as userName in the window object.   
  */

  // 👇 We can get "Jayesh" as an output by wrapping the user.displayName() inside a function :-

  setTimeout(function () {
    user.displayName(); // Here, displayName is called by user object ( object method ). Hence, "this" will refer to user object.
  }, 1000);
}
// MCQ10();

// 👉 MCQ-11
function MCQ11() {
  const series = { name: "JavaScript-with-JC" };

  function getSatus(postNumber) {
    return `${this.name} 🌟 ${postNumber}`;
  }

  console.log(getSatus.call(series, 50));
  console.log(getSatus.bind(series, 50));

  // 👍A) JavaScript-with-JC 🌟 50, undefined
  // 💡B) JavaScript-with-JC 🌟 50, JavaScript-with-JC 🌟 50
  // 💖C) JavaScript-with-JC 🌟 50, [Function: bound getSatus]
  // 😀D) JavaScript-with-JC 🌟 50, TypeError

  /*
  Answer is C) JavaScript-with-JC 🌟 50, [Function: bound getSatus] because call, apply and bind methods are used for function borrowing in JavaScript.   
  The call method immediately invokes the borrowed function where as bind method does not invoke the borrowed function immediately, bind method returns a copy of borrowed function
  that can be called later on with or without passing new arguments to it.
  */

  // 👇 We can get 'JavaScript-with-JC 🌟 50, JavaScript-with-JC 🌟 50' as an output by calling borrowed function of bind method :-

  console.log(getSatus.call(series, 50)); // JavaScript-with-JC 🌟 50
  console.log(getSatus.bind(series, 50)()); // JavaScript-with-JC 🌟 50
}
// MCQ11();

// 👉 MCQ-12
function MCQ12() {
  var name = "Jayesh";

  function displayName() {
    console.log(this.name);
  }

  const person = {
    name: "JC",
    method(fn) {
      fn();
    },
  };

  person.method(displayName);

  // 👍A) JC           💡B) Jayesh
  // 💖C) undefined    😀D) TypeError

  /*
  Answer is B) Jayesh because displayName function is passed to person object method as a callback function.
  "this" keyword in displayName function will refer to window object and window object has a property "name" with value "Jayesh". Hence, It will console Jayesh as an output.
  */

  // 👇 We can get JC as an output by attaching call method with fn() inside person method :-

  const person2 = {
    name: "JC",
    method(fn) {
      fn.call(this); // borrowing function and passing "this" of person2 object.
    },
  };

  person2.method(displayName); // JC
}
// MCQ12();

// 👉 MCQ-13
function MCQ13() {
  var length = 4;

  function callback() {
    console.log(this.length);
  }

  const object = {
    length: 5,
    method: function () {
      arguments[0]();
    },
  };

  object.method(callback, 2, 3);

  // 👍A) 2     💡B) 3
  // 💖C) 4     😀D) 5

  /*
  Answer is B) 3 because arguments keyword is an array of arguments passed to the function. 
  Here while calling object.method(), we are passing three arguments callback fn(), 2 and 3.
  If we try to console arguments it will look like this 👇

  Arguments(3) [ƒ, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  0: ƒ callback()
  1: 2
  2: 3
  callee: ƒ ()
  length: 3
  Symbol(Symbol.iterator): ƒ values()
  [[Prototype]]: Object

  As we can clearly see, arguments is having length property that is equal to number of arguments passed to function.
  So, arguments[0] is nothing but the first argument passed to function that is callback function in this case.
  As we know, Everything in JavaScript is an object ( arguments is also an object which has length property with value 3 )
  arguments[0]() function's "this" will refer to arguments object. Hence, It will console 3 as an output.
  */
}
// MCQ13();

// 👉 MCQ-14
function MCQ14() {
  var name = "Jayesh";

  function displayName() {
    console.log(this.name);
  }

  const person = {
    name: "JC",
    method: displayName.bind(this),
  };

  person.method();

  // 👍A) Jayesh       💡B) JC
  // 💖C) undefined    😀D) TypeError

  /*
  Answer is A) Jayesh because "this" inside the definition for person object does not refer to person object. 
  "this" will refer to the window object here, and binding displayName function with passing window's this  
  as a context will return a copy of bound function that is stored in method property of person object. 
  So, While calling person.method() will console Jayesh as an output.
  */

  // 👇 We can get JC as an output by wrapping displayName.bind(this) inside a function because "this" inside the normal function of an object refers to the object :-

  const person2 = {
    name: "JC",
    method: function () {
      return displayName.bind(this); // Here, "this" refers to the person2 object
    },
  };

  person2.method()(); // JC
}
// MCQ14();

// 👉 MCQ-15
function MCQ15() {
  function show() {
    console.log(this.name);
  }

  const person1 = { name: "Jc" };
  const person2 = { name: "Jayesh" };

  show = show.bind(person1).bind(person2);
  show();

  // 👍A) Jayesh       💡B) undefined
  // 💖C) JC           😀D) TypeError

  /*
  Answer is C) JC because a function which is bound with bind keyword can not be re-bound with other new context, bind chaining does not exist.
  once the function is bound to a particular object, It will always be bound to that object no matter how many times it's further bounded.
  */
}
// MCQ15();

// 👉 MCQ-16
function MCQ16() {
  let person1 = {
    name: { firstName: "Jayesh" },
    age: 24,
  };
  let person2 = { ...person1 };

  person2.name.firstName = "Virat";
  person2.age = 33;

  console.log(person1.name.firstName);
  console.log(person1.age);

  // 👍A) Jayesh, 33     💡B) Jayesh, 24
  // 💖C) Virat, 33      😀D) Virat, 24

  /*
  Answer is D) Virat, 24 because The spread operator makes deep copies of data if the data is not nested. 
  When we have nested data in an array or object the spread operator will create a deep copy of the top most data 
  and a shallow copy of the nested data. 
  person1 and person2 is pointing to different memory address but person1.name and person2.name is pointing to the same memory address

  We Can do Deep copy of nested objects by using:-
  1) const copyObj = JSON.parse(JSON.stringify(originalObj))
  2) const copyObj = structuredClone(originalObj);
*/
}
// MCQ16();

// 👉 MCQ-17
function MCQ17() {
  for (var i = 0; i < 5; i++) {
    setTimeout(
      (i) => {
        console.log(i);
      },
      1000,
      i
    );
  }

  // 👍A) 0 1 2 3 4      💡B) 5 5 5 5 5
  // 💖C) 4 4 4 4 4      😀D) 0 1 2 3 4 5

  /*
  Answer is A) 0 1 2 3 4 because as we are passing i ( 0 to 4 ) value as an argument to setTimeout callback function
  therefore this will console different values of i from 0 to 4.

  if there was no argument passed to setTimeout callback function then the output would be 5 5 5 5 5 because variables declared 
  with var keyword are function-scoped or globally-scoped but not blocked scoped. Inner function i would point to the updated value of i that is 5.
*/
}
// MCQ17();

// 👉 MCQ-18
function MCQ18() {
  console.log(1);

  async function fetchData() {
    console.log(2);
    let result = await Promise.resolve(3);
    console.log(result);
  }

  fetchData();
  console.log(4);

  // 👍A) 1 2 3 4      💡B) 1 4 2 3
  // 💖C) 1 2 4 3      😀D) 1 3 4 2

  /*
  Answer is C) 1 2 4 3 beacause promise is used to handle the asynchronous result of an operation and 
  callback functions attached to the promises are stored into microtask queue. 
  So, first synchronous code will be executed i.e 1,2,4 and once callstack is empty, event loop pushes the microtask queue's task into callstack
  callstack will start executing the task and It will console 3 at last.
  */
}
// MCQ18();

// 👉 MCQ-19
function MCQ19() {
  console.log("start");

  const promise = new Promise((resolve) => {
    console.log(1);
    resolve(2);
    console.log(3);
  });

  promise.then((result) => {
    console.log(result);
  });

  console.log("end");

  // 👍A) start end 1 3 2      💡B) start 1 3 end 2
  // 💖C) start end 1 2 3      😀D) start 1 end 2 3

  /*
  Answer is B) start 1 3 end 2 beacause The function we pass into the Promise constructor runs synchronously, 
  but anything that depends on its resolution ( resolve or reject ) will be called asynchronously. 
  Even if the promise resolves immediately, any handlers ( callback attached to promise then and catch ) will execute asynchronously. 

  const promise = new Promise((resolve) => {
  console.log(1);  // runs synchronously
  resolve(2); // called asynchronously by then callback
  console.log(3); // runs synchronously
});
*/
}
// MCQ19();

// 👉 MCQ-20
function MCQ20() {
  console.log("First");

  const promise = new Promise((resolve) => {
    console.log("Second");
  });

  promise.then((result) => {
    console.log(result);
  });

  console.log("Third");

  // 👍A) First Second undefined Third      💡B) First Third Second
  // 💖C) First Second Third undefined      😀D) First Second Third

  /*
  Answer is D) First Second Third because as there is no resolve in Promise constructor, So it will not go inside of .then block.
  */
}
// MCQ20();

// 👉 MCQ-21
function MCQ21() {
  const fetchData = function () {
    return new Promise((resolve, reject) => {
      reject();
    });
  };

  fetchData()
    .then(() => {
      console.log("Success 1");
    })
    .catch(() => {
      console.log("Error 1");
    })
    .then(() => {
      console.log("Success 2");
    });

  // 👍A) Error 1 TypeError    💡B) Error 1
  // 💖C) Error 1 Success 2    😀D) undefined

  /*
  Answer is C) Error 1 Success 2 because in promise chaining .then method below .catch method will be called if in .catch method we are not 
  returning rejected promise ( by default implicitly returns a promise that is handled by it's below .then method )
  */
}
// MCQ21();

// 👉 MCQ-22
function MCQ22() {
  function foo() {
    let a = (b = 0);
    a++;
    return a;
  }
  foo();
  console.log(typeof a);
  console.log(typeof b);

  // 👍A) undefined number        💡B) ReferenceError number
  // 💖C) undefined undefined     😀D) number number

  /* 
  Answer is A) undefined number because variable a is declared with let it is blocked scope and will be "not defined" outside function foo().
  The typeof operator returns "undefined" even for “undeclared” (or “not defined”) variables.
  Notice that there was no error thrown when we executed typeof a, even though a is an undeclared variable. 
  This is a special safety guard in the behavior of typeof. 
  and variable b is a just global scope variable hence it will be available outside function foo() also. 
  */
}
// MCQ22();

// 👉 MCQ-23
function MCQ23() {
  console.log("start");

  setTimeout(() => {
    console.log("first");
  }, 0);

  Promise.resolve("second").then((res) => console.log(res));

  console.log("end");

  // 👍A) start end first second       💡B) start first second end
  // 💖C) start end second first       😀D) start first end second

  /* 
  Answer is C) start end second first because callback function attached to Promises added into microtask queue 
  whereas callback function of setTimeout added into callback ( macroTask ) queue. 
  microTask queue has more priority than callback ( macroTask ) queue.
  */
}
// MCQ23();

// 👉 MCQ-24
function MCQ24() {
  const person1 = {
    name: "Jayesh",
    age: 24,
  };

  const person2 = person1;
  person2.name = "Virat";

  console.log(person1.name);
  console.log(person2.name);

  // 👍A) Jayesh Virat  💡B) Virat Virat
  // 💖C) Virat Jayesh  😀D) Jayesh Jayesh

  /* 
  Answer is B) Virat Virat because objects are passed as a reference, person1 and person2 will hold the same memory address
  and altering any property of person2 will modify property of person1 as well.
  */
}
// MCQ24();

// 👉 MCQ-25
function MCQ25() {
  let p = new Promise((resolve, reject) => {
    reject(Error("Fails!"));
  });
  p.catch((error) => {
    console.log(error.message);
  }).then((result) => {
    console.log(result);
  });

  // 👍A) Fails! undefined    💡B) Fails!
  // 💖C) Fails! TypeError    😀D) Fails! Fails!

  /* 
  Answer is A) Fails! undefined because promise is rejecting so .catch callback will execute and console "Fails" first.
  In promise chaining .then method below .catch method will be called if in .catch method we are not 
  returning rejected promise ( by default implicitly it returns a promise that is handled by it's below .then method ).
  as .catch method is not returning anything, result of .then method will be undefined.

  The Error() constructor creates an error object. Error() can be called with or without new. Both create a new Error instance.
  Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions.
  Error.message in user-created Error objects is the string provided as the constructor's first argument that is "Fails!" in our case.
  */
}
// MCQ25();

// 👉 MCQ-26
function MCQ26() {
  const person = {
    name: "JC",
    displayName() {
      console.log(this.name);
    },
  };

  const jayesh = Object.create(person);

  person.displayName();
  jayesh.displayName();

  // 👍A) JC undefined          💡B) undefined JC
  // 💖C) undefined undefined   😀D) JC JC

  /* 
  Answer is D) JC JC because Object.create() method creates a new object, using an existing object as the prototype 
  of the newly created object. Object.create() is used for Prototypal inheritance. jayesh.__proto__ will point to person object. 
  If child object does not have property then it will inherit the property from it's parent ( prototype ) object.
  */
}
// MCQ26();

// 👉 MCQ-27
function MCQ27() {
  const fetchData = function () {
    return new Promise((res) => res("One"));
  };

  let isLoading = true;
  fetchData()
    .then((result) => {
      console.log(result);
    })
    .finally(() => {
      console.log("Two");
      isLoading = false;
    });

  console.log(isLoading);

  // 👍A) One Two true   💡B) One Two false
  // 💖C) true One Two   😀D) false One Two

  /* 
  Answer is C) true One Two because first synchronous code will be executed i.e isLoading ( true ). 
  once callstack is empty and promise is resolved, callback function attached to the promise .then method() will execute
  and eventually .finally method will be executed.
  */
}
// MCQ27();

// 👉 MCQ-28
function MCQ28() {
  const calc = (a) => {
    return (b) => {
      if (b) return calc(a + b);
      return a;
    };
  };

  console.log(calc(1)(2)(3)(4)());

  // 👍A) 3   💡B) 10
  // 💖C) 5   😀D) 1

  /* 
  Answer is B) 10 because of Infinite Currying.
  Currying is a technique to convert multiple arguments function into a single argument functions (unary functions) in a sequence.
  There are two ways to perform currying :-
  1) Using Closures ( Used in above question )
  2) Using Bind
  */
}
// MCQ28();

// 👉 MCQ-29
function MCQ29() {
  const person1 = {
    name: "Jayesh",
  };

  const person2 = {
    name: "Virat",
  };

  const person = Object.assign(person1, person2);

  console.log(person.name);
  console.log(person1.name);

  // 👍A) Virat Virat   💡B) Virat Jayesh
  // 💖C) Jayesh Virat  😀D) Jayesh Jayesh

  /* 
  Answer is A) Virat Virat because Object.assign() method copies all own properties from one or more source objects to a target object. 
  It returns the modified target object. Merging objects with same properties overwritten by other objects that have the same properties later in the parameters order.

  In the above question, person1 is target object that is merged with person2 and as both objects have same property name
  that's why "Jayesh" is overwritten by "Virat". person and person1 points to the same memory address. comparing person === person1 results true.

  Note:- While Cloning an object using Object.assign makes deep copies of data if the data is not nested. When we have nested data in an object then 
  It will create a deep copy of the top most data and a shallow copy of the nested data.  
  
  Cloning an Object :-
  const obj = { a: 1 };
  const copy = Object.assign({}, obj);
  console.log(copy); // { a: 1 }

  Syntax-
  Object.assign(target, ...sources)
  */
}
// MCQ29();

// 👉 MCQ-30
function MCQ30() {
  const promise = () => Promise.resolve("Success");

  function first() {
    promise().then((res) => console.log(res));
    console.log("First");
  }

  async function second() {
    const res = await promise();
    console.log(res);
    console.log("Second");
  }

  first();
  second();

  // 👍A) First Success Second Success
  // 💡B) First Second Success Success
  // 💖C) Second Success First Success
  // 😀D) First Success Success Second

  /* 
  Answer is D) First Success Success Second because :-
  1) While calling first function, callback function attached to then method of promise will be stored into microtask queue 
  and next synchronous code i.e console.log("First") will be executed in callstack. 
  2) While calling second function which is async, The keyword await in async second function makes JavaScript wait until
  the promise settles and returns its result. So, as there are two resolved promises callback function stored in microtask queue.
  first promise .then method will console "Success", after that await promise of second promise will console "Success".
  3) At last, Synchronous code after the await keyword in async function will be executed i.e console.log("Second");
  */
}
// MCQ30();

// 👉 MCQ-31
function MCQ31() {
  console.log("start");

  async function getData() {
    console.log("JC");
    return "Jayesh";
  }

  getData().then((res) => console.log(res));

  console.log("end");

  // 👍A) start end JC Jayesh     💡B) start JC Jayesh end
  // 💖C) start JC end Jayesh     😀D) start Jayesh JC end

  /* 
  Answer is C) start JC end Jayesh because async function always returns a promise. If no promise is return other values are wrapped in a resolved promise automatically.
  So in the above question return "Jayesh" would be same as Promise.resolve("Jayesh");
  First, All the synchronous code will be executed i.e start JC end and later on callback function attached to promise that is stored in microtask queue will be executed by callstack.
  Hence, The Final Result will be:- start JC end Jayesh
  */
}
// MCQ31();

// 👉 MCQ-32
function MCQ32() {
  const p1 = Promise.resolve("First");
  const p2 = Promise.reject("Second");
  const p3 = Promise.resolve("Third");

  const runPromises = async () => {
    try {
      const res = await Promise.all([p1, p2, p3]);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  runPromises();

  // 👍A) [ First, Third ]    💡B) Second
  // 💖C) [ First ]           😀D) [ Second ]

  /* 
  Answer is B) Second because Promise.all() executes all passed promises concurrently and improves the performance of the application.
  👉 Promise.all() Cases :-
  1) If all promises resolve, returns the array of results of all promises resolved.
  2) If any promise fails, returns the rejected promise error.
  3) If passed empty [], returns empty [].

  In the above question, promise p2 is rejected. Hence, Promise.all() will return the rejected promise error "Second".
  */
}
// MCQ32();

// 👉 MCQ-33
function MCQ33() {
  const inc = async (x) => {
    x = x + (await 1);
    return x;
  };

  const increment = async (x) => {
    x = x + 1;
    return x;
  };

  inc(1).then((x) => {
    increment(x).then((x) => console.log(x));
  });

  // 👍A) 1    💡B) 2
  // 💖C) 3    😀D) 4

  /* 
  Answer is C) 3 because first promise return by async function "inc" will resolve and return ( 1 + 1 ) 2 as a result in .then method.
  secondly, promise return by async function "increment" will resolve and return ( 2 + 1 ) 3 as a result in .then method.

  Note:- await keyword in async function waits for the promise to fullfilled but if the value is not a Promise ( In above question await 1 ), 
  it converts the value to a resolved Promise, and waits for it. So. await 1 would be same as Promise.resolve(1).
  */
}
// MCQ33();

// 👉 MCQ-34
function MCQ34() {
  displayName();
  var displayName = function () {
    console.log("Jayesh");
  };

  function displayName() {
    console.log("JC");
  }
  displayName();

  // 👍A) Jayesh Jayesh   💡B) JC JC
  // 💖C) Jayesh JC       😀D) JC Jayesh

  /* 
  Answer is D) JC Jayesh because of Hoisting When javaScript engine starts executing the code, It creates the global execution 
  context in callstack, Each context in callstack has two phases:- 1) Memory Creation and 2) Code Execution

  at the Memory Creation, for var displayName = func(){} displayName will be undefined but below in the code declared function displayName() {} 
  will override the displayName value to function displayName() { console.log("JC") }

  displayName :  displayName() {
    console.log("JC");
  }

  at the Code Execution, first displayName() function will console "JC" and at the next line displayName will be assigned
  function () { console.log("Jayesh") } as value; 

  displayName :  displayName() {
    console.log("Jayesh");
  }

  Hence, last displayName() function will console "Jayesh"
  */
}
// MCQ34();

// 👉 MCQ-35
function MCQ35() {
  const fetchData = function () {
    return new Promise((res, reject) => {
      reject("Error");
    });
  };

  fetchData()
    .then(null, (err) => {
      console.log("First");
      console.log(err);
    })
    .catch(() => {
      console.log("Second");
      console.log(err);
    });

  // 👍A) First Error        💡B) Second Error
  // 💖C) Second undefined   😀D) ReferenceError

  /* 
  Answer is A) First Error because then() method takes up to two arguments: callback functions for the fulfilled and rejected 
  cases of the Promise.
  Syntax of then :- then(onFulfilled) or then(onFulfilled, onRejected).
  then(
  (value) => fulfillment handler 
  (reason) => rejection handler 
  );

  In the above question, Inside .then() - We are passing first argument as null and second argument as callback function for rejected 
  case of the Promise. So, Second argument callback function will be executed for rejected case and will console First Error. 
  */
}
// MCQ35();

// 👉 MCQ-36
function MCQ36() {
  function resolveAfterNSeconds(time, value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, time);
    });
  }

  async function doTasks() {
    console.time("time");
    let a = await resolveAfterNSeconds(1000, 1);
    let b = resolveAfterNSeconds(2000, 2);
    let c = resolveAfterNSeconds(1000, 3);

    console.log(a + (await b) + (await c));
    console.timeEnd("time");
  }
  doTasks();

  // 👍A) 6 in 4 Sec      💡B) 6 in 3 Sec
  // 💖C) NaN in 1 Sec    😀D) 1 in 4 Sec

  /* 
  Answer is B) 6 in 3 Sec because while execution of doTasks function, first await resolveAfterNSeconds(1000, 1) will wait
  for 1 second. variable "a" will be assigned value as 1. a = 1, Total time = 1 Sec.

  In Next Line, resolveAfterNSeconds(2000, 2) pending Promise will be assigned to variable "b" and immediately next line
  resolveAfterNSeconds(1000, 3) pending Promise will be assigned to variable "c", both promises "b" and "c" will run concurrently.

  At Last Line, console.log(a + (await b) + (await c)), promise "b" will take 2Sec to resolve and concurrently promise "c" will 
  also get resolved in 1sec. overall time to execute (await b) + (await c) is only 2Sec because of concurrency.

  Hence, Output would be 6 where a = 1, b = 2, c = 3 and Total time = 3 Sec.
  */
}
// MCQ36();

// 👉 MCQ-37
function MCQ37() {
  let a = true;

  setTimeout(() => {
    a = false;
  }, 2000);

  while (a) {
    console.log("JC");
  }

  // 👍A) "JC" one time after 2 sec.
  // 💡B) "JC" continously till 2 sec.
  // 💖C) "JC" Infinite times.
  // 😀D) Console Nothing.

  /* 
  Answer is C) "JC" Infinite times because callback attached to setTimeout function is asynchronous task and need to wait
  for execution of main thread ( synchronous tasks in callstack ) to execute.

  As value of a is true, code will never exit from while loop ( callstack will never be empty to take callback attached to
  setTimeout function ). Hence, It will console "JC" Infinite times.
  */
}
// MCQ37();

// 👉 MCQ-38
function MCQ38() {
  console.log(1);

  setTimeout(function () {
    console.log(2);
  }, 1000);

  setTimeout(
    (function () {
      console.log(3);
      return () => {};
    })(),
    2000
  );

  console.log(4);

  // 👍A) 1 2 3 4    💡B) 1 4 3 2
  // 💖C) 1 4 2 3    😀D) 1 3 4 2

  /* 
  Answer is D) 1 3 4 2 because at first console.log(1) will print "1", callback function attached to first setTimeout will 
  wait for atleast 1 second.
  In the 2nd setTimeout we are passing IIFE ( Immediately Invoked Function Expression ). So, IIFE will print "3" immediately 
  and will return () => {} as callback that will wait for atleast 2 seconds. 
  console.log(4) will print "4", callstack will be empty as all synchronous tasks completed.
  After one second callback function attached to first setTimeout pushed into callstack and console.log(2) will print "2".
  */
}
// MCQ38();

// 👉 MCQ-39
function MCQ39() {
  const num = [1, 2, 3];
  const double = function (num) {
    return num * 2;
  };

  const res1 = num.map(double);
  const res2 = num.forEach(double);

  console.log(res1);
  console.log(res2);

  // 👍A) [2, 4, 6] [2, 4, 6]    💡B) [2, 4, 6] undefined
  // 💖C) [2, 4, 6] [1, 2, 3]    😀D) undefined [2, 4, 6]

  /* 
  Answer is B) [2, 4, 6] undefined because map function iterates through each element of an array and can modify each 
  element of an array. map function does not mutate the original array, Always returns new copy of a mutated array.

  Whereas, forEach function iterates through each element of an array and executes a callback function once for each 
  element and does not mutate the original array, Always returns undefined.
  */
}
// MCQ39();

// 👉 MCQ-40
function MCQ40() {
  setTimeout(() => {
    console.log(1);
    Promise.resolve().then(() => {
      console.log(2);
    });
  }, 0);

  Promise.resolve().then(() => {
    console.log(3);
    setTimeout(() => {
      console.log(4);
    }, 0);
  });

  // 👍A) 3 1 2 4    💡B) 3 2 1 4
  // 💖C) 1 2 3 4    😀D) 3 4 1 2

  /* 
  Answer is A) 3 1 2 4 because of taskqueue and microtask queue behaviour.
  callback attached to setTimeout will be pushed to taskqueue and callback of Promise.resolve().then will be pushed to microtask queue.

  As microtask queue has higher priority than taskqueue, callback attached to Promise.then will start executing in callstack 
  and console.log(3) will print "3", in the next line callback attached to setTimeout will be pushed to taskqueue.

  Now taskqueue has two setTimeout callback functions, So first callback function will start executing and console.log(1) will print "1"
  in the next line callback attached to Promise.resolve().then will be pushed to microtask queue.

  Now, microtask queue has one callback and taskqueue also has one callback, As microtask queue has higher priority than taskqueue
  from microtask queue callback function will execute and console.log(2) will print "2" and at last from taskqueue console.log(4) will print "4".
  */
}
// MCQ40();

// 👉 MCQ-41
function MCQ41() {
  const arr = [1, 2, 5, 3, 2, 4];

  const checkTwo = (num, i, arr) => {
    if (num === 2) return true;
    return false;
  };

  const res1 = arr.filter(checkTwo);
  const res2 = arr.find(checkTwo);

  console.log(res1);
  console.log(res2);

  // 👍A) [2, 2] [2, 2]    💡B) [2, 2] [2]
  // 💖C) [2] 2            😀D) [2, 2] 2

  /* 
  Answer is D) [2, 2] 2 because find method returns only first found value whereas filter method returns an array of filtered values.
  */
}
// MCQ41();

// 👉 MCQ-42
function MCQ42() {
  const person = {
    key: "name",
  };

  const jayesh = {
    name: "JC",
  };

  console.log(jayesh[person.key]);
  console.log(jayesh?.person?.key);
  console.log(jayesh[person["key"]]);

  // 👍A) undefined JC JC    💡B) JC JC JC
  // 💖C) JC undefined JC    😀D) JC JC undefined

  /* 
  Answer is C) JC undefined JC because jayesh object does not have property "person". So, jayesh?.person will be undefined
  and because of the optional chaining jayesh?.person?.key won't thow any error and return undefined.

  If there was no optional chaining used then jayesh.person.key would have thrown Uncaught TypeError: Cannot read properties of undefined (reading 'key')
  */
}
// MCQ42();

// 👉 MCQ-43
function MCQ43() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    getName() {
      return this.name;
    }
    static getAge() {
      return this.age;
    }
  }

  const jayesh = new Person("JC", 24);
  console.log(jayesh.getName());
  console.log(jayesh.getAge());

  // 👍A) JC 24          💡B) JC TypeError
  // 💖C) JC undefined   😀D) undefined JC

  /* 
  Answer is B) JC TypeError because static methods are created once and only access by class, static methods can not be called by an object 
  jayesh.getName() will throw an Uncaught TypeError: jayesh.getAge is not a function. static methods are also known as class methods.

  A static method cannot access a class's instance variables and instance methods, because a static method can be called even when 
  no objects of the class have been instantiated. For the same reason, the this reference cannot be used in a static method. 
  Person.getAge() will return undefined as "this" referes to the object. static methods can only use static variables and call static methods.

  In the static method, the method can only access static data members and static methods of another class or same class but cannot 
  access non-static methods and variables.
  */
}
// MCQ43();

// 👉 MCQ-44
function MCQ44() {
  const p1 = new Promise((res) => {
    setTimeout(() => res("One"), 2000);
  });

  const p2 = new Promise((res, rej) => {
    setTimeout(() => rej("Two"), 1000);
  });

  Promise.race([p1, p2])
    .then((res) => {
      console.log("result", res);
    })
    .catch((err) => {
      console.log("error", err);
    });

  // 👍A) result One      💡B) result Two
  // 💖C) error One       😀D) error Two

  /* 
  Answer is D) error Two because Promise.race() executes all passed promises concurrently and returns the first resolved or rejected promise result. 
  In above question, promise p2 is getting rejected in one second before promise p1 that is taking 2 seconds to fullfill.
  */
}
// MCQ44();

// 👉 MCQ-45
function MCQ45() {
  function Person(name, age) {
    this.name = name;
    this.age = age;

    this.getInfo = function () {
      return this.name;
    };
  }

  Person.prototype.getInfo = function () {
    return `${this.name} ${this.age}`;
  };

  const jayesh = new Person("JC", 24);
  console.log(jayesh.getInfo());

  // 👍A) JC        💡B) undefined
  // 💖C) JC 24     😀D) TypeError

  /* 
  Answer is A) JC because Person.prototype.getInfo ( Prototye member ) will add getInfo function to Person object's Prototype ( Parent object of Person Object ), 
  where as this.getInfo = function () { return this.name }; will add the getInfo function to Person object ( Instance member )
  So, inner getInfo function will override it's parent prototype getInfo function and we will get the output as "JC". 
  */
}
// MCQ45();

// 👉 MCQ-46
function MCQ46() {
  Promise.resolve(1)
    .then((res) => {
      console.log(res);
      return res * 2;
    })
    .then((res) => {
      console.log(res);
      return res * 2;
    })
    .then((res) => {
      console.log(res);
      return res * 2;
    })
    .finally((res) => {
      console.log(res);
    });

  // 👍A) 1 2 4 TypeError     💡B) 1 2 4
  // 💖C) 1 2 4 undefined     😀D) 1 2 4 8

  /* 
  Answer is C) 1 2 4 undefined because of the Promise chaining.
  Promise chaining allows you to chain together multiple asynchronous tasks in a specific order where one asynchronous task needs to be performed 
  after the completion of other asynchronous task.

  💡 We can perform Promise Chaining :-
  👉 by returning a new instance of promise in then()
  👉 by returning a value in then (), behind the scene it returns a new promise that immediately resolves to the return value.

  .finally method() :- callback function attached to .finally method does not take any parameters, hence It will output undefined. 
  */
}
// MCQ46();

// 👉 MCQ-47
function MCQ47() {
  function checkPerson(data) {
    if (data === { name: "Jayesh" }) {
      console.log("One");
    } else if (data == { name: "Jayesh" }) {
      console.log("Two");
    } else {
      console.log("Three");
    }
  }

  checkPerson({ name: "Jayesh" });

  // 👍A) One Two      💡B) Three
  // 💖C) One          😀D) Two

  /* 
  Answer is B) Three because objects are non-primitive data types that compared by thier references.
  data and { name: "Jayesh" } will have diffrent memory reference Hence, It will console "Three" as an output.
  To compare object as value in the above case we can use JSON.stringify(), JSON.stringify(data) === JSON.stringify({ name: "Jayesh" }) results true.
  */
}
// MCQ47();

// 👉 MCQ-48
function MCQ48() {
  function getName1() {
    console.log(arguments[0]);
  }

  getName1("Jayesh");

  const getName2 = () => {
    console.log(arguments[0]);
  };

  getName2("JC");

  // 👍A) Jayesh ReferenceError    💡B) Jayesh undefined
  // 💖C) ReferenceError JC        😀D) Jayesh JC

  /* 
  Answer is A) Jayesh ReferenceError because Arrow functions don't have their own bindings to this, arguments, or super.
  Above code will give Uncaught ReferenceError: arguments is not defined at getName2. In place of arguments, we can use 
  rest operator in arrow function definition for arguments array.  
  const getName2 = (...arguments) => {
    console.log(arguments[0]);
  };
  getName2("JC"); // JC
  */
}
// MCQ48();

// 👉 MCQ-49
function MCQ49() {
  var name = "Jayesh";
  let age = "24";
  const player = "Virat";

  {
    var name = "JC";
    let age = "25";
    const player = "VK";
  }

  console.log(name);
  console.log(age);
  console.log(player);

  // 👍A) JC 25 Virat     💡B) JC 24 Virat
  // 💖C) Jayesh 25 Vk    😀D) JC 24 VK

  /* 
  Answer is B) JC 24 Virat because variables declared with "var" keyword are function-scoped whereas variables declared with "let" or "const" are block-scoped.
  */
}
// MCQ49();

// 👉 MCQ-50
function MCQ50() {
  const person = {
    name: "Jayesh",
    age: 24,
    name: "JC",
  };

  const { name: first, age, name: last } = person;

  console.log(first, age, last);

  // 👍A) JC 24 undefined    💡B) Jayesh 24 Jayesh
  // 💖C) JC 24 JC           😀D) Jayesh 24 TypeError

  /* 
  Answer is C) JC 24 JC because If in an object there are two keys with the same name, the "name" key will be replaced by the last value "JC". 
  "name" key will still be in its first position, but with the last replaced value.  

  In the next line we are destructuring the person object specifying an alternate destructured name for an object property ("name" as first and "name" as last)
  Both first and last will have "JC" as value.

  Final Output will be :- JC 24 JC
  */
}
// MCQ50();

// 👉 MCQ-51
function MCQ51() {
  const person = {};
  const name1 = { key: "name1" };
  const name2 = { key: "name2" };

  person[name1] = "Jayesh";
  person[name2] = "Virat";

  console.log(person[name1]);

  // 👍A) undefined          💡B) Jayesh
  // 💖C) [object Object]    😀D) Virat

  /* 
  Answer is D) Virat because Object keys are automatically converted into strings, name1 and name2 are keys of person object.
  as name1 and name2 are object after stringifying name1 and name2 will become [object Object], So person[name1] and person[name2] are nothing but person["object Object"]. 
  First, person["object Object"] will be set as "Jayesh" and in the next line person["object Object"] will have value as "Virat".

  When we log person[name1], which is actually person["object Object"] it will return value as "Virat". 
  */
}
// MCQ51();

// 👉 MCQ-52
function MCQ52() {
  const p1 = new Promise((res, rej) => {
    setTimeout(() => rej("One"), 1000);
  });

  const p2 = new Promise((res, rej) => {
    setTimeout(() => res("Two"), 2000);
  });

  const p3 = new Promise((res, rej) => {
    setTimeout(() => res("Three"), 3000);
  });

  Promise.any([p1, p2, p3])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  // 👍A) One         💡B) Two
  // 💖C) Three       😀D) Error

  /* 
  Answer is B) Two because Promise.any() executes all passed promises concurrently and returns the first resolved promise result.
  If no promise resolves, It returns the AggregateError "All promises were rejected". If passed empty [], It returns error.

  In the above code, promise p2 is the first resolved promise, Hence It will output "Two" as a result.
  */
}
// MCQ52();

// 👉 MCQ-53
function MCQ53() {
  function showName() {
    return (() => "Jayesh")();
  }

  console.log(typeof showName);
  console.log(typeof showName());

  // 👍A) "function" "string"      💡B) "object" "string"
  // 💖C) "function" "function"    😀D) "function" "undefined"

  /* 
  Answer is A) "function" "string" because typeof showName is "function" as showName is function and for typeof showName(),
  immediately invoked function expression (IIFE) will execute immediately and return "Jayesh". "Jayesh" will be further returned by showName() function.
  typeof "Jayesh" will be "string". So, Final Output will be "function" "string".
  */
}
// MCQ53();

// 👉 MCQ-54
function MCQ54() {
  const arr = [1, 2, 3];

  const removeLast = function (array) {
    array.pop();
    return array;
  };

  removeLast([...arr]);
  console.log(arr);

  removeLast(arr);
  console.log(arr);

  // 👍A) [1, 2, 3] 3      💡B) [1, 2] [1, 2, 3]
  // 💖C) [1, 2] [1]       😀D) [1, 2, 3] [1, 2]

  /* 
  Answer is D) [1, 2, 3] [1, 2] because first time for removeLast([...arr]), arr is passed with spread operator because of which new copy ( different reference ) 
  of arr will be passed to removeLast function and won't mutate the original arr. arr will still have [1, 2, 3] as value.
  For second call of removeLast(arr), arr is passed directly with same memory reference so mutating array will change original "arr" as well, so arr will be modified to [1, 2].
  */
}
// MCQ54();

// 👉 MCQ-55
function MCQ55() {
  const list1 = ["Jayesh", "Virat"];
  const list2 = [];

  if (list1) {
    console.log("Display1");
  } else {
    console.log("Empty1");
  }

  if (list2) {
    console.log("Display2");
  } else {
    console.log("Empty2");
  }

  // 👍A) Empty1 Display2      💡B) Display1 Empty2
  // 💖C) Display1 Display2    😀D) Empty1 Empty2

  /* 
  Answer is C) Display1 Display2 because empty array [] or the empty object {} are truthy values in JavaScript, Boolean([]) is true.
  Hence, for both list1 and list2 the if statement condition will satisfy and will console Display1 Display2.

  Note:- To check if an array is empty, We can use array.length === 0.
  */
}
// MCQ55();

// 👉 MCQ-56
function MCQ56() {
  console.log("start");

  const first = setTimeout(() => {
    console.log("first");
    clearTimeout(second);
  }, 1000);

  const second = setTimeout(() => {
    console.log("second");
    clearTimeout(first);
  }, 2000);

  console.log("end");

  // 👍A) start first second end    💡B) start end first
  // 💖C) start end first second    😀D) start second end

  /* 
  Answer is B) start end first because The clearTimeout() method clears a timer set with the setTimeout() method.
  In variable "first" we are assigning id of first setTimeout and similarly in variable "second" we are assigning id of seconnd setTimeout.
  Both the setTimeouts ( asynchronous task ) will be handled by web api, as first setTimeout is taking only 1 second. So    
  callback function attached to first setTimeout will be executed and clearTimeout(second) will clear the second setTimeout from web api.
  Hence, The Final Output will be start end first.
  */
}
// MCQ56();

// 👉 MCQ-57
function MCQ57() {
  function* generateNumber(i) {
    yield i;
    yield i * 2;
    return i * 2 * 2;
    yield i * 2 * 2 * 2;
  }

  const numbers = generateNumber(10);

  console.log(numbers.next().value);
  console.log(numbers.next().value);
  console.log(numbers.next().value);
  console.log(numbers.next().value);

  // 👍A) 10 20 40 80    💡B) 10 20 undefined 40
  // 💖C) 10 20 20 40    😀D) 10 20 40 undefined

  /* 
  Answer is D) 10 20 40 undefined, Generator is a function that can be paused and resumed from where it was paused. It is written as the function keyword followed by an asterisk (*).
  Generator returns a Generator object that is used by calling the next method. For the first time calling numbers.next().value, we will get 10 as an output, second time 20 as an ouput.
  While calling numbers.next().value for third time, Inside generator function we have return keyword that will return 40 and also terminate the generator function and 
  as the generator function is finished calling numbers.next().value again for fourth time will give output as undefined. So, Final Output will be 10 20 40 undefined

  Note:- A return statement in a generator, when executed, will make the generator finish ( i.e. the done property of the object returned by it will be set to true ).
  */
}
// MCQ57();

// 👉 MCQ-58
function MCQ58() {
  const numbers = [1, 2, 3, 4, 5];

  const total1 = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const total2 = numbers.reduce((acc, curr) => {
    return acc + curr;
  });

  console.log(total1);
  console.log(total2);

  // 👍A) 15 15     💡B) 10 15
  // 💖C) 15 10     😀D) 15 NaN

  /* 
  Answer is A) 15 15, Array.prototype.reduce is a higher order function that iterates through each value of an array and
  reduces array of values into single value.

  With initial value as second argument (callback loops for n times) accumulator takes initial value, and current takes first value of an array.
  Without initial value as second argument (callback loops for (n-1) times) accumulator takes first value of an array, and current takes second value of an array.
  */
}
// MCQ58();

// 👉 MCQ-59
function MCQ59() {
  const p1 = new Promise((res, rej) => {
    setTimeout(() => res("One"), 1000);
  });

  const p2 = new Promise((res, rej) => {
    setTimeout(() => rej("Two"), 2000);
  });

  Promise.allSettled([p1, p2])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  // 👍A) [{ status: "fulfilled", value: "One" }]
  // 💡B) ["One", "Two"]
  // 💖C) [{ status: "fulfilled", value: "One" },
  //       { status: "rejected", reason: "Two" }]
  // 😀D) ["One"]

  /* 
  Answer is C) [{ status: "fulfilled", value: "One" },{ status: "rejected", reason: "Two" }]. Promise.allSettled() 
  returns a promise that gets resolved when all passed promises are settled ( either fulfilled or rejected ) and 
  in result it gives an array of objects having status and the value/reason of each promise.
  */
}
// MCQ59();

// 👉 MCQ-60
function MCQ60() {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.age = 24;

  const jayesh = new Person("JC");

  console.log(jayesh.hasOwnProperty("name"));
  console.log(jayesh.hasOwnProperty("age"));

  // 👍A) true true      💡B) true false
  // 💖C) false false    😀D) false true

  /* 
  Answer is B) true false because The hasOwnProperty() method returns a boolean indicating whether the object has the 
  specified property as its own property. If the specified property is inherited, or does not exist, the method returns false.
  */
}
// MCQ60();

// 👉 MCQ-61
function MCQ61() {
  const array = [
    "Whatever you want to do",
    "Believe it, believe it, believe it",
    "Even if you don't believe play the game of belief",
    "Act as if you believe. That is the Power",
  ];

  const result = array.slice(-2, 3);

  console.log(result[0]);

  // 👍A) "Whatever you want to do"
  // 💡B) "Believe it, believe it, believe it"
  // 💖C) "Even if you don't believe play the game of belief"
  // 😀D) "Act as if you believe. That is the Power"

  /* 
  Answer is C) "Even if you don't believe play the game of belief" because Array.prototype.slice returns a shallow copy 
  of an original array slicing it from given start index to end index (excluding end index) i.e start to end-1.
  slice method takes two arguments(optional) start and end, if no argument passed then it returns shallow copy of a original array with all values.

  positive index =>  0  1  2
  => for an array = [10,20,30]  
  negative index => -3 -2 -1
  */
}
// MCQ61();

// 👉 MCQ-62
function MCQ62() {
  setTimeout(() => {
    console.log(1);
  }, 1000);

  Promise.resolve(2).then((result) => {
    console.log(result);
  });

  setTimeout(() => {
    console.log(3);
  }, -1000);

  // 👍A) 1 3 2     💡B) 3 2 1
  // 💖C) 2 1 3     😀D) 2 3 1

  /* 
  Answer is D) 2 3 1 because If we provide something less than 0 sec then the browser will just ignore delay and use the minimum 0 sec.
  So, First Callback function attached to promise will console "2". Then second setTimout callback function will execute and console "3". 
  and after one second first setTimeout callback function will execute and console "1". Final result will be 2 3 1.
  */
}
// MCQ62();

// 👉 MCQ-63
function MCQ63() {
  let num = 10;

  const incrementNumber1 = () => num++;

  const incrementNumber2 = (num) => num++;

  const num1 = incrementNumber1();
  const num2 = incrementNumber2(num1);

  console.log(num1);
  console.log(num2);

  // 👍A) 11 12     💡B) 10 10
  // 💖C) 10 11     😀D) 11 11

  /* 
  Answer is B) 10 10 because The unary operator ++ first returns the value of the operand, then increments the value of the operand.
  So, incrementNumber1() will return "10" that will be assigned to "num1" and increment "num" by 1. incrementNumber2(num1) will also return "10" that will be assigned to "num2".
  */
}
// MCQ63();

// 👉 MCQ-64
function MCQ64() {
  const person = {
    name: "Jayesh",
    age: 24,
    lang: "JS",
  };

  const result = JSON.stringify(person, ["name", "age"]);
  console.log(result);

  // 👍A) "[object Object]"
  // 💡B) "{"name": "Jayesh", "age": 24, "lang": "JS"}"
  // 💖C) "{"name": "Jayesh", "age": 24}"
  // 😀D) "{"language": "JavaScript"}"

  /* 
  Answer is C) "{"name": "Jayesh", "age": 24}" because The second argument of JSON.stringify is the replacer. 
  The replacer can either be a function or an array that lets you control what and how the values should be stringified.
  If the replacer is an array, only the property names included in the array will be added to the JSON string. 
  In above case, only the properties with "name" and "age" are included, "lang" is excluded. So, result will be "{"name": "Jayesh", "age": 24}".
  */
}
// MCQ64();

// 👉 MCQ-65
function MCQ65() {
  const array = [1, 2, 3];
  const value = array.pop();

  const result = array.unshift(value);

  console.log(result);
  console.log(array);

  // 👍A) 3 [3, 1, 2]     💡B) [3, 1, 2] [3, 1, 2]
  // 💖C) 3 [1, 2, 3]     😀D) [3, 1, 2] [1, 2, 3]

  /* 
  Answer is A) 3 [3, 1, 2] because The pop() method removes the last element of an array and returns it. so value will be "3".
  The unshift() method adds n number of elements to the beginning of an array and returns the new length of the array. 
  array.unshift(value) will push "value" to beginning of array and will return the new size of the array. Hence, result => 3 array => [3, 1, 2]. 
  */
}
// MCQ65();

// 👉 MCQ-66
function MCQ66() {
  const person = {
    name: "Jayesh",
    age: 24,
    skill: {
      language: "JavaScript",
    },
  };

  Object.freeze(person);

  person.name = "JC";
  person.skill.language = "Java";

  console.log(person.name);
  console.log(person.skill.language);

  // 👍A) JC JavaScript        💡B) Jayesh Java
  // 💖C) Jayesh JavaScript    😀D) JC Java

  /* 
  Answer is B) Jayesh Java because The Object.freeze() method freezes an object. Freezing an object prevents extensions and makes existing 
  properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed.

  Note :- Object.freeze() method only freezes first level properties of an object, Nested properties of an object can still be changed, added and removed.
  as language property is nested property of person object so it can be altered. The Final Ouput will be Jayesh Java.
  */
}
// MCQ66();

// 👉 MCQ-67
function MCQ67() {
  const numbers = [1, 3, 11, 21, 2];

  const res1 = [...numbers.sort()];
  const res2 = [...numbers.sort((a, b) => a - b)];

  console.log(res1);
  console.log(res2);

  // 👍A) [1, 2, 3, 11, 21] [1, 2, 3, 11, 21]
  // 💡B) [1, 11, 2, 21, 3] [1, 11, 2, 21, 3]
  // 💖C) [1, 11, 2, 21, 3] [1, 2, 3, 11, 21]
  // 😀D) [1, 2, 3, 11, 21] [21, 11, 3, 2, 1]

  /* 
  Answer is C) [1, 11, 2, 21, 3] [1, 2, 3, 11, 21] because The sort() method by default sorts the elements of an array in 
  ascending order converting the elements into strings, then comparing their sequences of UTF-16 code units values.

  To compare numbers instead of strings, We can pass custom function ( compareFn ) in sort function, (a, b) => a - b is an arrow function that is passed.
  if compareFn(a, b) returns value > 0	sort a after b.
  if compareFn(a, b) returns value < 0	sort a before b.
  if compareFn(a, b) returns value === 0	keep original order of a and b. 
  */
}
// MCQ67();

// 👉 MCQ-68
function MCQ68() {
  const players = ["JC", "VK", "HP", "DK"];

  for (let player in players) {
    console.log(player);
  }

  for (let player of players) {
    console.log(player);
  }

  // 👍A) 0 1 2 3, 0 1 2 3
  // 💡B) JC VK HP DK, JC VK HP DK
  // 💖C) JC VK HP DK, 0 1 2 3
  // 😀D) 0 1 2 3, JC VK HP DK

  /* 
  Answer is D) 0 1 2 3, JC VK HP DK because for-in loop iterates over enumerable properties. In an array, the enumerable properties 
  are the "keys" of array elements, which are actually their indexes {0: "JC", 1: "VK", 2: "HP", 3: "DK"}.
  While for-of loop iterates over elements of an array, the variable "player" is equal to the element it's currently iterating over, "JC", "VK", "HP", "DK".
  */
}
// MCQ68();

// 👉 MCQ-69
function MCQ69() {
  obj1 = { a: 10 };
  const obj2 = obj1;
  obj2.a = 20;

  console.log(obj1);
  console.log(obj2);
  let obj1;

  // 👍A) { a: 10 } { a: 20 }
  // 💡B) { a: 20 } { a: 10 }
  // 💖C) { a: 20 } { a: 20 }
  // 😀D) ReferenceError

  /* 
  Answer is D) ReferenceError because "let" variables can not be accessed before their initialization. at the last line we are declaring let obj1. 
  and at first line obj1 = { a: 10 } we will get Uncaught ReferenceError: Cannot access 'obj1' before initialization.

  Once the "let" variables are declared then only we can initialize them. If we try to initialize "let" variables before their declaration It will throw ReferenceError.

  In the case of "var" variables, because of hoisting the obj1 variable will be initialized as undefined and will get { a: 20 } { a: 20 } as an output.
  In the case of "let" variables, the obj1 variable will be in temporal dead zone (time frame between hoisted to initialization).
  */
}
// MCQ69();

// 👉 MCQ-70
function MCQ70() {
  let user = {
    userName: "Jayesh",
    age: 24,
    getName: function () {
      return this.userName;
    },
  };

  let getName = user.getName;

  console.log(getName());
  console.log(getName.call(user));

  // 👍A) Jayesh Jayesh        💡B) undefined Jayesh
  // 💖C) Jayesh undefined     😀D) ReferenceError

  /* 
  Answer is B) undefined Jayesh because when we use let getName = user.getName, getName variable will be assigned as function () { return this.userName },
  "this" of getName function will point to window object and no property named with userName is present in window object, Hence It will console undefined.

  getName.call(user) will console "Jayesh" because call method is used for function borrowing, getName.call(user) is equivalent to user.getName().
  */
}
// MCQ70();

// 👉 MCQ-71
function MCQ71() {
  const person = {
    name: "Jayesh",
  };

  const { name = "Virat", age = 34 } = person;

  console.log(name);
  console.log(age);

  // 👍A) Jayesh 34     💡B) Virat undefined
  // 💖C) Virat 34      😀D) Jayesh undefined

  /* 
  Answer is A) Jayesh 34 because With destructuring we can set defaults, or fallback values so that if an item is not in the object (or Array) it will fall back to what we have set at the default.
  as "age" property is not present in person object, while destructuring age = 34 will set "age" variable as 34 default value.  
  */
}
// MCQ71();

// 👉 MCQ-72
function MCQ72() {
  const person = {
    name: "Jayesh",
  };

  const person1 = Object.create(person);
  person1.age = 24;

  delete person1.name;
  delete person1.age;

  console.log(person1.name);
  console.log(person1.age);

  // 👍A) undefined undefined   💡B) undefined Jayesh
  // 💖C) Jayesh undefined      😀D) Jayesh 24

  /* 
  Answer is C) Jayesh undefined because Object.create() method creates a new object, using an existing object as the prototype 
  of the newly created object. Object.create() is used for Prototypal inheritance. person1.__proto__ will point to person object. 
  If child object does not have property then it will inherit the property from it's parent ( prototype ) object.

  delete person1.name and delete person1.age will delete "name" and "age" property of person1 object but "name" property will still be inherited from it's parent ( prototype ) "person" object. 
  */
}
MCQ72();
