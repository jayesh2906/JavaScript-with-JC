/* 💡"JavaScript-with-JC"
👉 Async-await Modern approach for handling Promises 
The async and await keywords provide a way to handle the asynchronous tasks in a synchronous manner.
async/await allows promise-based behavior to be written in a cleaner way,

💡We can handle promises using async await :-
 1) Sequentially
 2) Concurrently 
*/

// 💡Let's take a simple Example -
// generateNumber 👇 is a promise which is created by promise constructor
function simpleExample() {
  const generateNumber = new Promise((resolve, reject) => {
    console.log("generating number...");
    setTimeout(() => {
      let number = Math.floor(Math.random() * 10);
      if (number >= 5) {
        resolve(`number generated successfully ${number}.`);
      } else {
        reject("problem in generating number!");
      }
    }, 1000);
  });

  // handling promise in a cleaner way using async await
  const doTask = async () => {
    try {
      const result = await generateNumber;
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Promise is settled, either fulfilled or rejected");
    }
  };
  doTask();
}
// simpleExample()

// 💡 1) Sequential Async await
function sequentialAsyncAwait() {
  const addItmesToCart = () => {
    return new Promise((resolve, reject) => {
      const items = [
        { id: 1, name: "Shoe", price: 2999 },
        { id: 1, name: "T-shirt", price: 1499 },
      ];
      setTimeout(() => {
        if (items) {
          resolve("Items added Successfully to the cart!");
        } else {
          reject("Your cart is empty, Please add Items!");
        }
      }, 1000);
    });
  };

  const addShippingAddress = () => {
    const address = "L-3, xyz, India";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (address) {
          resolve("Address added Successfully!");
        } else {
          reject("No address added!");
        }
      }, 1000);
    });
  };

  const makePayment = () => {
    const paymentStatus = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (paymentStatus) {
          resolve("Payment Successfull!");
        } else {
          reject("Payment Failed!");
        }
      }, 1000);
    });
  };

  const orderSummary = () => {
    const orderID = "56881";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (orderID) {
          resolve(`Order Summary, ID: ${orderID}!`);
        } else {
          reject("Order Summary Failed!");
        }
      }, 1000);
    });
  };

  // handling promises using async await sequentially
  const placingOrder = async () => {
    try {
      const cartResult = await addItmesToCart();
      console.log(cartResult); // Items added Successfully to the cart!

      const shippingResult = await addShippingAddress();
      console.log(shippingResult); // Address added Successfully!

      const paymentResult = await makePayment();
      console.log(paymentResult); // Payment Successfull!

      const orderResult = await orderSummary();
      console.log(orderResult); // Order Summary, ID: 56881!
    } catch (error) {
      console.log(error);
    }
  };
  placingOrder();
}
// sequentialAsyncAwait();

// 💡 2) Concurrent Async await
function concurrentAsyncAwait() {
  const taskOne = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let status = true;
        if (status) {
          resolve("Task 1 Succeed");
        } else {
          reject("Task 1 Failed");
        }
      }, 1000);
    });
  };

  const taskTwo = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let status = true;
        if (status) {
          resolve("Task 2 Succeed");
        } else {
          reject("Task 2 Failed");
        }
      }, 2000);
    });
  };

  const taskThree = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let status = true;
        if (status) {
          resolve("Task 3 Succeed");
        } else {
          reject("Task 3 Failed");
        }
      }, 3000);
    });
  };

  const taskFour = () => {
    return new Promise((resolve, reject) => {
      resolve("Task 4 Succeed");
    });
  };

  // handling promises using async await concurrently
  const doTasks = async () => {
    const beforeTime = new Date();
    try {
      // Starts all tasks immediately
      const task1 = taskOne();
      const task2 = taskTwo();
      const task3 = taskThree();
      const task4 = taskFour();

      const task4Result = await task4;
      console.log(task4Result); // Task 4 Succeed almost instantly.

      const task3Result = await task3;
      console.log(task3Result); // Task 3 Succeed after 3 sec.

      const task2Result = await task2;
      console.log(task2Result); // Task 2 Succeed immediately after Task 3, since Task 2 is already resolved.

      const task1Result = await task1;
      console.log(task1Result); // Task 1 Succeed immediately after Task 2, since Task 1 is already resolved.

      const afterTime = new Date();
      console.log("Time Taken", afterTime - beforeTime); // Time Taken 3011 => "Only 3 Sec rather than 6 Sec( In case of Sequentially )"
    } catch (error) {
      console.log(error);
    }
  };
  doTasks();
}
// concurrentAsyncAwait();

// 💡 convert promise then catch code into async await code
import fetch from "node-fetch";
function fetchUsersList() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const userNames = data.map((user) => {
        return user.name;
      });
      console.log("userNames", userNames);
    })
    .catch((error) => {
      console.log("error", error);
    });
}
fetchUsersList();

async function fetchUsersListUsingAsyncAwait() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    const userNames = data.map((user) => {
      return user.name;
    });
    console.log("userNames Async-await", userNames);
  } catch (error) {
    console.log("error", error);
  }
}
fetchUsersListUsingAsyncAwait();
