/*
Nullish Coalescing (??)
The nullish coalescing operator (??) returns the right-hand value only if the left-hand side is null or undefined (not for 0 or empty strings).

Difference from || (OR operator):

|| treats falsey values (0, "", false) as empty.

?? only checks for null or undefined.
*/
let username = null;
let displayName = username ?? "Guest";
console.log(displayName);    // Guest

username = "";
displayName = username ?? "Guest";
console.log(displayName);    // ""  (empty string is not null/undefined)

let age = 0;
let userAge = age ?? 18;
console.log(userAge);        // 0  (because 0 is valid, not null/undefined)
