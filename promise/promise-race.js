const p1 = new Promise((resolve, reject) => {
  resolve("ph");
});
const p2 = new Promise((resolve, reject) => {
  resolve("zy");
});
const p3 = new Promise((resolve, reject) => {
  resolve("zcr");
});

function myPromiseAll(promiseTask) {
  const result = [];
  return new Promise((resolve, reject) => {
    promiseTask.forEach((promise) => {
      promise
        .then((res) => {
          result.push(res);
          if (result.length === promiseTask.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
}
const promise = [p1, p2, p3];
Promise.allSettled(promise).then((res) => console.log(res));
