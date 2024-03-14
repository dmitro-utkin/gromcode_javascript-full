/*
Способи передачі дати:
- const today = new Date(); - создає об'єкт Date в нинішній момент часу
- const date1 = new Date('December 17, 1995 03:24:00'); - можна вказати строку з указаной датой та часом
- const date2 = new Date(949363322003) - це число, це кількість мілісекунд 
  які відраховуються від дати 
  (Thu Jan 01 1970 03:00:00 GMT+0300 (Восточная Европа, стандартное время))
  (Time Stand);
  Текущий Time Stand - Date.now() - 1710412882485;
  new Date(1900, 2).getTime(); - -2203898524000 (Від'ємний Time Stand від дати Thu Jan 01 1970 03:00:00 GMT+0300)
- const date3 = new Date(1995, 11, 17, 3, 24, 0); // обов'язкові два перших аргумента
*/

/*
(console)
typeof new Date(); - 'object'
const t = new Date();
t;
Thu Mar 14 2024 12:48:22 GMT+0200 (Восточная Европа, стандартное время)
t.getTimezoneOffset() - метод для отримання часу по Грінвічу
-120

t.getDay();
4 - четвер

індекси місяців від 0 до 11
*/

/*
Робота с компонентами дати:
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
.getFullYear()      .setFullYear        .getUTCFullYear()        .setUTCFullYear()
.getMonth()         .setMonth()         .getUTCMonth()           .setUTCMonth()
.getDate()          .setDate()          .getUTCDate()            .setUTCDate()
.getHours()         .setHours()         .getUTCHours()           .setUTCHours()
.getMinutes()       .setMinutes()       .getUTCMinutes()         .setUTCMinutes()
.getSeconds()       .setSeconds()       .getUTCSeconds()         .setUTCSeconds()
.getMiliSeconds()   .setMiliSeconds()   .getUTCMiliSeconds()     .setUTCMiliSeconds()
*/

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// ---------------- Task 1 --------------------------
// --------------------------------------------------
// --------------------------------------------------
/*
Установка компонентов даты
Напишите функцию, которая выведет день недели через n дней после указанной даты.
Основные требования:
Функция должна экспортироваться под именем dayOfWeek
Сигнатура: dayOfWeek(date, days), где date - объект даты, days - целое число дней.
Функция должна вернуть строку вида 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'
Считаем что неделя стартует с воскресенья
Входящая дата должна остаться неизменной
*/
const weekDays = [
  'Su',
  'Mo',
  'Tu',
  'We',
  'Th',
  'Fr',
  'St'
]

const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
};

const result = dayOfWeek(new Date(2025, 0, 1), 14);

console.log(result);

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// ---------------- Task 2 --------------------------
// --------------------------------------------------
// --------------------------------------------------
/*
Время в Гринвиче
Напишите функцию, которая вернет время в Гринвиче
Основные требования:
Функция должна экспортироваться под именем getGreenwichTime
Сигнатура: getGreenwichTime(date), где date - объект даты.
Функция должна вернуть время в формате '06:43'
Входящая дата должна остаться неизменной
*/
// Function to get the Greenwich time from the specified date
export const getGreenwichTime = (date) => {
  const formatter = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC", // Set the time zone to UTC for Greenwich time
  });
  return formatter.format(date);
 };
 
 // Example usage:
 const inputDate = new Date(); // Example date
 const greenwichTime = getGreenwichTime(inputDate);
 console.log(greenwichTime); // Output: '06:43' (sample time)