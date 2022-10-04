/* 💡"JavaScript-with-JC"
👉 Event Loop, CallStack, Callback and Microtask Queue 

💡 CallStack :- The callStack is used by JavaScript to keep track of multiple function calls. 
CallStack maintains the order of execution of Execution Context.

💡 Callback Queue and Microtask Queue :- All the Asynchronous operations ( callback Functions )
are stored either in Callback Queue ( also known as TaskQueue or MacroTask Queue ) 
or MicroTask Queue ( Higher Priority ).

💡 Callback functions that store into MicroTask Queue ( Higher Priority )
1) Promises ( fetch api )
2) Browser Observers 
2.a) Mutation Observer
2.b) Intersection Observer
2.c) Performance Observer
2.d) Resize Observer
3) queueMicrotask api

💡 Callback functions that store into Callback Queue ( Task Queue )
1) DOM Events ( keyboard, mouse events )
2) Drag and Drop Events
3) Timers ( SetTimeout and SetInerval )

💡 Event Loop :- Event Loop continuously  monitors the callstack, callback queue and microtask queue.
and if callstack is empty and there are any tasks in callback or microtask queues, 
Event loop pushes the first task into the callstack to execute.
*/

// 💡 1) Let's take an example of Callback Queue ( Task Queue )

console.log("start");

// While execution, At this line callBackFunc will be registered to web api and
// after timeout ( one second ) callBackFunc will be stored into callback queue ( task queue ).
// event loop continuously monitors the callstack and if callstack is empty
// callBackFunc will be pushed into callstack and start executing.
setTimeout(function callBackfunc() {
  console.log("Hi, I am asynchronous task");
}, 1000);

console.log("end");

/*  👇 output  
start
end
after 1 sec
Hi, I am asynchronous task 
*/

// 💡 2) Let's take an example of Callback Queue ( Task Queue ) + MicroTask Queue ( Higher Priority )

console.log("start");

// cbFunc will be quickly stored into callback queue ( task queue ).
setTimeout(function cbFunc() {
  console.log("setTimeout completed");
});

const p1 = new Promise((resolve, reject) => {
  resolve("promise resolved");
});

// cbFuncMicro will be quickly stored into microTask ( higher priority ) queue.
p1.then(function cbFuncMicro(result) {
  console.log(result);
});

console.log("end");

/*  👇 output 
start
end
promise resolved
setTimeout completed
*/

// 💡 3) Let's take an example of queueMicroTask API ( MicroTask Queue ) + setTimeout ( Task Queue )

console.log("start");

setTimeout(function cbMacro() {
  console.log("Hi, I am asynchronous task with lower priority");
});

queueMicrotask(function cbMicro() {
  console.log("Hi, I am asynchronous task with higher priority");
});

console.log("end");

/* 👇 output
start
end
Hi, I am asynchronous task with higher priority
Hi, I am asynchronous task with lower priority
*/

// 💡 4) Starvation of Callback Queue ( Task Queue )
// When Microtask queue has lots of task inqueue,
// then Callback Queue ( Task Queue ) has to wait for long time, this case is known as starvation.

console.log("start");

// cbFunc has to wait for all Promise callback functions to execute.
setTimeout(function cbFunc() {
  console.log("setTimeout completed");
});

// Promise callback functions has more priority ( MicroTask Queue )
Promise.resolve()
  .then(() => {
    console.log("promise 1 completed");
  })
  .then(() => {
    console.log("promise 2 completed");
  })
  .then(() => {
    console.log("promise 3 completed");
  })
  .then(() => {
    console.log("promise 4 completed");
  })
  .then(() => {
    console.log("promise 5 completed");
  })
  .then(() => {
    console.log("promise 6 completed");
  })
  .then(() => {
    console.log("promise 7 completed");
  })
  .then(() => {
    console.log("promise 8 completed");
  })
  .then(() => {
    console.log("promise 9 completed");
  })
  .then(() => {
    console.log("promise 10 completed");
  });

console.log("end");

/* 👇 output
start
end
promise 1 completed
promise 2 completed
promise 3 completed
promise 4 completed
promise 5 completed
promise 6 completed
promise 7 completed
promise 8 completed
promise 9 completed
promise 10 completed
setTimeout completed
*/
