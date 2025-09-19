/*
Higher-Order Functions:
A higher-order function (HOF) is a function that either:
1.Takes another function as an argument, OR
2. Returns a function.
This is super common in JavaScript (e.g., map, filter, reduce).
*/
//Example 1: Function as argument
// function greet(name) {
//   return "Hello, " + name;
// }

// function processUserInput(callback) {
//   let name = "Rafi";
//   console.log(callback(name));
// }

// processUserInput(greet); // Hello, Rafi

//processUserInput takes another function (greet) as input.

//Example 2: Function returning another function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

//multiplier returns a new function customized with factor.
//This is how libraries like lodash or React hooks are built.

//Higher-order functions → Functions can take/return other functions (powerful for reusability).