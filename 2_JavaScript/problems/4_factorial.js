// 4. Factorial of a Number
// Write a function to calculate the factorial of a number.
// Example: factorial(5) → 120

function findFactorial(num) {
  if (num === 1 || num === 0) return 1; //edge cases
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    // console.log(i);
    factorial = factorial * i;
    // console.log(factorial);
  }
  return factorial;
}

console.log(findFactorial(7));
