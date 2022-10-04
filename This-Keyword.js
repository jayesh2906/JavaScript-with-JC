/* 💡"JavaScript-with-JC"
👉 "this" keyword in deep
In Javascript, "this" depends on the context on which "this" is currently in. this keyword refers to different objects depending on how it is used.

💡 7 Things you should know about "this"
👉 Rule 1) function with new keyword ( this refers to the function object )
👉 Rule 2) call, apply, bind ( this refers to the obj passed to methods )
👉 Rule 3) method in object ( this refers to the object )
👉 Rule 4) simple function ( this refers to window object, undefined in strict mode )
👉 Rule 5) multiple rules ( Higher rule has given priority )
👉 Rule 6) arrow function ( inherits "this" from its outer function )
👉 Miscellaneous important things about "this"
*/

// 💡 6 Rules of "this"
// Rule 1) function with new keyword ( this refers to the function object )
function Person() {
  console.log(this); // Person {}
  this.name = "Jayesh";
  this.age = 24;
  console.log(this); // Person { name: 'Jayesh', age: 24 }
}

new Person();

// Rule 2) call, apply, bind ( this refers to the obj passed to methods)
const player = {
  name: "Virat",
  role: "Batsman",
};

// Note:- Normal function ( not an arrow function )
const getPlayerInfo = function (country) {
  console.log(this); // { name: 'Virat', role: 'Batsman' }
  console.log(this.name, this.role, country); // Virat Batsman India
};

getPlayerInfo.call(player, "India"); // here, player borrowing getPlayerInfo function

// Rule 3) method in object ( this refers to the object )
const obj = {
  name: "Jc",
  displayName() {
    console.log(this); // {name: 'Jc', displayName: ƒ}
    console.log(this.name); // Jc
  },
};

obj.displayName();

// Rule 4) simple function ( undefined in strict mode)
function simpleFunc() {
  console.log(this); // window object
}

simpleFunc(); // or window.simpleFunc()

// Rule 5) multiple rules :- Higher rule has more priority
const obj1 = {
  name: "Jayesh",
  showName() {
    console.log(this.name); // Jc
  },
};
const obj2 = {
  name: "Jc",
};

obj1.showName.call(obj2); // Jc precedence of Rule 2) Call method > Rule 3) method in object

// Rule 6) arrow function :- arrow function does not create its own execution context
// inherits "this" from its outer function.

// case 1:- arrow function without any parent function
const arrowFunc = () => {
  // ( Global function's "this" is window object, arrowFunc inherits "this" of Global function in this case )
  console.log(this); // window object
};
arrowFunc();

// case 2:- arrow function inside normal function
const animal = {
  name: "cat",
  displayName() {
    console.log(this); // {name: 'cat', displayName: ƒ}
    console.log(this.name); // cat

    // inner arrow function inherits "this" from its outer normal funtion
    const innerArrow = () => {
      console.log(this); // {name: 'cat', displayName: ƒ}
      console.log(this.name); // cat
    };
    innerArrow();
  },
};

animal.displayName();

// case 3 :- arrow function inside an arrow function
const outerArrow = () => {
  console.log(this); //  window object ( Global function's "this" is window object )

  // inner arrow function inherits "this" from its outer funtion
  const innerArrow = () => {
    console.log(this); // window object
  };
  innerArrow();
};
outerArrow();

// case 4:- arrow function inside function constructor ( new keyword )
function OuterFunction() {
  this.name = "jayeh";
  console.log(this); // OuterFunction { name: 'jayeh' }

  // inner arrow function inherits "this" from its outer funtion
  const innerArrow = () => {
    console.log(this); // OuterFunction { name: 'jayeh' }
  };
  innerArrow();
}
new OuterFunction();

// 💡 Miscellaneous important things about "this"

// "this" inside nested normal function

const myObj = {
  name: "Jc",
  outerNormal() {
    console.log(this); // {name: 'Jc', outerNormal: ƒ}

    function innerNormal() {
      console.log(this); // window object
    }
    innerNormal();
  },
};
myObj.outerNormal();

// "this" inside normal function having outer arrow function

const myobj2 = {
  name: "Jc",
  outerArrowFoo: () => {
    console.log(this); // window object

    function innerNormal() {
      console.log(this); // window object
    }
    innerNormal();
  },
};
myobj2.outerArrowFoo();

// "this" inside nested objects

const outerObj = {
  name: "Jc",
  innerObj: {
    name: "inner Jc",
    getName() {
      console.log(this.name); // inner Jc
    },
  },
};
outerObj.innerObj.getName();
