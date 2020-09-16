function Calculator() {
  this.methods = {
      '-': (a,b) => a-b,
      '+': (a,b) => a+b,
  }
    this.calculate = function (str) {
    let arr = str.split(' '),
      a = +arr[0],
      action = arr[1],
      b = +arr[2];

    if (!this.methods[action] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[action](a, b);
  };

  this.addMethod = (action, func) => {
    this.methods[action] = func;
  };
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("1 - 2"));
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate('3 ** 3'));
console.log(calc.calculate('3 * 2'));
console.log(calc.calculate('9 / 3'));
