/*Создайте дату
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert.*/

let date = new Date(2012,01,20,03,12,00);

console.log(date);// Mon Feb 20 2012 03:12:00 GMT+0300 (Москва, стандартное время)
console.log(date.getFullYear()); // 2012
console.log(date.getTime()); // милисекунды
console.log(date.getMonth()); //2 месяц от 0-11
console.log(date.getDate()); //20 день  1-31
console.log(date.getHours()); // 3 
console.log(date.getUTCHours()); // 12  UTC+0:
console.log(date.getMinutes()); // 12
console.log(date.getMilliseconds()); // 0
console.log(date.getDay()); // 1  понедельник дни недели от 0-6 отчет идет с воскресенья
// alert(date);

/*
Покажите день недели
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );  
*/

const getWeekDay = (date) => {
    const weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    const dayOfWeek = date.getDay();
    return isNaN(dayOfWeek) ? null : weekDays[dayOfWeek];
}

date = new Date(2014, 0, 3);
console.log(getWeekDay(date));

date = new Date(2020, 8, 30);
console.log(date);
console.log(getWeekDay(date));

/*
День недели в европейской нумерации
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2
*/

const getLocalDay = (date) => {
    return date.getDay() == 0 ? 7 : date.getDay();
    //const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    //const dayOfWeek = date.getDay();
    //return isNaN(dayOfWeek) ? null : weekDays[dayOfWeek + 1];
}

date = new Date(2012, 0, 8); 
console.log(getLocalDay(date));//
console.log(date);//

/*
Какой день месяца был много дней назад?
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.
*/

/*мое решение
const getDateAgo = (date, days) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate() - days;
    const myDate = new Date(year, month, day);
    return myDate.getDate();
}
*/

/*на сайте решение*/
const getDateAgo = (date, days) => {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    
    return dateCopy.getDate();
}

date = new Date(2015, 0, 2);
// date = new Date();
console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

/*
Последнее число месяца?
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

const getLastDayOfMonth = (year, month) => {
    let dateCopy = new Date(year, month + 1, 0);
    return dateCopy.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

/*
Сколько сегодня прошло секунд?
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

const getSecondsToday = () => {
    let today = new Date();
    // console.log(today.getTime())
    today.setHours(0, 0, 0);
    console.log(today);
    return (new Date().getTime() - today.getTime()) / 100;
}

console.log(`с начала сегодняшнего дня прошло: ${getSecondsToday()} секунд`);

/*
Сколько секунд осталось до завтра?
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

const getSecondsToTomorrow = () => {
    const today = new Date();
    const tommorow = new Date();
    tommorow.setDate(today.getDate() + 1);
    tommorow.setHours(0, 0, 0);
    return (tommorow - today) / 1000;
}

console.log(`до завтрашнего дня осталось: ${getSecondsToTomorrow()} секунд`);
console.log(`до завтрашнего дня осталось: ${Math.round(getSecondsToTomorrow() / 60 / 60)} часов`);
const hours = Math.floor((getSecondsToTomorrow() / 60 / 60));
const minutes = Math.floor( (getSecondsToTomorrow() / 60 / 60 - hours) * 60);
console.log(`до завтрашнего дня осталось: ${Math.round(getSecondsToTomorrow() / 60 / 60)} часов`);
console.log(`до завтрашнего дня осталось: ${hours} часов ${minutes} минут`);

/*
Форматирование относительной даты
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
*/

const formatDate = (date) => {
    const today = new Date();
    const diffSec = (today - date) / 1000;
    const min = ( (today - date) / 1000 ) / 60 / 60;
    const sec = (today - date) / 1000;
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();

    if(diffSec < 1) return `прямо сейчас`;
    if(diffSec < 60) return `${sec} сек. назад`;
    if(diffSec / 60 < 60) return `${min} мин. назад`;
    
    return `${year}.${month}.${day} ${hours}:${min}`;
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
