/* 💡"JavaScript-with-JC"
👉 Pipe and Compose Implementation
Pipe and Compose functions are higher order functions that are used for writing a well structured and 
clean code by avoiding nested function calls.

👉 Pipe flows from left-to-right, calling each function with the return result of the last one.
👉 Compose flows from right-to-left, calling each function with the return result of the last one.
💡Let's take an Example -
*/

// 👇 first function to fetch all players data
const getAllPlayers = (team) => {
  // console.log("fetching all players api.....");
  const india = ["virat kohli", "rohit sharma", "hardik pandya"];
  const pakistan = ["babar azam", "mohammad rizwan", "fakar zaman"];
  return team === "india" ? india : pakistan;
};

// 👇 second function to get first player
const getFirstPlayer = (players) => {
  return players[0];
};

// 👇 third function to get first name of player
const getFirstName = (player) => {
  return player.split(" ")[0];
};

// 👇 fourth function to capitalize first name
const capitalizeName = (firstName) => {
  return firstName.toUpperCase();
};

// 👇 final result here you can see we are calling nested functions and
// because of this, our code is not clean and readable.
const playerName = capitalizeName(
  getFirstName(getFirstPlayer(getAllPlayers("india")))
);

console.log(playerName); // VIRAT

// 💡 1) Implementation of pipe using simple for loop
const pipe = function (...functions) {
  return (...args) => {
    let result;
    for (let i = 0; i < functions.length; i++) {
      if (i === 0) {
        result = functions[i](...args);
      } else {
        result = functions[i](result);
      }
    }
    return result;
  };
};

// 👇 Wrapping all the functions in one pipe ( HOF ) function to avoid nested function calls
let pipedPlayerName = pipe(
  getAllPlayers,
  getFirstPlayer,
  getFirstName,
  capitalizeName
)("india");
console.log(pipedPlayerName); // VIRAT

// 💡2) Implementation of pipe using reduce method
const pipeReduce = function (...functions) {
  return (...args) => {
    return functions.reduce(
      (acc, currFunc, index) =>
        index === 0 ? currFunc(...acc) : currFunc(acc),
      args
    );
  };
};

let pipeReducePlayerName = pipeReduce(
  getAllPlayers,
  getFirstPlayer,
  getFirstName,
  capitalizeName
)("india");
console.log(pipeReducePlayerName); // VIRAT

//💡3) Implementation of compose using simple for loop
const compose = function (...functions) {
  return function (...args) {
    let result;
    for (let i = functions.length - 1; i >= 0; i--) {
      if (i === functions.length - 1) {
        result = functions[i](...args);
      } else {
        result = functions[i](result);
      }
    }
    return result;
  };
};

// 👇 Wrapping all the functions in one compose ( HOF ) function to avoid nested function calls
const composedPlayerName = compose(
  capitalizeName,
  getFirstName,
  getFirstPlayer,
  getAllPlayers
)("india");

console.log(composedPlayerName); // VIRAT

//💡4) Implementation of compose using reduceRight method
const composeReduce = function (...functions) {
  return (...args) =>
    functions.reduceRight(
      (acc, currFunc, index, arr) =>
        index === arr.length - 1 ? currFunc(...acc) : currFunc(acc),
      args
    );
};

const composeReducePlayerName = composeReduce(
  capitalizeName,
  getFirstName,
  getFirstPlayer,
  getAllPlayers
)("india");
console.log(composeReducePlayerName); // VIRAT
