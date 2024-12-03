// callback function:
// A callback function is a function that is passed as an argument to another function and is executed after that function has finished

// callback function + asynchornous operation learning
console.log("Hi!");

//asynchronous and here timeout function is callback function
setTimeout(function timeout() {
  console.log("Click the button!");
}, 5000);

// synchronous
for (let i = 0; i <= 10000; i++) {
  console.log("mein second=" + i);
}
console.log("Welcome to loupe.");
