function unique(arr) {
  return new Set(arr);
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

let numbers = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3];

console.log(unique(values));
console.log(unique(numbers));
