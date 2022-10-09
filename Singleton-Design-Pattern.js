/* 💡"JavaScript-with-JC"
👉 Singleton Design Pattern
The singleton design pattern is used in scenarios when we need exactly one instance of an interface (class or function).
In a singleton design pattern, only one object is created for each interface (class or function) and the same object is returned every time when called.

singleton interface (class or function) ensures that it creates only one instance, provides a global access point to the state, 
and makes sure that the instance is only created the first time.

💡Use Cases :-
👉1) Configuration object across the system.
👉2) Notification object across the system.
👉3) Context Api in React also uses SDP to create global object. 
👉4) Redux in React uses SDP to create one single immutable global object.
*/

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("I am instance");
    return object;
  }

  return {
    getInstance: function () {
      // 👇 if not an instance then create an instance else return the already created instance.
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const object1 = Singleton.getInstance();
const object2 = Singleton.getInstance();

console.log(object1); // String {'I am instance'}
console.log(object2); // String {'I am instance'}
console.log(object1 === object2); // true ( no new object is created )
