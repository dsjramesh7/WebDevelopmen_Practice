// custom promise
console.log("The code has been started");
class Promise2 {
  constructor(fn) {
    console.log("constructor function been called");
    function afterDone() {
      console.log("afterDone function called");
      this.resolve();
    }
    fn(afterDone);
  }

  then(callback) {
    console.log("then func is called");
    this.resolve = callback;
  }
}

function readTheFile(resolve) {
  console.log("read file has called");
  setTimeout(function () {
    console.log("callback based timeOut completed");
    resolve();
  }, 3000);
}

function setTimeoutPromisified() {
  console.log("setTimeoutPromsified has called");
  return new Promise2(readTheFile);
}
let p = setTimeoutPromisified();

function callbackFunC() {
  console.log("callback function has been called");
}

p.then(callbackFunC);

console.log("The code has been ended");
