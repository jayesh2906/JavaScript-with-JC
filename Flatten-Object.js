/* 💡"JavaScript-with-JC"
👉 Flatten Object implementation */

const person = {
  name: "Jayesh",
  address: {
    state: "M.P",
    country: "India",
    subAdress: {
      city: "Burhanpur",
    },
  },
  skills: {
    frontend: ["JavaScript", "React Js", "CSS"],
    backend: ["Node Js", "Mongo Db"],
  },
};

const flattenObject = (obj) => {
  const result = {};
  //// looping through obj
  for (let key in obj) {
    // checking type of key
    if (typeof obj[key] === "object") {
      // if object call flattenObject again
      const temp = flattenObject(obj[key]);

      for (let childKey in temp) {
        // concatenate key with childKey => key.childKey
        result[key + "." + childKey] = temp[childKey];
      }
    } else {
      // else store obj[key] in result directly
      result[key] = obj[key];
    }
  }

  return result;
};

const flattenPerson = flattenObject(person);
console.log(flattenPerson);
//  output
// {
//     name: "Jayesh",
//     address.state: "M.P",
//     address.country: "India",
//     address.subAdress.city: "Burhanpur",
//     skills.frontend.0: "JavaScript",
//     skills.frontend.1: "React Js",
//     skills.frontend.2: "CSS",
//     skills.backend.0: "Node Js",
//     skills.backend.1: "Mongo Db"
// }
