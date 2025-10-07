/*
Types:
TypeScript comes with basic types. Some commonly used ones:

| Type      | Example                                                  |
| --------- | -------------------------------------------------------- |
| `string`  | `"hello"`                                                |
| `number`  | `42`                                                     |
| `boolean` | `true` / `false`                                         |
| `any`     | Can hold **any type** (use sparingly)                    |
| `unknown` | Like `any`, but **safer**—forces type check before usage |

*/
let userName: string = "Ashadul";
let userage: number = 24;
let isAdmin: boolean = true;

let randomValue: any = "Can be anything";
randomValue = 42; // Allowed

let unknownValue: unknown = "Hello";

console.log(userage);
console.log(isAdmin);
console.log(randomValue);
console.log(userName);
// console.log(unknownValue.toUpperCase()); // Error
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // Works
}
