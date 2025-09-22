/*
Promises

A Promise represents a value that will be available now, later, or never.

Pending → waiting

Fulfilled → success (.then)

Rejected → failure (.catch)
*/

let myPromise = new Promise((resolve, reject) => {
  let success = false;
  setTimeout(() => {
    if (success) resolve("Data fetched!");
    else reject(" Error fetching data");
  }, 2000);
});

myPromise
  .then((result) => console.log(result))   // success
  .catch((error) => console.log(error))    // error
  .finally(() => console.log("Operation complete"));
