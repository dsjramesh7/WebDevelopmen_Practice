// For loop
// for (let i = 0; i < 5; i++) {
//   console.log(i); // Outputs 0 to 4
// }

// While loop
// let j = 0;
// while (j < 5) {
//   console.log(j); // Outputs 0 to 4
//   j++;
// }

//assignment
// Write a function called sum that finds the sum from 1 to a number
const sumOfN = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};

const answer = sumOfN(5);
console.log(answer);
