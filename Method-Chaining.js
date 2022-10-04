/* 💡"JavaScript-with-JC"
👉 Method Chaining 
Method chaining is a chain of methods where each method shares the same reference means each method returns an object, allowing the calls to be 
chained together in a single statement. Method chaining is used to write more readable code.

💡 this keyword in JavaScript refers to the current object in which it is called. when a method returns this means it returns an instance of the object in which
it is returned and with returned instance of an object, we can call next method of an object. In this way, we achieve method chaining in JavaScript.
*/

// 💡 Three ways of implementing method chaining.

// 👉 1) Using Objects
const calculate = {
  total: 0,
  add: function (number) {
    this.total += number;
    return this;
  },
  multiply: function (number) {
    this.total *= number;
    return this;
  },
  divide: function (number) {
    this.total /= number;
    return this;
  },
  subtract: function (number) {
    this.total -= number;
    return this;
  },
};

calculate.add(5).multiply(10).divide(5).subtract(5);
console.log(calculate.total); // 5

// 👉 2) Using function Constructor.
function Calculator() {
  this.total = 0;

  this.add = function (number) {
    this.total += number;
    return this;
  };
  this.multiply = function (number) {
    this.total *= number;
    return this;
  };
  this.divide = function (number) {
    this.total /= number;
    return this;
  };
  this.subtract = function (number) {
    this.total -= number;
    return this;
  };
}

const calci = new Calculator();
calci.add(5).multiply(10).divide(5).subtract(5);
console.log(calci.total); // 5

// 👇 we can create a new instance here
const newCalci = new Calculator();
newCalci.add(15).multiply(20).divide(5).subtract(20);
console.log(newCalci.total); // 40

// 👉 3) Using function as Closure or factory function

// 👇 we are forming closure and returning a new object from it
const CalculatorFunc = function () {
  return {
    total: 0,
    add: function (number) {
      this.total += number;
      return this;
    },
    multiply: function (number) {
      this.total *= number;
      return this;
    },
    divide: function (number) {
      this.total /= number;
      return this;
    },
    subtract: function (number) {
      this.total -= number;
      return this;
    },
    result: function () {
      return this.total;
    },
  };
};

const result = CalculatorFunc()
  .add(5)
  .multiply(10)
  .divide(5)
  .subtract(5)
  .result();
console.log(result); // 5

const result2 = CalculatorFunc()
  .add(15)
  .multiply(20)
  .divide(5)
  .subtract(20)
  .result();
console.log(result2); // 40
