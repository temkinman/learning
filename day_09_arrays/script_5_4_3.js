let numbers = [];

function sumInput() {
  let userInput;
  do {
    userInput = prompt("Введите число", "");
    if (+userInput) {
      numbers.push(+userInput);
    }
  } while (userInput != null && userInput != "" && !Number.isFinite(userInput));

  return sum = numbers.reduce((a, b) => { return a + b; });
}

console.log(numbers);
console.log("sum = " + sumInput());
