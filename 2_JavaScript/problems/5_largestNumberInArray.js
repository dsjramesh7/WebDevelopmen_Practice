// 5. Find the Largest Number in an Array
// Write a function that takes an array of numbers as input and returns the largest number.
// Example: [3, 5, 7, 2, 8] → 8

const numarr = [1, 5, 123, 11, 676, 56, 12, 345, 6, 45, 11, 89, 34];
function largestNumberInArray(arr) {
  let largestNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

console.log(largestNumberInArray(numarr));
