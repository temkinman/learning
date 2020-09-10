"use strict";

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge2(age) {
  return age > 18 || confirm("Родители разрешили?");
}

console.log(checkAge(19));
console.log(checkAge2(19));

console.log(checkAge(18));
console.log(checkAge2(18));
