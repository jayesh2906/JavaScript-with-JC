/* 💡"JavaScript-with-JC"
👉 Currying Implementation and Infinite Currying
Currying is a technique to convert multiple arguments function into a single argument functions (unary functions) in a sequence.

💡Note - While converting regular func to currying, Number of unary functions should be greater than or equal to Number of arguments of a regular function .

💡Two ways to perform currying :-
// 1) Using Closures
// 2) Using Bind
*/

// 💡Simple Example of Currying -

// Regular n-ary function taking 3 parameters
const addition = (a, b, c) => {
  return a + b + c;
};

const result = addition(2, 3, 5);
console.log(result); // 10

//👉 1)  let's transform it to currying using Closures

const additionCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

const resultCurryClosure = additionCurry(2)(3)(5);
console.log(resultCurryClosure); // 10

//👉 2) let's transform it to currying using Bind

const additionAll = (a, b, c) => {
  return a + b + c;
};

const additionFirst = additionAll.bind(this, 2);

// now we can get result directly by additionFirst(3,5), but this is partial application (more than 1 args)
// for transforming a pure currying, each function should have unary arguments.
console.log(additionFirst(3, 5)); //10 => partial apllication not pure currying

// binding further to get unary arguments to each function
const additionSecond = additionFirst.bind(this, 3);
const additionThird = additionSecond.bind(this, 5);

const resultCurryBind = additionThird();
console.log(resultCurryBind); // 10

// 💡Now Let's take an example of Infinite Currying -
// Implementation of sum(1)(2)(3)....(n)() 👇

const sum = (a) => {
  return (b) => {
    if (b) return sum(a + b);
    return a;
  };
};

const sumResult = sum(1)(2)(3)(4)(5)();
console.log(sumResult); // 15

// 💡converting multply(a,b,c,d) into multply(a)(b)(c)(d)

const multiply = (a, b, c, d) => {
  return a * b * c * d;
};

const value = multiply(1, 2, 3, 4);
console.log(value); // 24

function curry(callback) {
  // callback refers 👆 to multiply function here

  return function curried(...args) {
    //  👇 If no. of args >= args of multiply func, then call multiply function and get the result.
    if (args.length >= callback.length) {
      return callback(...args);
    } else {
      // 👇 inner anonymous function has access to curried func args variable due to closures.
      return (...nextArg) => {
        //  👇 recursively calling curried func until no. of args >= args of multiply func.
        return curried(...args, ...nextArg);
      };
    }
  };
}

const product = curry(multiply);
console.log(product(1)(2)(3)(4)); // 24
