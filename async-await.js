/*
A cleaner way to work with Promises.
Instead of chaining .then(), we use await.
*/

function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve("Data received");
      else reject("Failed to fetch");
    }, 1500);
  });
}

async function getData() {
  try {
    console.log("Fetching...");
    const result = await fetchData(true);
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Done!");
  }
}

getData();
