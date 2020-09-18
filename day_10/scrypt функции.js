"use strict";

/*спосбоы объявления ф-ий*/

/*тут ...c оператор должен обязательно быть последним т.е.
(a, b, ...c, e) //ошибка
(a, b, ...c) //нет ошибки
*/
const f1 = (a, b, ...c) => {
  console.log(c);
};

f1(1, 2, 3, 4, 5);

/*и f2 и f3 одинаковая запись*/
const f2 = (a, b, c) => {
  return a + b + c;
};

f2(1, 2, 3);

/*и f2 и f3 одинаковая запись*/
const f3 = (a, b, c) => a + b + c;
f3(1, 2, 3);

/*передача в ф-ю другую ф-ию*/
const f4 = (a, b) => a() + b;

f4(() => 4, 5);
//f4(4,5);  ошибка 1-й аргумент должен быть ф-я
console.log(f4(() => 4, 5));

/*объявление ф-ии через function*/
function f5(a, b) {
  console.log(
    this
  ); /* тут this = глобальный объект, если напишем в начале файла 'use strict'
                        то this становится undefined */
  return a + b;
}

//console.log(f5(2,3));

/*   */
const obj = {
  f: f5,
};

obj.f();
console.log(obj); // тут obj = this f5
console.log(obj.f(2, 3));

const obj2 = {
  deep: {
    f: f5,
  },
};

console.log(obj2.deep); // тут obj2.deep = this f5
console.log(obj2.deep.f(2, 3));

/*переопеределение concat - склеивание массивов */
function myConcat(otherArr) {
  return [...this, ...otherArr];
}

/* тут ошибка т.к. стрелочная ф-я не имеет свой собственны this, тут this берется у внешней области видимости
const myConcat = (otherArr) => {
    return [...this, ...otherArr];
}
поэтому если используем this , то  ф-ю объявляем так
function f () {
    
}
*/

let arr = [2, 1, 0];
let arr2 = [9, 8, 7];
arr.concat = myConcat;
console.log(arr.concat(arr2));

/* вызовы ф-ии через 
    call, apply, bind
*/
function f6(b, c) {
  return this + b + c;
}

console.log(f6.call(2, 3, 5)); //тут 1-й аргумент это this
console.log(f6.apply(2, [3, 5])); //тут 1-й аргумент это this 2-й обязательно массив
console.log(f6.bind(2, 3, 5)); //тут 1-й аргумент это this и его уже нельзя никак изменить,
// и bind не меняет ф-ю а возвращет новую ф-ю

const newFunc = f6.bind(1, 2);
console.log(newFunc(3)); //6 т.к. в bind мы уже инициализировали this и b

/* в ф-ии также есть arguments */
function f7(a, b) {
  console.log(arguments[2]); //3
  //в arguments лежат все аргуметны передаваемые в ф-ю
  //но arguments != полноценный массив, итерацию по нему сделать мы не можем
}
f7(1, 2, 3);

/* вызов ф-ии со spread оператором */
function f8(...args) {
  console.log(args); //[1, 2, 3]
  //args -  массив, итерацию по нему сделать можно

  console.log(args.map((item) => item * 2)); // [2, 4, 6]
}

f8(1, 2, 3);

/* инициализация параметров, если они не были переданы */
const f9 = (a, b = 5) => a + b;

console.log(f9(1, 2)); //3 т.к. мы  передали значение b
console.log(f9(1)); //6 т.к. мы  НЕ передали значение b и оно взяло из значения по умолчанию

const initialValue = { foo: 5 };
const f10 = (a = 0, b = initialValue) => a + b.foo;

console.log(f10(1)); //6 т.к. мы  НЕ передали значение b и оно взяло из значения по умолчанию у объекта initialValue
console.log(f10()); //5 т.к. мы  НЕ передали значение a и b и оно взяло из значения a по умолчанию и b у объекта initialValue

/*замыкания*/
const f = () => {
  let x = 0;
  return () => {
    return x + 1;
  };
};

f(); /*тут результат запуска ф-ции будет ф-ция
 return () => {
    return x + 1;
 };
*/
//для вызова этой ф-ции можем присводить ее другой переменной
const xf = f();
xf(); //1 теперь мы получили рез-т вывода ф-ции 'f'
console.log(xf()); // 1
console.log(xf()); // 1 тоже выводит 1 т.к мы x наращиваем в выводе, а не в теле ф-ции

const newF = () => {
  let x = 0;
  return () => {
    x += 1;
    return x;
  };
};

const newxf = newF();
newxf(); //1 теперь мы получили рез-т вывода ф-ции 'f'
console.log(newxf()); // 2
console.log(newxf()); /* 3 т.к. newxf = {
                                    x += 1;
                                    return x;
                                } выводит 1  */

const newxf2 = newF();

newxf2(); //1 теперь мы получили рез-т вывода ф-ции 'f'
console.log(newxf2()); // 2
console.log(newxf2()); /* 3 как и в примере выше у нас 1-й раз ф-я вызвалась с этой строчкой let x = 0;
                            получается для переменной  newxf2, создались свои поля и методы и они никак связаны с newxf      
*/



function sum(a, b, ...args) {
  return a + b + args;
}

sum(1, 2, 5, 8);
console.log(sum(1, 2, 3, 4));
