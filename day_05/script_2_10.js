'use strict';
/*Название JavaScript
Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
*/
const ECMASCRIPT = 'ecmascript';
let userAnswer = prompt("Какое «официальное» название JavaScript?", "");

if (ECMASCRIPT == userAnswer.toLowerCase()) {
    alert('Верно!');
}
else {
    alert('Не знаете? ECMAScript!');
}

/*Покажите знак числа
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.
*/

let userNumber = prompt('Введите число:');

if (userNumber > 0) {
    alert(1);
}
else if (userNumber < 0) {
    alert(-1);
}
else {
    alert(0);
}

/*Перепишите 'if' в '?'
Перепишите if с использованием условного оператора '?'

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
*/
//Решение:
//let result = (a + b < 4) ? 'Мало' : 'Много';


/*Перепишите 'if..else' в '?'
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/

printMessage('Сотрудник');
printMessage('Директор');
printMessage('');
printMessage('Cool_Хацкер');

function printMessage(login) {
    let message = (login == 'Сотрудник') ? 'Привет' :
        (login == 'Директор') ? 'Здравствуйте' :
            (login == '') ? 'Нет логина' : '';
    console.log(message);
}



