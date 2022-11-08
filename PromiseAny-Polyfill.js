/* 💡"JavaScript-with-JC"
👉 Promise.any() and Its Polyfill
Promise.any() - It executes all passed promises concurrently and returns the first resolved promise result.

💡Promise.any() Cases :-
1) If no promise passes, returns the AggregateError "All promises were rejected".
2) If passed empty [], returns error.
*/

require("core-js");
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("1st Promise rejected!");
  }, 1000);
});

const p2 = Promise.reject("2nd Promise rejected!");

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let status = true;
    if (status) {
      resolve("3rd Promise resolved!");
    } else {
      reject("3rd Promise rejected!");
    }
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((result) => {
    console.log("result any", result);
  })
  .catch((error) => {
    console.log("error any", error);
  });

// 💡 Polyfill of Promise.any
Promise.customAny = function (promisesArray) {
  // 👇 return a new promise
  return new Promise((resolve, reject) => {
    const errors = [];

    // 👇 to check how many promises are rejected
    let failedCount = 0;

    // 👇 if passed as empty [] reject
    if (promisesArray.length === 0) {
      reject(new Error());
    }

    // 👇 execute each promise of promisesArray
    for (let i = 0; i < promisesArray.length; i++) {
      Promise.resolve(promisesArray[i])
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          // 👇 if promise fails store its error and increment the count
          failedCount++;
          errors[i] = error;

          // 👇 if all the promises are failed,
          //reject and return the aggreagate error
          if (failedCount === promisesArray.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    }
  });
};

Promise.customAny([p1, p2, p3])
  .then((result) => {
    console.log("result customAny", result); // 3rd Promise resolved!
  })
  .catch((error) => {
    console.log("error customAny", error);
    console.log(error instanceof AggregateError);
    console.log(error.message);
    console.log(error.name);
    console.log(error.errors);
  });
