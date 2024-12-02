// 3. Check for Palindrome
// Write a function that checks if a given string is a palindrome (reads the same backward as forward).
// Example: "racecar" → true, "hello" → false

const isPallendrome = (str) => {
  let reversedString = "";
  reversedString = str.split("").reverse().join("");
  if (str === reversedString) {
    return true;
  } else {
    return false;
  }
};

const answer = isPallendrome("racecar");
const answer1 = isPallendrome("zoorooa");
console.log(answer);
console.log(answer1);
