/*
Errors happen when your code tries to do something invalid—like dividing by zero, accessing undefined variables, or calling a function incorrectly.
If errors aren’t handled, they can stop your code execution.
JavaScript provides try…catch…finally blocks to handle errors gracefully.

try {
  // Code that might throw an error
} catch (error) {
  // Code that runs if there is an error
} finally {
  // Code that always runs, whether there’s an error or not
}

*/
//ex-1
// try {
//   let number = 10;
//   console.log(number / 2); // Works fine
//   console.log(unknownVar); // Error: unknownVar is not defined
//   console.log("This line will not run");
// } catch (error) {
//   console.error("An error occurred:", error.message);
// }

// console.log("Code continues after try-catch.");
//ex-2
try {
  console.log("Opening file...");
  throw new Error("File not found!");
} catch (error) {
  console.error("Caught error:", error.message);
} finally {
  console.log("Closing file... (this always runs)");
}
