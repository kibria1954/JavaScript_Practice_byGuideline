/*
1. What is Asynchronous JavaScript?

JavaScript runs on a single thread (one task at a time).
But sometimes tasks take time (e.g., fetching data from a server, reading a file, timers).

Instead of blocking the main thread, JS uses asynchronous operations.
This allows other code to run while waiting.
*/
//Callbacks: A callback is a function passed as an argument to another function, and it runs after an operation finishes.
//Example: Synchronous vs Asynchronous
console.log("Start");

// Simulating async task with setTimeout
setTimeout(() => {
  console.log("Async task finished!");
}, 2000);

console.log("End");


