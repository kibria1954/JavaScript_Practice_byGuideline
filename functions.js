
//Function Declaration
// function greet() {
//   console.log("Hello, World!");
// }

// greet(); // Call the function

//Function with Parameters
// function greetUser(name) {
//   console.log("Hello, " + name);
// }

// greetUser("Rafi");   // Hello, Rafi
// greetUser("Kibria"); // Hello, Kibria

// Function with Default Values
// function greetUser(name = "Guest") {
//   console.log("Hello, " + name);
// }

// greetUser();        // Hello, Guest
// greetUser("Rafi");  // Hello, Rafi

// Function Expression
// const add = function (a, b) {
//   return a + b;
// };

// console.log(add(5, 3)); // 8

// Arrow Functions (ES6+)
// const multiply = (a, b) => {
//   return a * b;
// };

// console.log(multiply(4, 6)); // 24

//Returning Values
function getFullName(first, last) {
  return first + " " + last;
}

let name = getFullName("Rafi", "Kibria");
console.log(name); // Rafi Kibria
