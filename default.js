/*
Default & Rest Parameters:

Default Parameters
Default parameters allow you to give a default value to a function parameter if the caller doesn’t provide it.
*/

// function greet(name = "Guest") {
//   console.log(`Hello, ${name}!`);
// }

// greet("Ashadul");  // Hello, Ashadul!
// greet();           // Hello, Guest!  (default used)

/*
Rest Parameters (...)
The rest parameter (...) lets you handle an unknown number of arguments in a function.
*/

function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  console.log(`Sum: ${total}`);
}

sum(2, 4);            // Sum: 6
sum(1, 2, 3, 4, 5);   // Sum: 15
