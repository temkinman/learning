let menu = {
  width: 200,
  height: 300,
  title: "My menu",
  print() {
    console.log(`width: ${this.width}, height: ${this.height}`);    
  }
};

console.log(`Before changing`);
menu.print();

function multiplyNumeric(menu) {
  for (key in menu) {
    if (+menu[key]) menu[key] *= 2;
  }
}

multiplyNumeric(menu);

console.log(`After changing`);
menu.print();
