/* 💡"JavaScript-with-JC"
👉 Promise and Promise Chaining 
Promise is an object that is used for handling asynchronous operations in JavaScript.

💡Promise has 4 states :-
👉 fulfilled: Action related to the promise succeeded (resolve) => result in .then().
👉 rejected: Action related to the promise failed (reject) => result in .catch().
👉 pending: Promise is still pending i.e. not fulfilled or rejected yet.
👉 settled: Promise has fulfilled or rejected => .finally().

💡 Promise Chaining :-
Promise chaining allows you to chain together multiple asynchronous tasks 
in a specific order where one asynchronous task needs to be performed 
after the completion of other asynchronous task.

💡 We can perform Promise Chaining :-
👉 by returning a new instance of promise in then()
👉 by returning a value in then (), behind the scene it returns a new promise that immediately resolves to the return value.

💡 Benefits of Promises :-
👉 Improves Code Readability.
👉 Better handling of asynchronous operations.
👉 Better Error Handling.
*/

// 💡Let's take an Example -
function promiseExample() {
  const executor = (resolve, reject) => {
    console.log("generating number...");
    setTimeout(() => {
      let number = Math.floor(Math.random() * 10);
      if (number >= 5) {
        resolve(`number generated successfully ${number}.`);
      } else {
        reject("problem in generating number!");
      }
    }, 1000);
  };

  const generateNumber = new Promise(executor);

  generateNumber
    .then((result) => {
      console.log(result); // number generated successfully 6.
    })
    .catch((error) => {
      console.log(error); // problem in generating number!
    })
    .finally(() => {
      console.log("Promise is settled, either fulfilled or rejected");
    });
}
// promiseExample();

// 💡 1) Promise Chaining with retuning a new instance of promise in then(), Let's take an Example of E-commerce.

function promiseChainingReturningNewPromise() {
  const BuyingCartItmes = new Promise((resolve, reject) => {
    const items = [
      { id: 1, name: "Shoe", price: 2999 },
      { id: 1, name: "T-shirt", price: 1499 },
    ];
    console.log("adding items to cart");
    setTimeout(() => {
      if (items) {
        resolve(items);
      } else {
        reject("No Item added");
      }
    }, 1000);
  });

  const addShippingAddress = () => {
    const address = "L-3, xyz, India";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (address) {
          resolve(address);
        } else {
          reject("No address added");
        }
      }, 1000);
    });
  };

  const makePayment = () => {
    const paymentStatus = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (paymentStatus) {
          resolve("Payment Successfull");
        } else {
          reject("Payment Failed");
        }
      }, 1000);
    });
  };

  const orderSummary = () => {
    const orderID = "56881";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (orderID) {
          resolve(`Order Summary, ID: ${orderID}`);
        } else {
          reject("Order Summary Failed");
        }
      }, 1000);
    });
  };

  BuyingCartItmes.then((items) => {
    console.log("cart items", items);
    return addShippingAddress();
  })
    .then((address) => {
      console.log("shipping address", address);
      return makePayment();
    })
    .then((paymentInfo) => {
      console.log(paymentInfo);
      return orderSummary();
    })
    .then((orderSummary) => {
      console.log(orderSummary);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Promise is settled, either fulfilled or rejected");
    });
}
// promiseChainingReturningNewPromise();

// 💡 2) Promise Chaining with retuning a value in then ()
// ( behind the scene it returns a new promise that immediately resolves to the return value )

function promiseChainingReturningValue() {
  const doubleNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

  doubleNumber
    .then((result) => {
      console.log(result);
      return result * 2;
    })
    .then((result) => {
      console.log(result);
      return result * 2;
    })
    .then((result) => {
      console.log(result);
      return result * 2;
    })
    .then((result) => {
      console.log(result);
      return result * 2;
    })
    .then((result) => {
      console.log(result);
      return result * 2;
    });
}
// promiseChainingReturningValue();

function promisePolyfillCode() {
  const PENDING = 0;
  const FULLFILLED = 1;
  const REJECTED = 2;

  function customPromise(executer) {
    let state = PENDING;
    let value = null; // result from resolve or reject
    let handlers = []; // then callbacks
    let catcher = null; // catch callback

    function resolve(result) {
      if (state === PENDING) {
        state = FULLFILLED;
        value = result;
        handlers.forEach((handler) => handler(value)); // execute array of callbacks in then()
      }
    }

    function reject(result) {
      if (state === PENDING) {
        state = REJECTED;
        value = result;
        catcher(value); // execute callback of catch()
      }
    }

    this.then = function (successCallback) {
      if (state === FULLFILLED) {
        successCallback(value);
      } else {
        handlers.push(successCallback);
      }
    };

    this.catch = function (failureCallback) {
      if (state === REJECTED) {
        failureCallback(value);
      } else {
        catcher = failureCallback;
      }
    };

    executer(resolve, reject);
  }

  const executor = (resolve, reject) => {
    console.log("generating number...");
    setTimeout(() => {
      let number = Math.floor(Math.random() * 10);
      if (number >= 5) {
        resolve(`number generated successfully ${number}.`);
      } else {
        reject("problem in generating number!");
      }
    }, 1000);
  };

  const generateNumber = new customPromise(executor);

  generateNumber.then((result) => {
    console.log(result); // number generated successfully 6.
  });

  generateNumber.catch((error) => {
    console.log(error); // problem in generating number!
  });
}
// promisePolyfillCode();

function promisePolyfillCode2() {
  function CustomPromise(executer) {
    let OnResolve,
      OnReject,
      isFulfilled = false,
      isRejected = false,
      isCalled = false,
      value;

    function resolve(val) {
      console.log("in resolve");
      isFulfilled = true;
      value = val;
      if (typeof OnResolve === "function") {
        OnResolve(value);
        isCalled = true;
      }
    }

    function reject(val) {
      console.log("in reject");
      isRejected = true;
      value = val;
      if (typeof OnReject === "function") {
        OnReject(value);
        isCalled = true;
      }
    }

    this.then = function (callback) {
      console.log("in then");
      OnResolve = callback;

      if (isFulfilled && !isCalled) {
        isCalled = true;
        OnResolve(value);
      }
      return this;
    };

    this.catch = function (callback) {
      console.log("in catch");
      OnReject = callback;

      if (isRejected && !isCalled) {
        isCalled = true;
        OnReject(value);
      }
      return this;
    };

    try {
      executer(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  const executor = (resolve, reject) => {
    console.log("generating number...");
    setTimeout(() => {
      resolve(2);
    }, 1000);
  };

  const generateNumber = new CustomPromise(executor);

  generateNumber
    .then((result) => {
      console.log(result); // number generated successfully 6.
    })
    .catch((error) => {
      console.log(error); // problem in generating number!
    });
}
promisePolyfillCode2();
