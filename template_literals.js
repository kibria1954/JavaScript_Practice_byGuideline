/*
Template literals allow you to embed variables or expressions inside strings using backticks (`) instead of quotes.
Key Points:

Use backticks (` `) instead of single (') or double ("`) quotes.

Use ${ } to insert variables or expressions.

Supports multi-line strings.
*/

const name = "Ashadul";
const age = 24;

// Old way (before ES6)
const oldMessage = "Hello " + name + ", you are " + age + " years old.";
console.log(oldMessage);

// New way (Template Literals)
const newMessage = `Hello ${name}, you are ${age} years old.`;
console.log(newMessage);

// Multi-line string
const greeting = `
Hello ${name},
Welcome to JavaScript ES6!
Enjoy learning new features.
`;
console.log(greeting);
