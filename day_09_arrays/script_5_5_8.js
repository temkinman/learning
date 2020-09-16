let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((item) => ({
  fullName: `${item.surname} ${item.name}`,
  id: `${item.id}`,
}));

/*let usersMapped = [];

for(let i=0; i<users.length; i++) {
    usersMapped[i] = {
        fullName : `${users[i].surname} ${users[i].name}`,
        id : users[i].id
    }
}*/

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log(usersMapped); 
console.log(usersMapped[0].id); //1
console.log(usersMapped[0].fullName); //Вася Пупкин