function random(min, max) {
  return Math.random() * (max - 1) + min;
}

for (let i = 0; i < 1000; i++) {
  let result = random(1, 5);
  if (result >= 5 || result <= 1) console.log("warning: result is over range 1..5 " + result);
}

console.log(random(1, 5)); // 1.2345623452
console.log(random(1, 5)); // 3.7894332423
console.log(random(1, 5)); // 4.3435234525
