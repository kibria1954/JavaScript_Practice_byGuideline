// Interface
interface User {
    name: string;
    age: number;
    isAdmin?: boolean; // optional property
}

const user1: User = {
    name: "Ashadul",
    age: 24
    // isAdmin is optional, so we can omit it
};

const user2: User = {
    name: "Alice",
    age: 30,
    isAdmin: true // We can include optional properties if we want
};

// Type alias
type ID = string | number;

let userId: ID = "abc123";
userId = 456; // Allowed

// Let's print everything to see how it works
console.log("=== Interface Demo ===");
console.log("user1:", user1);
console.log("user1.name:", user1.name);
console.log("user1.age:", user1.age);
console.log("user1.isAdmin:", user1.isAdmin); // undefined since we didn't provide it

console.log("\nuser2:", user2);
console.log("user2.name:", user2.name);
console.log("user2.age:", user2.age);
console.log("user2.isAdmin:", user2.isAdmin); // true since we provided it

console.log("\n=== Type Alias Demo ===");
console.log("Initial userId (string):", userId); // This will show 456 now since we reassigned
// To demonstrate both values, let's create another variable
let userId2: ID = "abc123";
console.log("userId2 (string):", userId2);
userId2 = 789;
console.log("userId2 after reassignment (number):", userId2);

console.log("\n=== Type Checking ===");
console.log("Type of userId2:", typeof userId2);
console.log("Type of 'abc123':", typeof "abc123");
console.log("Type of 456:", typeof 456);

// Demonstrating type guard with union type
function processId(id: ID) {
    console.log(`\nProcessing ID: ${id}`);
    if (typeof id === "string") {
        console.log("ID is a string, converting to uppercase:", id.toUpperCase());
    } else {
        console.log("ID is a number, performing math operation:", id * 2);
    }
}

// Test the function
processId("hello123");
processId(100);