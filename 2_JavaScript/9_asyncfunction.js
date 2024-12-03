const fs = require("fs");

// this is asynchronusly doing it
const print = (err, data) => {
  try {
    console.log(data);
  } catch (err) {
    console.log("File Not Found");
  }
};
fs.readFile("0_first.txt", "utf-8", print);

// This is synchronoursly doing it
const content = fs.readFileSync("0_secret.txt", "utf-8");
console.log(content);

// this is synchronously doing it
console.log("first this will print");
