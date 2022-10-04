/* 💡"JavaScript-with-JC"
👉 Map, Set, WeakMap, and WeakSet ( ES6 Data Structures ) */

// 💡Map Object
// 👉 The Map object is a collection of key-value pairs having keys of any type ( functions, objects, primitive )
// 👉 A Object's keys must be either a String or a Symbol whereas Map allows any type of key.
// 👉 Map remembers the original insertion order of the keys.
// 👉 A key in the Map may only occur once; it is unique in the Map's collection.

// 💡 Creation of Map :-
// 👉 1) Create Map Obj by Passing an array :-
const items = new Map([
  ["shirts", 150],
  ["pants", 200],
  ["shoes", 100],
]);

console.log(items); // Map(3) {'shirts' => 150, 'pants' => 200, 'shoes' => 100}

// 👉 2) Create Map Obj by new Map() and Map.set() :-
const players = new Map();
players.set("Virat", "Batsman");
players.set("Hardik", "All-Rounder");
players.set("Bhumrah", "Bowler");

console.log(players); // Map(3) {'Virat' => 'Batsman', 'Hardik' => 'All-Rounder', 'Bhumrah' => 'Bowler'}

// 👉 check size of map using map.size
console.log(players.size); // 3

// 👉 get value using map.get(key)
console.log(players.get("Hardik")); // All-Rounder
console.log(players.get("Rishab")); // undefined

// 👉 check value exists using map.has(key)
console.log(players.has("Hardik")); // true
console.log(players.has("Rishab")); // false

// 💡 Map Iteration :-
// 👉 1) map.keys()
console.log(players.keys()); // [Map Iterator] { 'Virat', 'Hardik', 'Bhumrah' }

// 👉 2) map.values()
console.log(players.values()); // [Map Iterator] { 'Batsman', 'All-Rounder', 'Bowler' }

// 👉 3) map.entries()
console.log(players.entries());
/* 👇 output 
[Map Entries] {
  [ 'Virat', 'Batsman' ],
  [ 'Hardik', 'All-Rounder' ],
  [ 'Bhumrah', 'Bowler' ]
} 
*/

// 👉 4) Iterating Map with for...of
for (let [key, value] of players) {
  console.log("name", key, "Role", value);
}
/* 👇 output
name Virat Role Batsman
name Hardik Role All-Rounder
name Bhumrah Role Bowler 
*/

// 👉 5) Iterating Map with forEach()
players.forEach((value, key) => {
  console.log("name", key, "Role", value);
});
/* 👇 output
name Virat Role Batsman
name Hardik Role All-Rounder
name Bhumrah Role Bowler 
*/

// 👉 delete value using map.delete(key)
console.log(players.delete("Hardik")); // true
console.log(players.delete("Rishab")); // false
console.log(players); // Map(3) { 'Virat' => 'Batsman', 'Bhumrah' => 'Bowler' }

// 👉 clear all values using map.clear()
console.log(players.clear()); // undefined
console.log(players); // Map(0) {}

// 💡 Set Object
// 👉 Set objects are collections of value of any type ( primitive or object).
// 👉 A value in the Set may only occur once. It is unique in the Set's collection.
// 👉 Set remembers the original insertion order of the values.

// 💡 Creation of Set
// 👉 1) Create Set Obj by Passing an array :-
const numbers = [1, 2, 3, 4, 5, 5];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers); // Set(5) { 1, 2, 3, 4, 5 }

const uniqueNumbersArray = [...new Set(numbers)];
console.log(uniqueNumbersArray); // [ 1, 2, 3, 4, 5 ]

// 👉 2) Create Set Obj by new Set() and Set.add() :-
const persons = new Set();
persons.add("Jayesh");
persons.add("Sam");
persons.add("John");
console.log(persons); // Set(3) { 'Jayesh', 'Sam', 'John' }

// 👉 get size using set.size
console.log(persons.size); // 3

// 👉 check value exists using set.has(value)
console.log(persons.has("Jayesh")); // true
console.log(persons.has("Jc")); // false

// 💡 Set Iteration
// 👉 1) set.keys()
console.log(persons.keys()); // [Set Iterator] { 'Jayesh', 'Sam', 'John' }

// 👉 2) set.values()
console.log(persons.values()); // [Set Iterator] { 'Jayesh', 'Sam', 'John' }

// 👉 3) set.entries()
console.log(persons.entries());
/* 👇 output
[Set Entries] {
  [ 'Jayesh', 'Jayesh' ],
  [ 'Sam', 'Sam' ],
  [ 'John', 'John' ]
}
*/

// 👉 4) Iterating Set with for...of
for (let value of persons) {
  console.log(value);
}
/* 👇 output
Jayesh
Sam
John
*/

// 👉 5) Iterating Set with forEach
persons.forEach((value) => {
  console.log(value);
});
/* output
Jayesh
Sam
John
*/

// 👉 delete value using set.delete(value)
console.log(persons.delete("Sam")); // true
console.log(persons.delete("Jc")); // false
console.log(persons); // Set(2) { 'Jayesh', 'John' }

// 👉 clear all values using set.clear()
console.log(players.clear()); // undefined
console.log(players); // Map(0) {}

// 💡 WeakMap Object
// 👉 A WeakMap is a collection of key/value pairs whose keys must be objects and values of any.
// 👉 Primitive data types as keys are not allowed in WeakMap.
// 👉 WeakMap does not remember the original insertion order of the keys.
// 👉 WeakMap does not support iteration and methods keys(), values(), entries()

const students = new WeakMap();
let key1 = {
  id: 1,
};
let student1 = {
  name: "sam",
  class: "6th",
};

let key2 = {
  id: 2,
};
let student2 = {
  name: "monu",
  class: "7th",
};

students.set(key1, student1);
students.set(key2, student2);
console.log(students);
/* 👇 output
[[Entries]]
0: {Object => Object}
key: {id: 2}
value: {name: 'monu', class: '7th'}
1: {Object => Object}
key: {id: 1}
value: {name: 'sam', class: '6th'} 
*/

// 👉 get value using WeakMap.get(key)
console.log(students.get(key2)); // { name: 'monu', class: '7th' }

// 👉 check key exists using WeakMap.has(key)
console.log(students.has(key1)); // true
console.log(students.has(key2)); // true

// 👉 delete key-value using WeakMap.delete(key)
console.log(students.delete(key1)); // true
console.log(students);
/* 👇 output
[[Entries]]
0: {Object => Object}
key: {id: 2}
value: {name: 'monu', class: '7th'}
*/

// 💡 WeakSet Object
// 👉 WeakSet objects are collections of objects ( primitive types not allowed ).
// 👉 Each object in a WeakSet may occur only once, all objects in a WeakSet's collection are unique.
// 👉 WeakSet does not remember the original insertion order of the keys.
// 👉 WeakSet does not support size, iteration and methods keys(), values(), entries().

const employees = new WeakSet();

let employee1 = {
  name: "John",
  experience: "5 years",
};

let employee2 = {
  name: "Steve",
  experience: "8 years",
};

employees.add(employee1);
employees.add(employee2);
console.log(employees);

/* 👇 output 
[[Entries]]
0: value: {name: 'Steve', experience: '8 years'}
1: value: {name: 'John', experience: '5 years'}
*/

// 👉 check key exists using WeakSet.has(key)
console.log(employees.has(employee1)); // true
console.log(employees.has(employee2)); // true

// 👉 delete key-value using WeakSet.delete(key)
console.log(employees.delete(employee1)); // true
console.log(employees);
/* 👇 output 
[[Entries]]
0: value: {name: 'Steve', experience: '8 years'}
*/
