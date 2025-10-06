/* 
Optional Chaining (?.)
Optional chaining helps you safely access nested properties of an object without causing an error if the property doesn’t exist.

*/
const user = {
  name: "Ashadul",
  address: {
    city: "Dhaka",
  },
};

console.log(user.address.city);        // Dhaka
console.log(user.address?.city);       // Dhaka
//console.log(user.contact.phone);
console.log(user.contact?.phone);      // undefined (no error!)
