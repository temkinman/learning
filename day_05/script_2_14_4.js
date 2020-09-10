"use strict";
let resultBlock = document.getElementById('result');

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

resultBlock.innerText += pow(3, 2);
resultBlock.innerText += " " + pow(3, 3);
resultBlock.innerText += " " + pow(1, 100) + "\n";

function powRefactor(x, n) {
  return x ** n;
}

resultBlock.innerText += powRefactor(3, 2);
resultBlock.innerText += " " + powRefactor(3, 3);
resultBlock.innerText += " " + powRefactor(1, 100);