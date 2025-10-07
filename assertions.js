/*
Assertions

Assertions are statements that verify if a condition is true. They are the backbone of automated testing.
1. Purpose: Ensure your code behaves as expected.
2. Common types:
  Equality checks: === (strict equality)
  Deep equality checks: compare object structures, not references.
*/
// Simple assertion
// const sum = (a, b) => a + b;
// console.log(sum(2, 3) === 5); // true

// // Deep equality for objects (manual check)
// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, b: 2 };

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true

/*
Using Node.js Assertions (assert module)
Node.js has a built-in assert module for testing. This avoids installing external packages for basic checks.
*/
const assert = require("assert");

// Simple equality
assert.strictEqual(2 + 3, 5); // Passes
// assert.strictEqual(2 + 2, 5); // Throws AssertionError

// Deep equality for objects
const user1 = { name: "Ashadul", age: 24 };
const user2 = { name: "Ashadul", age: 24 };

assert.deepStrictEqual(user1, user2); // Passes

// Throws example
try {
    assert.strictEqual(2 + 2, 5);
} catch (error) {
    console.log("Test failed:", error.message);
}
/*
| Method                         | Use Case                         |
| ------------------------------ | -------------------------------- |
| `assert.ok(value)`             | Checks if value is truthy        |
| `assert.strictEqual(a, b)`     | Strict equality `===`            |
| `assert.notStrictEqual(a, b)`  | Not equal                        |
| `assert.deepStrictEqual(a, b)` | Deep equality for objects/arrays |
| `assert.throws(fn)`            | Checks if function throws error  |

*/