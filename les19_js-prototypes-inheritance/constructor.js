// User

/* 
Конструктором може буть будь-яка функція, 
окрім стрілкової 
*/
// домовленість розробників, ф-ія конструктор починю з великої літери

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
// /* 
// коли ця ф-ія визивається з ключовим словом New -
// вона запускається як конструктор
// */
// const user1 = new User('Tom', 17);

// console.log(user1);

// цей приклад буде добавлять іще й методи, не тільки дані

// function User(name, age) {
//   this.name = name;
//   this.age = age;

//   this.sayHi = function() {
//     console.log(`Hi, ${this.name}`)
//   }
// }

// const user1 = new User('Tom', 17);

// // console.log(user1);

// user1.sayHi();

// const user2 = new User('Bob', 21);

// user2.sayHi();

// console.log(user2.sayHi === user1.sayHi); // false
/* 
В даному випадку використовується багато пам'яті(не оптитмально). 
Тому є механізм , який оптимізує цей процес.
Хороша практика  в JS методи однотипних об'єктів скидувать в прототип,
являє собою ніби контейнер(сховище) для методів.
Екземпляри храняться в об'єктах, а за методоми вони ідуть до прототипа.

Механізм, який дозволяє економити пам'ять виглядає итак:
*/

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function() {
//   console.log(`Hi, ${this.name}`);
// };

// const user1 = new User('Tom', 17);
// const user2 = new User('Bob', 21);

// // console.log(user2.sayHi === user1.sayHi);

// console.log(user1);

// ---------------------------
// ---------------------------
// ---------------------------
/*
[[Prototype]] - скрите свойство, яке содерже посилання на прототип

prototype - свойство у конструктора, яке формує прототип для об'єкта, 
  створеного через 'new'

__proto__ - getter / setter для [[Prototype]]
*/