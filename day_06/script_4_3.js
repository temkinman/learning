let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function calcSumSalaries(employees) {
  let sum = 0;
  if (Object.keys(employees).length == 0) return sum;

  for (key in employees) {
    sum += employees[key];
    console.log(`salary ${key} : ${employees[key]}`);
  }
  return sum;
}

let newSalaries = {};
console.log(`Total sum: ${calcSumSalaries(salaries)}`);
console.log(`Total sum: ${calcSumSalaries(newSalaries)}`);
