function Сalculator() {
    this.read = function () {
        this.valueOne = +prompt("Enter number one", 0);
        this.valueTwo = +prompt("Enter number two", );
    };

    this.sum = function () {
      return this.valueOne + this.valueTwo;
    };

    this.mul = function () {
      return this.valueOne * this.valueTwo;
    };

    this.sub = function () {
      return this.valueOne - this.valueTwo;
    };

    this.div = function () {
      if (this.valueTwo == 0) {
        console.log("divide by zero");
        //throw new Error('Invalid dividend ' + this.valueTwo);
      }
      return this.valueOne / this.valueTwo;
    };
}

let calculator = new Сalculator();
calculator.read();

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