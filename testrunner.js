/*
Basics of a Test Runner

A test runner is a framework that runs your tests and reports results. It provides structure and better reporting.

Two popular JS test runners:
A. Mocha
-Lightweight and flexible.
-Needs an assertion library (assert or chai)

B. Jest
-Popular, all-in-one test runner + assertion library.
-Includes mocking and snapshot testing.
*/
//Example with Node assert + Mocha:
// sum.js
function sum(a, b) {
    return a + b;
}
module.exports = sum;

// test/sum.test.js
const assert = require("assert");
const sum = require("../sum");

describe("Sum function", function() {
    it("should add two numbers correctly", function() {
        assert.strictEqual(sum(2, 3), 5);
    });

    it("should fail for wrong sum", function() {
        assert.notStrictEqual(sum(2, 2), 5);
    });
});


//Example with Jest:
// sum.js
// function sum(a, b) {
//     return a + b;
// }
// module.exports = sum;

// // sum.test.js
// const sum = require("./sum");

// test("adds 2 + 3 to equal 5", () => {
//     expect(sum(2, 3)).toBe(5);
// });

// test("2 + 2 is not 5", () => {
//     expect(sum(2, 2)).not.toBe(5);
// });
