function readNumber() {
  do {
    let number = prompt("Enter number", '');
    console.log('num = ' + number);
  }
  while (number != null && number != "" && !(+number))
  return number;
}

console.log(readNumber());