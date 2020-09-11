function sum(a, b) {
  return a + b;
}

let valueA = +prompt("Enter number", 0);
let valueB = +prompt("Enter number", 0);

console.log(`${valueA} + ${valueB} = ${sum(valueA, valueB)}`);