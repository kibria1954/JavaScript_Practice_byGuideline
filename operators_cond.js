// operators: arithmetic: +,-,*,/, %,  **
// operators: unary: ++, --
//assignment operator: =, +=, -=, %=
//Comparision operator: ==, ===(equal to & type), !=, !=(not equal to & type), >=, <=
// logical operators: && , ||, !

// let a = 5;
// let b = 2;
// console.log("a+b", a+b);
// console.log("a%b", a%b);
// console.log("a**b", a**b);

//conditional statement:

// let age = 25;
// if(age>18){
//     console.log("You can vote");
// }
// else{
//     console.log("you can't vote");
// }

// let mode, color;
// mode = "dark";
// if(mode==="dark"){
//     color = "black";
// }
// if(mode ==="light"){
//     color = "white";
// }
// console.log(color);

//Switch
// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// //loop
// for (let i = 1; i <= 5; i++) {
//   console.log("Number:", i);
// }

// let count = 1;

// while (count <= 5) {
//   console.log("Count is:", count);
//   count++;
// }

// for of
// let fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

let student = { name: "Rafi", age: 26, cgpa: 3.25 };

for (let key in student) {
  console.log(key, ":", student[key]);
}
