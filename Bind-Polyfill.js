/* 💡"JavaScript-with-JC"
👉 bind method and Its Polyfill
bind method in javascript is used for function borrowing, bind method allows us to use the methods of other objects or outside methods

💡bind method takes first argument as object, and rest arguments individually and returns a new function ( copy of borrowed function ).
💡new function returned by bind takes arguments individually.
💡Note - The bind() method returns a new function and does not execute the borrowed function immediately unlike call and apply.
*/

// 💡Example of bind () -

// outside function
getPlayerInfo = function (role, country, age) {
  return `${this.firstName} ${this.lastName}, ${role} from ${country}, age : ${age}`;
};

// object 1
const player1 = {
  firstName: "Virat",
  lastName: "Kohli",
};

// object 2
const player2 = {
  firstName: "Hardik",
  lastName: "Pandya",
};

// player1 and player2 are borrowing outside function getPlayerInfo()
const player1FullInfo = getPlayerInfo.bind(player1, "Batsman", "India");
console.log(player1FullInfo(33));
// Virat Kohli, Batsman from India, age : 33

const player2FullInfo = getPlayerInfo.bind(player2, "All-Rounder", "India");
console.log(player2FullInfo(28));
// Hardik Pandya, All-Rounder from India, age : 28

// 💡 polyfill for bind method

// 👉 1) build from scratch
Function.prototype.customBind = function (context, ...args) {
  let currentContext = context || globalThis;

  // Symbol() ensures that new method won't override existing methods of currentContext
  let newProp = Symbol();

  currentContext[newProp] = this;
  return function (...outerArgs) {
    let result = currentContext[newProp](...args, ...outerArgs);
    delete currentContext[newProp];
    return result;
  };
};

// 👉 2) Using apply method
Function.prototype.customBind = function (context, ...args) {
  let borrowedFunc = this;
  return function (...outerArgs) {
    return borrowedFunc.apply(context, [...args, ...outerArgs]);
  };
};

// 👉 3) Using call method
Function.prototype.customBind = function (context, ...args) {
  let borrowedFunc = this;
  return function (...outerArgs) {
    return borrowedFunc.call(context, ...args, ...outerArgs);
  };
};

const player1FullInfoCustom = getPlayerInfo.customBind(
  player1,
  "Batsman",
  "India"
);
console.log(player1FullInfoCustom(33));

const player2FullInfoCustom = getPlayerInfo.customBind(
  player2,
  "All-Rounder",
  "India"
);
console.log(player2FullInfoCustom(28));

// 💡Use of bind (Binding a function to an object)

name = "jayesh";
const person = {
  name: "jc",
  getName: function () {
    console.log(this.name);
  },
};

person.getName(); // jc normal case

const getNameOutside = person.getName;
getNameOutside(); //  jayesh, "this" refers to global

const getNameBounded = person.getName.bind(person);
getNameBounded(); // jc person obj bounded
