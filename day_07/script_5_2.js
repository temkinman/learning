function readNumber() {
  let number;
  do {
    number = prompt("Enter number", '');
    console.log('num = ' + number);
  }
  while (number != null && number != "" && !Number.isFinite(number))
  return number;
}

console.log(readNumber());