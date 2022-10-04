/* 💡"JavaScript-with-JC"
👉 Hoisting
Before diving into hoisting, Let's understand how does the javaScript engine work? 
javaScript engine takes input code that goes through 3 major steps :-
1) Parsing :- Human readable code converted into Abstract syntax tree ( tokens )
2) Compilation :- Just in time compilation ( compiler + interpreter ) optimised code.
3) Execution :- Starts executing the code with the help of callstack and memory heap.

When javaScript engine starts executing the code, It creates the global execution context in callstack
Each context in callstack has two phases:-
1) Memory Creation
2) Code Execution

During Memory creation phase, JavaScript engine moves the variables and function declarations at the top of code, 
and this is known as Hoisting. 

💡 3 Things you should know about "Hoisting"
👉 Hoisting of Variables ( var, let, const and global ) ?
👉 Hoisting of Functions ( declaration and expression ) ?
👉 Hoisting of Classes ( declaration and expression ) ?
*/

// Hoisting of Variables ?

// case 1:- varibles declared with var keyword
console.log(name); // undefined
var name = "Jayesh";
console.log(name); // Jayesh

// case 2:- let and const variables ( Temporal Dead Zone :- Technically they are also hoisted )
// What is TDZ ? :- time frame between let and const varibles are hoisted to they are initialized
// let and const are allocated in diffrent memory space ( script scope ) than global scope

// let example
console.log(age); // Uncaught ReferenceError: Cannot access 'age' before initialization
let age = 24;
console.log(age); // 24

// const example
console.log(language); // Uncaught ReferenceError: Cannot access 'language' before initialization
const language = "javaScript";
console.log(language); // javaScript

// case 3:- global variables
console.log(a); // Uncaught ReferenceError: a is not defined
a = 4;
console.log(a); // 4

// Hoisting of functions ?

// case 1:- function declaration
displayName(); // Jc
function displayName() {
  console.log("Jc");
}
displayName(); // Jc

// case 2:- function expression
// with "var" keyword
getName(); // Uncaught TypeError: getName is not a function ( getName is undefined here )
var getName = function () {
  console.log("Jayesh");
};
getName(); // Jayesh

// with "let" or "const" keyword
getNameTDZ(); // Uncaught ReferenceError: Cannot access 'getNameTDZ' before initialization
const getNameTDZ = function () {
  console.log("Jayesh");
};
getNameTDZ(); // Jayesh

// case 3:- Arrow function ( similar to function expression )
// with "var" keyword
getNameArrow(); // Uncaught TypeError: getNameArrow is not a function ( getNameArrow is undefined here )
var getNameArrow = () => {
  console.log("Jayesh");
};
getNameArrow(); // Jayesh

// with "let" or "const" keyword
getNameArrowTDZ(); // Uncaught ReferenceError: Cannot access 'getNameArrowTDZ' before initialization
const getNameArrowTDZ = () => {
  console.log("Jayesh");
};
getNameArrowTDZ(); // Jayesh

// Hoisting of Classes ?

// case 1:- class declaration

// var jayesh = new Person("jayesh", 24); // Uncaught ReferenceError: Cannot access 'Person' before initialization ( TDZ )

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const jc = new Person("jc", 24);
console.log(jc); // Person { name: 'jc', age: 24 }

// case 2:- class expression

// with "var" keyword
var viru = new Player("viru"); // Uncaught TypeError: Player is not a constructor ( Player is undefined here )

var Player = class {
  constructor(name) {
    this.name = name;
  }
};

var virat = new Player("virat");
console.log(virat); // Player { name: 'virat' }

// with "let" or "const" keyword

const meow = new Animal("meow"); // Uncaught ReferenceError: Cannot access 'Animal' before initialization ( TDZ )

const Animal = class {
  constructor(name) {
    this.name = name;
  }
};

const cat = new Animal("cat");
console.log(cat); // Animal { name: 'cat' }
