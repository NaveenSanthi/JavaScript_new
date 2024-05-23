const myPromise = new Promise((resolve, reject) => {
  if (false) {
    resolve("Promise Resolved! Success:)");
  } else {
    reject("Promise Rejected Sorry Buddy :)-");
  }
});
myPromise
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

//db1
//db2
//db3
