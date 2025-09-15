// //1.  Creating Arrays
// const numbers = [1, 2, 3, 4, 5];
// const fruits = ["Apple", "Banana", "Mango"];
// const mixed = [1, "Rafi", true, { age: 26 }];

// // 2. Access & Update
// console.log(fruits[0]); // Apple
// fruits[1] = "Orange";  // Update Banana → Orange
// console.log(fruits);

// // 3. Common Array Methods
// fruits.push("Pineapple");   // Add at end
// fruits.pop();               // Remove last
// fruits.unshift("Grapes");   // Add at start
// fruits.shift();             // Remove first
// //console.log(fruits);

// console.log(fruits.length); // Array length

//  4. forEach() → Loop through each element
//  const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(num => {
//   console.log(num * 2); // Prints each number doubled
// });


// Used for iteration (doesn’t return a new array).

// 5. map() → Transform each element (returns NEW array)
// const numbers = [1, 2, 3, 4];

// const squares = numbers.map(num => num * num);
// console.log(squares); // [1, 4, 9, 16]


//  Used for transformation.

// 6. filter() → Keep elements that pass a condition
// const numbers = [10, 15, 20, 25];

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // [10, 20]


// Used for filtering values.

// 7. find() → Returns first matching element
// const numbers = [5, 12, 18, 25];

// const firstBig = numbers.find(num => num > 15);
// console.log(firstBig); // 18


// Unlike filter(), it returns only the first match.

// 8. reduce() → Reduce array to a single value
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 15


// Used for accumulation (sum, average, max, etc.).

// 9. Other Useful Array Methods
// const arr = [1, 2, 3, 4];

// console.log(arr.includes(3));   // true
// console.log(arr.indexOf(2));    // 1
// console.log(arr.join("-"));     // "1-2-3-4"
// console.log(arr.slice(1, 3));   // [2, 3]
// arr.splice(2, 1);               // Remove 1 element at index 2
// console.log(arr);               // [1, 2, 4]