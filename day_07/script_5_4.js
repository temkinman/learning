function random(min, max) {
  return Math.floor(Math.random() * max + min);
}

let countMin = 0;
let countMax = 0;

for (let i = 0; i < 100; i++) {
  let result = random(1, 5);

  if (result > 5 || result < 1) {
    console.log("warning: result is over range 1..5 " + result);
  }
  if (result == 1) ++countMin;
  if (result == 5) ++countMax;
}

console.log("number 1 was :" + countMin);
console.log("number 5 was :" + countMax);

console.log(random(1, 5)); // 1.2345623452
console.log(random(1, 5)); // 3.7894332423
console.log(random(1, 5)); // 4.3435234525

/* 
Задача работает без одинаковой вероятностью min и max
Решение с одинаковой вероятностью не списывал т.к. я б такое не нагуглил )))
 */
