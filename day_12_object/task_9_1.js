function sumSalaries(salaries) {
  let sum = 0;

  for (let item of Object.values(salaries)) {
    sum += item;
  }
  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650
