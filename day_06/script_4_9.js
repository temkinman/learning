function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Enter number", 0);
  }
}

let accumulator = new Accumulator(1);

console.log(`current value ${accumulator.value}`);

accumulator.read();
accumulator.read();

console.log(`current value ${accumulator.value}`);
