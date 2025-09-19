/*
Function Scope:
1. Variables declared with var are function-scoped.
2. This means they are accessible anywhere inside the function they are declared in.
*/

// function testFunctionScope() {
//   var x = 10; // function-scoped
//   if (true) {
//     var x = 20; // same variable (not block-scoped)
//     console.log("Inside if block:", x); // 20
//   }
//   console.log("Outside if block:", x); // 20
// }

// testFunctionScope();
// Notice how var doesn’t care about the if block — it "leaks" outside.

/*
Block Scope:
1. Variables declared with let or const are block-scoped.
2. This means they only exist inside { }.
*/
function testBlockScope() {
  let y = 10; // block-scoped
  if (true) {
    let y = 20; // different variable (only inside this block)
    console.log("Inside if block:", y); // 20
  }
  console.log("Outside if block:", y); // 10
}

testBlockScope();
//let/const respect the { } block. Safer to use than var.

//Function scope vs block scope → var = function-scoped, let/const = block-scoped.