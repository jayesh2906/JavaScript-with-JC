/* 💡"JavaScript-with-JC"
👉 Memoization and Higher Order Functions 
💡 Memoization is a technique for speeding up applications by caching the results of 
   expensive function calls and returning them when the same inputs are passed again.
   memoization makes applications more efficient and faster.

💡 Higher order functions are functions that either accept functions as an argument or return functions 
💡 Some of the Higher order functions that take first class citizen function as an argument. 
👉 1) Array.prototype.forEach
👉 2) Array.prototype.filter
👉 3) Array.prototype.map
👉 4) Array.prototype.reduce
👉 5) Array.prototype.some
👉 6) Array.prototype.every
👉 7) Array.prototype.find
👉 8) Array.prototype.findIndex  
*/

// 💡 Memoization Example

// Expensive function taking longer time ( Approx. 2 sec )
function squareNumber(number) {
  let start = new Date().getTime();
  let end = start + 2000;

  while (start < end) {
    start = new Date().getTime();
  }

  return number * number;
}

// Higher order function
function memoize(cbFunc) {
  //  👇 a cache object
  let cache = {};

  // 👇 inner anonymous function has access to cache object due to closures
  return (...args) => {
    //  👇 argsKey is key of cache object, Stringifying array of arguments into key using JSON.stringify
    let argsKey = JSON.stringify(args);

    //  👇 execute `cbFunc` only if there is no cached value
    if (!cache[argsKey]) {
      cache[argsKey] = cbFunc(...args);
    }

    //  👇 return the cached value
    return cache[argsKey];
  };
}

const memoizedSquare = memoize(squareNumber);

console.time("First function call");
console.log(memoizedSquare(2)); // takes 2 sec, 4
console.timeEnd("First function call"); // First function call: 2.005s

console.time("Second function call");
console.log(memoizedSquare(3)); // takes 2 sec, 9
console.timeEnd("Second function call"); // Second function call: 2.000s

console.time("Third function call");
console.log(memoizedSquare(5)); // takes 2 sec, 25
console.timeEnd("Third function call"); // Third function call: 2.001s

console.time("Fourth function call");
console.log(memoizedSquare(2)); // returns cached value 4
console.timeEnd("Fourth function call"); // Fourth function call: 0.324ms

// 💡 Higher Order Function Example

// Higher order function taking first class citizen function as an argument
function calculate(cbfunc, radius) {
  return cbfunc(radius);
}

// first class citizen function
function area(radius) {
  return Math.PI * radius * radius;
}

// first class citizen function
function perimeter(radius) {
  return 2 * Math.PI * radius;
}

const areaOfCircle = calculate(area, 5);
const perimeterOfCircle = calculate(perimeter, 5);

console.log(areaOfCircle); // 78.53981633974483
console.log(perimeterOfCircle); // 31.41592653589793
