function aclean(arr) {
  let map = new Map();
  arr.forEach(item => {
    let sorted = item.toLowerCase().split('').sort().join('');
    map.set(sorted, item)
  });

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares", "pna"];

console.log(aclean(arr));