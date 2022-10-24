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
MCQ25();
