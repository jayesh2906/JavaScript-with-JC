/* 💡"JavaScript-with-JC"
👉 Polyfill of String.prototype.split 
*/

const message = "This is the string with two the in it.";

const result1 = message.split(" ", 4);
console.log(message); // This is the string with two the in it.
console.log(result1); // [ 'This', 'is', 'the',  'string', 'with', 'two', 'the',  'in', 'it.' ]

const result2 = message.split("the");
console.log(result2); // [ 'This is ', ' string with two ', ' in it.' ]

const result3 = message.split("");
console.log(result3);
/* ['T', 'h', 'i', 's', ' ', 'i', 's',' ', 't', 'h', 'e', ' ', 's', 't','r', 'i', 'n', 'g', ' ', 
    'w', 'i','t', 'h', ' ', 't', 'w', 'o', ' ','t', 'h', 'e', ' ', 'i', 'n', ' ','i', 't', '.' ]
*/

const result4 = message.split();
console.log(result4); // [ 'This is the string with two the in it.' ]

const result5 = message.split("not there");
console.log(result5); // [ 'This is the string with two the in it.' ]

// 👇 Polyfill of String.prototype.split
String.prototype.customSplit = function (separator, limit) {
  const string = this;
  const result = [];

  if (separator === "") {
    return Array.from(string);
  }

  const splitString = (str) => {
    if (result.length >= limit) {
      return;
    }
    const index = str.indexOf(separator);
    if (index >= 0) {
      result.push(str.substring(0, index));
      splitString(str.substring(index + separator.length));
    } else {
      result.push(str);
    }
  };

  splitString(string);
  return result;
};

const resultCustom1 = message.customSplit(" ", 4);
console.log(message); // This is the string with two the in it.
console.log(resultCustom1); // [ 'This', 'is', 'the',  'string' ]

const resultCustom2 = message.customSplit("the");
console.log(resultCustom2); // [ 'This is ', ' string with two ', ' in it.' ]

const resultCustom3 = message.customSplit("");
console.log(resultCustom3);
//['T', 'h', 'i', 's', ' ', 'i', 's',' ', 't', 'h', 'e', ' ', 's', 't','r', 'i', 'n', 'g', ' ',
//'w', 'i','t', 'h', ' ', 't', 'w', 'o', ' ','t', 'h', 'e', ' ', 'i', 'n', ' ','i', 't', '.' ]

const resultCustom4 = message.customSplit();
console.log(resultCustom4); // [ 'This is the string with two the in it.' ]

const resultCustom5 = message.customSplit("not there");
console.log(resultCustom5); // [ 'This is the string with two the in it.' ]
