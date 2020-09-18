let map = new Map();

map.set("name", "John");

//let keys = map.keys(); было
let keys = Array.from(map.keys()); //стало
console.log(keys);

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
console.log(keys);
