const arr = [
  { id: 1, title: "My title", deep: { foo: "bar" } },
  { id: 2 },
  { id: 3 },
];

/*методы, которые НЕ изменяют массивы, а только возвращают копию + изменения*/
arr.find((item) => item.id === 1);
console.log(arr.find((item) => item.id === 1));
console.log(arr.find(({ deep }) => deep.foo === "bar"));
console.log(arr[0].deep);
arr.concat;
console.log(arr.concat({ id: 4, title: "obj_4" }));
/*arr //   [ { id: 1, title: 'My title', deep: { foo: 'bar' } }, { id: 2 }, { id: 3 } ] */
arr.every(({ id }) => id > 0);
  console.log(arr.every(({ id }) => id > 0)); //true
arr.some(({ id }) => id === 0);
  console.log(arr.some(({ id }) => id === 0)); //false
  console.log(arr.some(({ id }) => id === 1)); //true
arr.filter;
arr.indexOf;
arr.map;
arr.reduce;
arr.slice;

arr.forEach; //ничего не возвращает

/*методы, которые изменяют массивы, а только возвращают копию + изменения*/
arr.reverse;
arr.pop
arr.push
arr.shift
arr.unshift
arr.sort
arr.splice

