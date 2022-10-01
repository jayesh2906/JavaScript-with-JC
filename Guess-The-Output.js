/* 💡"JavaScript-with-JC" - Guess the Output? */

// MCQ-1
function MCQ1() {
  const person = {
    name: "Jayesh",
    displayName1: function () {
      console.log("name1", this.name);
    },
    displayName2: () => {
      console.log("name2", this.name);
    },
  };
  person.displayName1();
  person.displayName2();

  // 👍A) name1 Jayesh , name2 Jayesh
  // 💡B) name1 Jayesh , name2 undefined
  // 💖C) name1 Jayesh , name2
  // 🤔D) name1 , name2 Jayesh

  /* 
  In window browser answer is C) name1 Jayesh , name2 because arrow function inherits "this" from its outer function where "this" is window.
  and window has by default property name that is used for setting or returning the name of a window and in above case window.name is empty string.
  
  In other compilers answer is B) name1 Jayesh , name2 undefined because arrow function inherits "this" from its outer function where "this" refers to global object.
  */
}
// MCQ1();
