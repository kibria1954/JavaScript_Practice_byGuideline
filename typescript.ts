// Without TypeScript (plain JS)
// function multiply(a, b) {
//     return a * b;
// }

// multiply("5", 2); // No error, but wrong result!


// // With TypeScript
function multiply(a: number, b: number): number {
    return a * b;
}

multiply("5", 2); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.
