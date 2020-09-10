const person = {};

person.name = "John";
person.surname = "Smith";

console.log(`name: ${person.name}\nsurname: ${person.surname}`);
console.log(`changing name`);

person.name = "Pete";
console.log(`name: ${person.name}`);

console.log(`deleting property name from object person`);
delete person.name;
console.log(`name: ${person.name}`);
