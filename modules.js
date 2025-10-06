/*
Modules (import / export)
Modules let you split your code into separate files and reuse them by exporting and importing.
*/

export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// Default export
export default function subtract(a, b) {
  return a - b;
}

// Import specific functions
import { add, multiply } from './math.js';

// Import default export
import subtract from './math.js';

console.log(add(2, 3));        // 5
console.log(multiply(4, 5));   // 20
console.log(subtract(10, 4));  // 6
