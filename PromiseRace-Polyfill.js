/* 💡"JavaScript-with-JC"
👉 Polyfills of Promise.all, Promise.any, and Promise.race

Promise.all() - It executes all passed promises parallelly and improves the performance of the application
💡Promise.all() Cases :-
1) If all promises resolve, returns the array of results of all promises resolved.
2) If any promise fails, return the rejected promise error.
3) If passed empty [], returns empty [].

Promise.any() - It executes all passed promises parallelly and returns the first resolved promise result.
💡Promise.any() Cases :-
1) If no promise passes, returns the AggregateError "All promises were rejected".
2) If passed empty [], returns error.

Promise.race() - It executes all passed promises parallelly and returns the first resolved or rejected promise result.
💡Promise.race() Case :-
1) If passed empty [], forever pending.
*/
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1st Promise resolved!");
  }, 1000);
});

const p2 = Promise.reject("2nd Promise rejected!");

const p3 = 3;

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let status = true;
    if (status) {
      resolve("4th Promise resolved!");
    } else {
      reject("4th Promise rejected!");
    }
  }, 2000);
});

Promise.race([p1, p2, p3, p4])
  .then((result) => {
    console.log("result race", result); // 2nd Promise rejected!
  })
  .catch((error) => {
    console.log("error race", error);
  });

//💡 Polyfill of Promise.race
Promise.customRace = function (promisesArray) {
  // 👇 return a new promise
  return new Promise((resolve, reject) => {
    // 👇 execute each promise of promisesArray
    for (let i = 0; i < promisesArray.length; i++) {
      Promise.resolve(promisesArray[i]).then(
        // 👇 return first resolved or rejected promise
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
};

Promise.customRace([p1, p2, p3, p4])
  .then((result) => {
    console.log("result customRace", result); // 2nd Promise rejected!
  })
  .catch((error) => {
    console.log("error customRace", error);
  });
