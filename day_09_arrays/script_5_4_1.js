let styles = ["Джаз", "Блюз"];
console.log(String(styles));

styles.push("Рок-н-ролл");
console.log(String(styles));

middle = Math.floor((styles.length - 1) / 2);
styles[middle] = "Классика";
console.log(String(styles));

first = styles[0];
styles.shift();
console.log(first);
console.log(String(styles));

styles.unshift("Рэп", "Регги");
console.log(String(styles));
