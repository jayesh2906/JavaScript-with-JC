/* 💡"JavaScript-with-JC"
👉 apply method and Its Polyfill
apply method allows us to use the methods of another object or outside methods, apply method is used for function borrowing.

💡apply method takes first argument as object, and rest arguments as array.
💡Note - apply method executes the borrowed function immediately unlike bind ().
*/

getPlayerInfo = function (role, country) {
  return `${this.firstName} ${this.lastName}, ${role} from ${country}`;
};

const player1 = {
  firstName: "Virat",
  lastName: "Kohli",
};

const player2 = {
  firstName: "Hardik",
  lastName: "Pandya",
};

console.log(getPlayerInfo.apply(player1, ["Batsman", "India"]));
console.log(getPlayerInfo.apply(player2, ["All-Rounder", "India"]));

Function.prototype.customApply = function (context, args = []) {
  if (!Array.isArray(args)) {
    throw new Error(
      "Reminder, apply method takes array of arguments (2nd to nth)"
    );
  }
  let currentContext = context || globalThis;

  // Symbol() ensures that new method won't override existing methods of currentContext
  let newProp = Symbol();

  currentContext[newProp] = this;
  let result = currentContext[newProp](...args);
  delete currentContext[newProp];

  return result;
};

console.log(getPlayerInfo.customApply(player1, ["Batsman", "India"]));
console.log(getPlayerInfo.customApply(player2, ["All-Rounder", "India"]));
