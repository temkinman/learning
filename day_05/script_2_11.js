'use strict';
/*Проверка значения из диапазона
Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
«Включительно» означает, что значение переменной age может быть равно 14 или 90.
*/
let age = 90;
if (age >= 14 && age <= 90) {
  alert(`Ваш возраст ${age} в диапазоне 14-90`);
}

/*
Проверка значения вне диапазона
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
*/

age = 13;
if (!(age >= 14 && age <= 90)) {
  alert(`1-й вариант:\nВаш возраст ${age} не в диапазоне 14-90`);
}
//2-й вариант
if (age < 14 || age > 90) {
  alert(`2-й вариант:\n Ваш возраст ${age} не в диапазоне 14-90`);
}

/*
Вопрос о "if"
Какие из перечисленных ниже alert выполнятся?
Какие конкретно значения будут результатами выражений в условиях if(...)?
1: if (-1 || 0) alert( 'first' );
2: if (-1 && 0) alert( 'second' );
3: if (null || -1 && 1) alert( 'third' );

ответ alert( 'third' );

*/


/**
  Напишите код, который будет спрашивать логин с помощью prompt.

  Если посетитель вводит «Админ», то prompt запрашивает пароль,
   если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

  Пароль проверять так:

  Если введён пароль «Я главный», то выводить «Здравствуйте!»,
  Иначе – «Неверный пароль»,
  При отмене – «Отменено».
  Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.
 */
const ADMIN = 'Админ';
const PASSWORD = 'Я главный';
let login = prompt("Введите логин", "");

if (login == '' || login == null) {
  alert('Отменено');
}
else if (login == ADMIN) {
  let answerPassword = prompt('Пароль?', '');

  if (answerPassword == '' || answerPassword == null) {
    alert('Отменено');
  }
  else if (answerPassword == PASSWORD) {
    alert('Здравствуйте');
  }
  else {
    alert('Неверный пароль');
  }
}
else {
  alert('Я вас не знаю');
}


