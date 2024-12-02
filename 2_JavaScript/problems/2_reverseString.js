// 2. Reverse a String
// Write a function that takes a string as input and returns the string reversed.
// Example: "hello" → "olleh"

// aam zindagi
function reverseString0(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // console.log(i);
    reversedString += str[i];
  }
  return reversedString;
}
console.log(reverseString0("yowai mo"));

//mentos zindagi
function reverseString(str) {
  let reverseString = "";
  reverseString = str.split("").reverse().join("");
  return reverseString;
}
console.log(reverseString("romieo"));
