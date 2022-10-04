/* 💡"JavaScript-with-JC"
👉 Callback and Callback Hell
Callback functions are first class citizens passed as an argument to higher order function,
and later on higher order function calls the callback function to perform some operation.

💡Let's take an Example -
 const DhoniFinishing = () => {
    console.log("Dhoni came to bat after 16 overs for finishing");
  };

  👇 indiaBatting is a HOF function which is taking callback fn as argument.
  const indiaBatting = (callDhoni) => {
    console.log("India's batting...");
    let overs = 16.2;
    if (overs > 16) {
      callDhoni(); // calling callback func.
    }
  };

  👇 DhoniFinishing is callback function passed as argument to HOF
  indiaBatting(DhoniFinishing);


💡Types of Callback :- 
👉 Synchronous Callback (blocking) :- Executes immediately during the execution of the higher-order function.
👉 Asynchronous Callback (non-blocking) :- Executes after the execution of the higher-order function.

💡Callback Hell :- 
👉 Callback Hell is the situation where callbacks are nested several levels deep
which makes it difficult to understand and maintain the code. It's also known as Pyramid of Doom.

💡 Avoiding Callback Hell
👉 1) Using Promises 
👉 2) Using async-await 
👉 3) Using generators
*/

function callBackExample() {
  const DhoniFinishing = () => {
    console.log("Dhoni came to bat after 16 overs for finishing");
  };

  const indiaBatting = (callDhoni) => {
    console.log("India's batting...");
    let overs = 16.2;
    if (overs > 16) {
      callDhoni();
    }
  };

  indiaBatting(DhoniFinishing);
}

function syncAsyncCallbackExample() {
  // 💡 Synchronous (blocking) and Asynchronous (non-blocking) Callbacks
  const hofFunction = (syncCallback, asyncCallback) => {
    syncCallback(); // Will execute immediately blocking the next line of code
    setTimeout(
      asyncCallback, // Will wait atleast 1 sec and execute after the hofFunction completes executing
      1000
    );
    console.log("hofFunction completed.");
  };

  const syncCallbackFunc = () => {
    console.log("I am a Synchronous callback, Will execute immediately.");
  };

  const asyncCallbackFunc = () => {
    console.log(
      `I am an Asynchronous callback, Will wait atleast 1 sec
and execute after the hofFunction completes executing.`
    );
  };

  hofFunction(syncCallbackFunc, asyncCallbackFunc);
  /* Output :-
   I am a Synchronous callback, Will execute immediately.
   hofFunction completed.
   After 1 sec 👇
   I am an Asynchronous callback, Will execute after the hofFunction completes executing. */
}

// 💡 Callback hell Example
function callbackHellExample() {
  // 1) get all persons details
  const getAllPersons = () => {
    const persons = [
      { id: 1, name: "Jay" },
      { id: 2, name: "Sam" },
      { id: 3, name: "John" },
    ];

    return persons;
  };

  // 2) get first person details
  const getFirstPerson = (allPersons) => {
    return allPersons[0];
  };

  // 3) get name of first person
  const getName = (person) => {
    return person?.name;
  };

  // 4) display the name
  const displayingName = (name) => {
    console.log("Fetched name is", name);
  };

  console.log("fetching all details....");
  setTimeout(() => {
    const allPersons = getAllPersons();
    console.log("allPersons", allPersons);

    console.log("fetching first person details....");
    setTimeout(() => {
      const person = getFirstPerson(allPersons);
      console.log("persons", person);

      console.log("fetching person name....");
      setTimeout(() => {
        const result = getName(person);

        setTimeout(() => {
          displayingName(result);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

// 💡 Using Promises
function avoidCallbackHellUsingPromises() {
  // 1) get all persons details
  const getPersons = new Promise((resolve, reject) => {
    setTimeout(() => {
      const persons = [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sam" },
        { id: 3, name: "John" },
      ];
      resolve(persons);
    }, 1000);
  });

  // 2) get first person details
  const getPerson = (persons) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(persons[0]);
      }, 1000);
    });
  };

  // 3) get name of first person
  const getPersonName = (person) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(person.name);
      }, 1000);
    });
  };

  // 4) display the name
  const displayName = (name) => {
    console.log("Fetched name is", name);
  };

  getPersons
    .then((response) => {
      console.log("all persons", response);
      return getPerson(response);
    })
    .then((response) => {
      console.log("person", response);
      return getPersonName(response);
    })
    .then((response) => {
      displayName(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

// 💡 Using async-await
function avoidCallbackHellUsingAsyncAwait() {
  // 1) get all persons data
  const getAllPersonDetails = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const persons = [
          { id: 1, name: "Jay" },
          { id: 2, name: "Sam" },
          { id: 3, name: "John" },
        ];
        resolve(persons);
      }, 1000);
    });
  };

  // 2) get first person details
  const getPerson = (persons) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(persons[0]);
      }, 1000);
    });
  };

  // 3) get name of first person
  const getPersonName = (person) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(person.name);
      }, 1000);
    });
  };

  // 4) display the name
  const displayName = (name) => {
    console.log("Fetched name is", name);
  };

  const displayFetchedName = async () => {
    try {
      const allPersons = await getAllPersonDetails();
      console.log("allPersons", allPersons);
      const person = await getPerson(allPersons);
      console.log("person", person);
      const name = await getPersonName(person);
      displayName(name);
    } catch (error) {
      console.log(error);
    }
  };
  displayFetchedName();
}

// 👇 uncomment below functions to check the output.
// callBackExample();
// syncAsyncCallbackExample();
// callbackHellExample();
// avoidCallbackHellUsingPromises();
// avoidCallbackHellUsingAsyncAwait();
