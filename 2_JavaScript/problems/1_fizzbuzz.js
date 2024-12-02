// 1. FizzBuzz
// Write a program that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".

for (let i = 0; i <= 100; i++) {
  // console.log(i);
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz ${i}`);
  } else if (i % 3 === 0) {
    console.log(`Fizz ${i}`);
  } else if (i % 5 === 0) {
    console.log(`Buzz ${i}`);
  } else {
    console.log(`${i}`);
  }
}
