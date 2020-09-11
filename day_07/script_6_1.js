function ucFirst(str) {
  return str.length != 0 ? str[0].toUpperCase() + str.slice(1) : "";
}

console.log(ucFirst("ашчушчэния у"));
console.log(ucFirst("сашы 3%"));
console.log(ucFirst("были не очень ))))"));
console.log(ucFirst("вася") == "Вася");
