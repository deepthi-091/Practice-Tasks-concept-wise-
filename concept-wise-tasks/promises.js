console.log("Start"); // 1️⃣ runs immediately

setTimeout(() => {
  console.log("Timeout 1"); // 5️⃣ runs after the call stack is empty
}, 0);

const promise = new Promise((resolve, reject) => {
  console.log("Promise executor"); // 2️⃣ runs immediately
  resolve("Promise resolved");
});

promise.then((res) => {
  console.log(res); // 6️⃣ microtask queue runs after call stack is empty but before setTimeout
});

async function asyncFunc() {
  console.log("Async function start"); // 3️⃣ runs immediately
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async function awaited"); // 7️⃣ runs after 2nd tick
    }, 0);
  });
  console.log(result); // 8️⃣ runs after await Promise resolves
}

asyncFunc();

console.log("End"); // 4️⃣ runs immediately