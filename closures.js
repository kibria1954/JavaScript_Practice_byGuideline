/*
Closures:
1. A closure happens when an inner function “remembers” variables from its outer function, even after the outer function has finished running.
2. This is important for things like callbacks, async code, event listeners.
*/
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log("Counter:", counter);
  }

  return inner; // returning the inner function
}

const myClosure = outer();
myClosure(); // Counter: 1
myClosure(); // Counter: 2
myClosure(); // Counter: 3
/*
-Even though outer() has finished, the inner function remembers counter.
This is closure in action.

-Use case: Closures are the reason functions like setTimeout, event listeners, or React hooks work properly.
*/

//Closures → Inner functions remember outer variables even after execution.