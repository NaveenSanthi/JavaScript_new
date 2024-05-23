const pl = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 10);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Failure");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Failure2");
  }, 100);
});
// Promise.all([pl, p2, p3]).then(console.log).catch(console.log);
// Promise.allSettled([pl, p2, p3])
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((errorMessage) => {
//     console.log(errorMessage);
//   });
Promise.race([pl, p2, p3]).then(console.log).catch(console.log);
