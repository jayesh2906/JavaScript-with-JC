/* 💡"JavaScript-with-JC" - 12 #javascriptdaily
👉 call and apply methods Polyfill
call and apply methods allow to use the methods of another object or outside methods.
call and apply methods are used for function borrowing.

💡call takes first argument as object, and rest arguments individually.
💡apply takes first argument as object, and rest arguments as array.
💡Note - call and apply execute the borrowed function immediately unlike bind ().
*/

// 💡Example of call () -

// outside function
getPlayerInfo = function (role, country) {
  console.log(`${this.firstName} ${this.lastName}, ${role} from ${country}`);
};

// object 1
const player1 = {
  firstName: "Virat",
  lastName: "Kohli",
  age: 33,

  // method of player 1
  getAge: function () {
    console.log(`${this.firstName}'s age is ${this.age}`);
  },
};

// object 2
const player2 = {
  firstName: "Hardik",
  lastName: "Pandya",
  age: 28,
};

// player1 and player2 are borrowing outside function getPlayerInfo()
getPlayerInfo.call(player1, "Batsman", "India");
// Virat Kohli, Batsman from India

getPlayerInfo.call(player2, "All-Rounder", "India");
// Hardik Pandya, All-Rounder from India

// polyfill for call method

Function.prototype.customCall = function (context, ...args) {
  // context is first argument, if no argument passed then assign global window object
  let currentContext = context || globalThis; // passed object or global object

  // now we are creating new unique method for the currentContext
  // math.random() and while loop ensure that new method won't override existing methods of currentContext
  let newProp = Math.random();
  while (currentContext[newProp] !== undefined) {
    newProp = Math.random();
  }

  currentContext[newProp] = this; // assigning this ( getPlayerInfo ) to newProp of currentContext

  let result = currentContext[newProp](...args);
  delete currentContext[newProp];

  return result;
};

getPlayerInfo.customCall(player2, "Batsman", "India");
// Virat Kohli, Batsman from India

getPlayerInfo.customCall(player2, "All-Rounder", "India");
// Hardik Pandya, All-Rounder from India

player1.getAge();
// player2 is borrowing the method of player1 here
player1.getAge.call(player2);
player1.getAge.customCall(player2);

// 💡uses of call and apply in object constructors chaining 👇

// parent function constructor
function Human(name, age) {
  this.name = name;
  this.age = age;
}

// child function constructor
function Jay(name, age, gender) {
  Human.call(this, name, age);
  this.gender = gender;
}

// child function constructor
function John(name, age, gender) {
  Human.call(this, name, age);
  this.gender = gender;
}

const jayesh = new Jay("jayesh", 24, "Male");
const john = new John("john", 22, "Male");

console.log(jayesh); // { name: 'jayesh', age: 24, gender: 'Male' }
console.log(john); // { name: 'john', age: 22, gender: 'Male' }
