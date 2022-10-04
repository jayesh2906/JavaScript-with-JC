/* 💡"JavaScript-with-JC"
👉 Flatten array implementation - Non recursive approach.
*/
const numbers = [1, 2, 3, [4, 5], 6, [7, [8, 9], 10]];

const flatten = function (array) {
  let stack = [...array];
  let result = [];

  while (stack.length) {
    let last = stack.pop();
    if (Array.isArray(last)) {
      stack.push(...last);
    } else {
      result.push(last);
    }
  }
  return result.reverse();
};

console.log(flatten(numbers));
