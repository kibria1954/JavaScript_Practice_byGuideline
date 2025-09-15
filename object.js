//Object Literal (most common)
// const student = {
//   name: "Rafi Kibria",
//   age: 26,
//   cgpa: 3.25,
//   isPass: true
// };

// console.log(student); // Rafi Kibria

//Using new Object()
// const person = new Object();
// person.name = "Ashadul";
// person.age = 30;

// console.log(person.age); // 30

//Using a Constructor Function
// function Car(brand, model) {
//   this.brand = brand;
//   this.model = model;
// }

// const car1 = new Car("Toyota", "Corolla");
// console.log(car1.brand); // Toyota

// Using class (ES6+)
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const s1 = new Student("Rafi", 26);
// console.log(s1.name); // Rafi

// Accessing Object Properties
// const student = { name: "Rafi", age: 26 };

// console.log(student.name);     // Dot notation → Rafi
// console.log(student["age"]);   // Bracket notation → 26

// // //Adding / Updating Properties

// student.cgpa = 3.25;       // Add new property
// student.age = 27;          // Update property
// console.log(student);
// //Deleting Properties
// delete student.cgpa;
// console.log(student); // cgpa removed

// // Looping Through Objects
// const student = { name: "Rafi", age: 26, cgpa: 3.25 };

// for (let key in student) {
//   console.log(key, ":", student[key]);
// }

//Object Methods (functions inside objects)
// const student = {
//   name: "Rafi",
//   age: 26,
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   }
// };

//student.greet(); // Hello, my name is Rafi

//Useful Object Methods
// const student = { name: "Rafi", age: 26, cgpa: 3.25 };

// console.log(Object.keys(student));   // ["name", "age", "cgpa"]
// console.log(Object.values(student)); // ["Rafi", 26, 3.25]
// console.log(Object.entries(student));
// // [["name", "Rafi"], ["age", 26], ["cgpa", 3.25]]

//Nested Objects
// const user = {
//   name: "Rafi",
//   address: {
//     city: "Dhaka",
//     country: "Bangladesh"
//   }
// };

// console.log(user.address.city); // Dhaka

//Copying & Merging Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };

// Merge using spread operator
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a:1, b:2, c:3 }
