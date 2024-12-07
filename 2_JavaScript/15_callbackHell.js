//callback Hell
// setTimeout(() => {
//   console.log("message shown after 1 seconds, Hi");
//   setTimeout(() => {
//     console.log("message shown after 3 second, Hello");
//   }, 3000);
//   setTimeout(() => {
//     console.log("message shown after 3 second, Hello There");
//   }, 5000);
// }, 1000);

// promise chaining
function setTimeoutPromisified(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

setTimeoutPromisified(1000)
  .then(() => {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(() => {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(() => {
    console.log("hello there");
  });
