function camelize(str) {
  let arr = str.split('-');
  let result = arr.map( (item, index) => index == 0 ?
                                  item :
                                  item.charAt(0).toUpperCase() + item.slice(1));
  return result.join('');
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image")  == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
