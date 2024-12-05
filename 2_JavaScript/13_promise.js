// promise: A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//promisified verisoin of setTimeout
// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function callback() {
//   console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);

// learing
// function waitFor3s() {
//   console.log("Hi there");
// }

// function promiseCallback() {
//   setTimeout(waitFor3s, 3000);
//   console.log("in promise callback");
// }

// promiseCallback(waitFor3s);
// console.log("in global scope");

// breaking it down
function random(resolve) {
  // resolve is also a function which will call the callbackfunction you created
  setTimeout(resolve, 5000);
}

let p = new Promise(random); //p is instance of promise class
console.log(p); // we will get pending here means eventual completion

//using the eventual value returned by promise
function callbackFunC() {
  console.log("promise is succeded");
}
p.then(callbackFunC);
