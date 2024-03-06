/*
Корабль - прототипы
Создайте корабль, который унаследует некоторое поведение средства передвижения
Основные требования:
Экспортируйте из файла 2 объекта с именами vehicle и ship
vehicle должен иметь метод move, который выводит в консоль текст Argo is moving, где Argo - 
  это свойство name объекта
vehicle должен иметь метод stop, который выводит в консоль текст Argo stopped, где Argo - 
  это свойство name объекта
ship должен наследовать все методы vehicle
ship должен иметь метод startMachine, который выводит в консоль текст Argo lifting anchor up, 
  где Argo - это свойство name объекта, а затем вызывает метод move объекта ship
ship должен иметь метод stopMachine, который вызывает метод stop объекта ship, 
  а затем выводит в консоль текст Argo lifting anchor down, 
  где Argo - это свойство name объекта
*/

// export const vehicle = {
//   name: 'Argo',
//   move() {
//     console.log(`${this.name} moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// export const ship = {
//   startMachine() {
//     console.log(`${this.name} lifting anchor up`);
//     this.move();
//   },
//   stopMachine() {
//     this.stop();
//     console.log(`${this.name} lifting anchor down`);
//   },
// };

// Object.setPrototypeOf(ship, vehicle);
// // --------------------------------------
// // Создание объекта vehicle
// const vehicle = {
//   name: "Argo",
//   move: function() {
//     console.log(`${this.name} is moving`);
//   },
//   stop: function() {
//     console.log(`${this.name} stopped`);
//   }
// };

// // Создание объекта ship с наследованием от vehicle
// const ship = Object.create(vehicle);

// // Добавление метода startMachine к ship
// ship.startMachine = function() {
//   console.log(`${this.name} lifting anchor up`);
//   this.move();
// };

// // Добавление метода stopMachine к ship
// ship.stopMachine = function() {
//   this.stop();
//   console.log(`${this.name} lifting anchor down`);
// };

// // Экспорт объектов vehicle и ship
// module.exports = { vehicle, ship };

// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------

/*
Перебор собственных свойств объекта (for..in)
Напишите функцию, которая будет находить все собственные свойства объекта
Основные требования:
Функция должна экспортироваться под именем getOwnProps
Функция должна принимать объект, как единственный аргумент и вернуть массив собственных свойств объекта. 
Методы в результат попасть не должны
*/
// const vehicle = {
//   isMoving: false,
//   move() {
//     console.log(`${this.name} moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// function getOwnProps(obj) {
//   const ownProps = [];
//   for (let prop in obj) {
//     if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
//       ownProps.push(prop);
//     }
//   }
//   return ownProps;
// }

// console.log(getOwnProps(vehicle));

// function getOwnProps(obj) {
//   return Object.keys(obj).filter(prop => {
//     return obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function';
//   });
// }
// console.log(getOwnProps(vehicle));

// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
/*
Конструктор объектов - прототипы
Напишите конструктор, который будет создавать пользователей с определенными возможностями
Основные требования:
Конструктор должен экспортироваться под именем User
User должен принимать и сохранять name и age при создании объекта
На прототипе User должен иметь метод sayHi, который выводит в консоль текст 
  Hi, I am John, где John - свойство name объекта
На прототипе User должен иметь метод requestNewPhoto, который выводит в консоль текст 
  New photo request was sent for John, где John - свойство name объекта
На прототипе User должен иметь метод setAge, который установит новое значение свойству 
  age и выведет в консоль текст New photo request was sent for John, где John - свойство name 
  объекта, если новый возраст больше или равен 25
Метод setAge должен вернуть false и прекратить выполнение, если переданное значение меньше нуля
Метод setAge должен вернуть переданное значение, если переданное значение не меньше нуля
*/

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function() {
//   console.log(`Hi, I am ${this.name}`);
// };

// User.prototype.requestNewPhoto = function() {
//   console.log(`New photo request was sent for ${this.name}`);
// };

// // User.prototype.setAge = function(newAge) {
// //   if (newAge < 0) {
// //     return false;
// //   } else {
// //     this.age = newAge;
// //     if (this.age >= 25) {
// //       console.log(`New photo request was sent for ${this.name}`);
// //     }
// //     return newAge;
// //   }
// // };

// User.prototype.setAge = function(newAge) {
//   return newAge < 0 
//     ? false 
//     : (this.age = newAge, this.age >= 25 
//       ? (console.log(`New photo request was sent for ${this.name}`), newAge) 
//       : newAge);
// };

// module.exports = User;

// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
/*
Объект пользователя
Создайте объект пользователя
Основные требования:
Объект пользователя должен экспортироваться по умолчанию
В объекте пользователя хранятся свойства firstName и lastName
Getter fullName должен вернуть строку вида John Doe, где John - это свойство firstName, 
  а Doe - это свойство lastName
Setter fullName должен принять значение в формате John Doe, где 
  John - это свойство firstName, а 
  Doe - это свойство lastName и сохранить значения в соответствующие свойства объекта
*/

// const User = {
//   firstName: "",
//   lastName: "",
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// // export default User;

// User.fullName = 'Tom Hardy'

// console.log(User.firstName);