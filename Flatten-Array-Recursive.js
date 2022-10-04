/* 💡"JavaScript-with-JC"
👉Array.prototype.flat and Its Polyfill 
Array.prototype.flat method flattens a given array up to the given depth. By default, It takes depth as 1.

💡Example -
const numbers = [1, 2, 3, [4, 5], 6, [7, [8, 9], 10]];

const result1 = numbers.flat(Infinity); // depth infinity
console.log(result1); => [ 1, 2, 3, 4, 5 , 6, 7, 8, 9 , 10 ]

const result2 = numbers.flat("1"); // depth 1 type coersion
console.log(result2); => [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ], 10 ]

const result3 = numbers.flat(); // default depth 1
console.log(result3); => [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ], 10 ]

const result4 = numbers.flat(2); // depth 2
console.log(result4); => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

👉 We can create our own custom flat( Polyfill of flat ), Check out the code below.👇 
*/

const numbers = [1, 2, 3, [4, 5], 6, [7, [8, 9], 10]];

const result1 = numbers.flat("");
const result2 = numbers.flat("1");
const result3 = numbers.flat();
const result4 = numbers.flat(2);
console.log("result1", result1);
console.log("result2", result2);
console.log("result3", result3);
console.log("result4", result4);

// flatten array low simple for loop
Array.prototype.customFlat = function (depth) {
  // If no depth, default to 1
  if (depth === undefined) {
    depth = 1;
  }

  const flatten = function (array, depth) {
    let output = [];
    // If depth is 0, return the array as it is
    if (depth < 1) {
      return array.slice();
    }

    // Otherwise, concatenate into the parent array
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        output = output.concat(flatten(array[i], depth - 1));
      } else {
        output.push(array[i]);
      }
    }

    return output;
  };

  return flatten(this, depth);
};

// flatten array medium forEach method
Array.prototype.customFlat = function (depth) {
  // If no depth, default to 1
  if (depth === undefined) {
    depth = 1;
  }

  const flatten = function (array, depth) {
    let output = [];
    // If depth is 0, return the array as it is
    if (depth < 1) {
      return array.slice();
    }

    // Otherwise, concatenate into the parent array
    array.forEach((value) =>
      Array.isArray(value)
        ? (output = output.concat(flatten(value, depth - 1)))
        : output.push(value)
    );

    return output;
  };

  return flatten(this, depth);
};

// flatten array hard reduce method
Array.prototype.customFlat = function (depth) {
  // If no depth, default to 1
  if (depth === undefined) {
    depth = 1;
  }

  const flatten = function (array, depth) {
    // If depth is 0, return the array as it is
    if (depth < 1) {
      return array.slice();
    }

    // Otherwise, concatenate into the parent array
    return array.reduce((acc, curr) => {
      return acc.concat(Array.isArray(curr) ? flatten(curr, depth - 1) : curr);
    }, []);
  };

  return flatten(this, depth);
};

const resultCustom1 = numbers.customFlat("");
const resultCustom2 = numbers.customFlat("1");
const resultCustom3 = numbers.customFlat();
const resultCustom4 = numbers.customFlat(2);

console.log("resultCustom1", resultCustom1);
console.log("resultCustom2", resultCustom2);
console.log("resultCustom3", resultCustom3);
console.log("resultCustom4", resultCustom4);
