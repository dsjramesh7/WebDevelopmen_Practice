// Functional Argument:
// Passing a function to another function as an arguement

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function operation(num1, num2, op) {
  let val = op(num1, num2);
  return val;
}

const result = operation(12, 14, mul);
console.log(result);
