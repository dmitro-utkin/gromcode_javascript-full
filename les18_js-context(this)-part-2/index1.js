"use strict";
// event (this in arrow functions)

// const obj = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this.name);
//   },
// };
// const obj = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this);
//   },
// };

// // obj.sayHi();

// const func = obj.sayHi;

// func();

// ------------------------

// var a = 1;

// console.log(window.a);

// let b = 2;

// console.log(window.b);

// ----------------------------------

// window.user = {
//   name:
//   id:
// }

// --------------------------------

// console.log(this);

// function func() {
//   console.log(this);
// }

// func();

// ----------------------------------

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this);
//   },
// };

// // user.sayHi();

// const func = user.sayHi;
// func();

// setTimeout(user.sayHi.bind(user), 100);

// ----------------------------------

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this);
//   },
// };

// setTimeout(() => user.sayHi(), 100);

// -0-----------------------------------

const event = {
  guests: [
    { name: 'Tom', email: 'a@gmail.com', age: 17 },
    { name: 'Bob', email: 'b@gmail.com', age: 18 }
  ],
  message: 'Welcome to the party',
  getInvintations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        text: `Hi ${name}. ${this.message}`,
        email
      }))
  }
}

// Що буде, якщо використовувати класичну функцію , а не стрілочну =>
// const event = {
//   guests: [
//     { name: "Tom", email: "a@gmail.com", age: 17 },
//     { name: "Bob", email: "b@gmail.com", age: 18 },
//   ],
//   message: "Welcome to the party",
//   getInvintations() {
//     return this.guests
//       .filter(({ age }) => age >= 18)
//       .map(function ({ name, email }) {
//         return {
//           text: `Hi ${name}. ${this.message}`,
//           email,
//         };
//       }, event);
//   },
// };
/*
Буде помилка, втрата контексту. 
Стрілочна функція завжди користується зовнішнім контекстом.
Таким чином не вибиває помилку.
Про те у методів масивів є іще одна особливість, окрім 'callback' первим аргументом,
метод масива може принять об'єкт, який буде грати роль 'this' внутрі цих колбеків.
Треба передати об'єкт `event` у функції `map` другим аргументом...
Тоді не буде помилки....
*/
console.log(event.getInvintations());
