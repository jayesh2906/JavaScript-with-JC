/* 💡"JavaScript-with-JC" 
👉 Prototype and Prototype Inheritance 
The prototype is an object that is associated with every functions and objects by default in JavaScript,
Every object includes __proto__ property that points to prototype object of a function that created the object.

💡Difference between prototype and  __proto__
prototype is a property of a Function object. It is the prototype of objects constructed by that function.
 __proto__ is an internal property of an object, pointing to its prototype.
*/

// 👉 Prototype
// function constructor, Person.prototype => Object.prototype => null
const Person = function (name, age) {
  // instance members created for each object separately consume extra memory
  this.name = name;
  this.age = age;
  this.getName = function () {
    console.log("name is", this.name);
  };
};

const jayesh = new Person("jayesh", 24);
// jayesh.__proto__ => Person.prototype => Object.prototype => null
console.log("jayesh", jayesh);
/* output
age: 24;
getName: ƒ(); => method created separately for jayesh object consume extra memory
name: "jayesh";
*/
jayesh.getName(); // name is jayesh
console.log(jayesh.__proto__); // Person.prototype
console.log(jayesh.__proto__ === Person.prototype); // true
console.log(Object.getPrototypeOf(jayesh) === Person.prototype); // true
console.log(jayesh.__proto__.__proto__); // Object.prototype
console.log(jayesh.__proto__.__proto__.__proto__); // null

const sam = new Person("sam", 25);
// sam.__proto__ => Person.prototype => Object.prototype => null
console.log("sam", sam);
/* output
age: 25;
getName: ƒ(); => method created separately for sam object consume extra memory
name: "sam";
*/
sam.getName(); // name is sam

// Now, Let's create prototype member ( common parent inherit member for all objects ) saves memory.
Person.prototype.getAge = function () {
  console.log("age is", this.age);
};

console.log("After adding getAge fn as Prototype member");
console.log("jayesh", jayesh);
/* output
age: 24;
getName: ƒ(); => method created separately for jayesh object consume extra memory
name: "jayesh";
*/
console.log("sam", sam);
/* output
age: 25;
getName: ƒ(); => method created separately for sam object consume extra memory
name: "sam";
*/

console.log("Person.prototype", Person.prototype);
/*output
getAge: ƒ () => common method sharable with jayesh and sam object saves memory
constructor: ƒ (name, age) => function constructor
[[Prototype]]: Object => Object.Prototype => null
*/

// only one copy of getAge() will be created inside Person.prototype
jayesh.getAge(); // age is 24
sam.getAge(); // age is 24

// now let's add one new property to jayesh
jayesh.lastName = "Choudhary";
console.log(jayesh);
/* output
age: 24
getName: ƒ ()
lastName: "Choudhary" // new property added only in jayesh obj not in Person.prototype
name: "jayesh"
*/

// now let's check how to get all keys of object
// 1) get instance members key
console.log(Object.keys(jayesh));
// ['name', 'age', 'getName', 'lastName']

// 2) get Instance + prototype members key (Recommended)
for (let key in jayesh) {
  console.log(key);
}
// name, age, getName, lastName, getAge(Prototype member)

// Now, Let's see Prototype inheritance

// Parent function contructor Parent.prototype => Object.prototype => null
const Parent = function (name, age) {
  //instance member
  this.name = name;
  this.age = age;
};

// adding prototype member to Parent
Parent.prototype.getNameAge = function () {
  console.log("name", this.name, "age", this.age);
};

// creating object of Parent function constructor
const joseph = new Parent("joseph", 35);
joseph.getNameAge(); // name joseph age 35

// Child function contructor Child.prototype => Object.prototype => null
const Child = function (name, age, isCrying) {
  // function constructor borrowing using call method (inheriting instance members)
  Parent.call(this, name, age);
  this.isCrying = isCrying;
};

// Now we have to make Child.prototype points to Parent.Prototype (inheriting prototype members)
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
// After above 2 steps, Child.prototype => Parent.prototype => Object.prototype => null

const josephBaby = new Child("josephBaby", 3, true);
console.log(josephBaby);
josephBaby.getNameAge(); // name josephBaby age 3, child is inheriting the property getNameAge of parent.
