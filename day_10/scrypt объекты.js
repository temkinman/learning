const getAddress = () => ({
  city: "Zhlobin",
  country: "Belarus",
});

const user = {
  id: 1,
  firstname: "Artem",
  address: getAddress(),
};

console.log(user.address); // { city: 'Zhlobin', country: 'Belarus' }
console.log(user.address.city); //Zhlobin
console.log(user.address.country); //Belarus
   