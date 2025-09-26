/*
You can create your own custom errors using throw.
This is useful when you want to signal that something unexpected happened in your code.
*/
//syntax
//throw new Error("Custom error message");
// ex-1
// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero!");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(10, 2));  //Works
//   console.log(divide(5, 0));   //Will throw an error
// } catch (error) {
//   console.error("Error:", error.message);
// }
//ex-2
// function checkAge(age) {
//   if (age < 0) throw new RangeError("Age cannot be negative.");
//   if (typeof age !== "number") throw new TypeError("Age must be a number.");
//   return "Valid age: " + age;
// }

// try {
//   console.log(checkAge(-5)); // Throws RangeError
// } catch (error) {
//   console.error(`${error.name}: ${error.message}`);
// }
// ex-3
// function add(a, b) {
//   console.log("Adding:", a, "+", b); // Debugging info
//   return a + b;
// }

// function multiply(a, b) {
//   console.log("Multiplying:", a, "*", b); // Debugging info
//   return a * b;
// }

// console.log("Final Result:", multiply(add(2, 3), 4));
// ex-4
try {
  JSON.parse("{invalidJSON}"); // Error
} catch (error) {
  console.error("JSON parsing failed:", error.message);
}
