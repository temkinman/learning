let calculator = {
  read() {
    this.valueOne = +prompt("Enter number one", "0");
    this.valueTwo = +prompt("Enter number two", "0");
  },
  sum() {
    return this.valueOne + this.valueTwo;
  },
  mul() {
    return this.valueOne * this.valueTwo;
  },
  sub() {
    return this.valueOne - this.valueTwo;
  },
  div() {
    if (this.valueTwo == 0) {
      console.log("divide by zero");
      //throw new Error('Invalid dividend ' + this.valueTwo);
    }
    return this.valueOne / this.valueTwo;
  },
};

calculator.read();
console.log(`valueOne: ${calculator.valueOne}`);
console.log(`valueTwo: ${calculator.valueTwo}`);

console.log(
  `${calculator.valueOne} * ${calculator.valueTwo} = ${calculator.mul()}`
);
console.log(
  `${calculator.valueOne} + ${calculator.valueTwo} = ${calculator.sum()}`
);
console.log(
  `${calculator.valueOne} / ${calculator.valueTwo} = ${calculator.div()}`
);
console.log(
  `${calculator.valueOne} - ${calculator.valueTwo} = ${calculator.sub()}`
);
