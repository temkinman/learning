'use strict'

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

function powRefactor(x, n) {
  return x**n;
}

console.log(powRefactor(3, 2));
console.log(powRefactor(3, 3));
console.log(powRefactor(1, 100));
