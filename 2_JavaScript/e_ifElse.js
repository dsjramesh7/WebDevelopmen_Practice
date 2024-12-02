let age = 14;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// assignment
// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."
function isEvenOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even number`;
  } else {
    return `${number} is odd number`;
  }
}

console.log(isEvenOdd(21342314));
