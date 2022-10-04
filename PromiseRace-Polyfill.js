/* 💡"JavaScript-with-JC"
👉 Promise.race() and Its Polyfill
Promise.race() - It executes all passed promises concurrently and returns the first resolved or rejected promise result.

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
