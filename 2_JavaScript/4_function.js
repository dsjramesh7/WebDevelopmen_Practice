//function : a function is like block of reusuable piece of code.
// Function declaration
function greet(name) {
  return "Hello, " + name;
}
// Function call
let message = greet("John"); // "Hello, John"

// Assignment #1
// Write a function sum that finds the sum of two numbers.
// Side quest - Try passing in a string instead of a number and see what happens?
function sumOfTwo(a, b) {
  return a + b;
}
const sumofTwoNumber1 = sumOfTwo(12, 56);
console.log(sumofTwoNumber1);

const sumofTwoNumber2 = sumOfTwo(12, "asdf");
console.log(sumofTwoNumber2);

//Assignment #2
// Write a function called canVote that returns true or false if the age of a user is > 18
const canVote = (age) => {
  if (age >= 18) {
    return "you can can vote nanami";
  } else {
    return "you can't vote child";
  }
};

const canVote1 = canVote(21);
console.log(canVote1);

//assignment 3:
// sum from 1 to nth number
function sumToNth(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumToNth(69));
console.log(sumToNth(12));
