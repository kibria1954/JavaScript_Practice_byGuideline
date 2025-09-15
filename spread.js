//spread arrays
// const nums = [1, 2, 3];
// const moreNums = [0, ...nums, 4, 5];

// console.log(moreNums); // [0, 1, 2, 3, 4, 5]

// copy arrays
// const arr1 = [10, 20, 30];
// const arr2 = [...arr1];

// console.log(arr2); // [10, 20, 30]

//Spread in Objects
// const student = { name: "Rafi", age: 26 };
// const updatedStudent = { ...student, cgpa: 3.25 };

// console.log(updatedStudent);
// // { name: "Rafi", age: 26, cgpa: 3.25 }

// 2. Rest Operator (...)

// function sum(...numbers) {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10

//Rest in Array Destructuring
// const colors = ["red", "green", "blue", "yellow"];

// const [first, second, ...restColors] = colors;

// console.log(first);       // red
// console.log(second);      // green
// console.log(restColors);  // ["blue", "yellow"]

//Rest in Object Destructuring
const person = { name: "Rafi", age: 26, city: "Dhaka" };

const { name, ...otherInfo } = person;

console.log(name);      // Rafi
console.log(otherInfo); // { age: 26, city: "Dhaka" }


