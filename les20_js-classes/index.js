/* eslint-disable max-classes-per-file */
/*
Конструктор объектов
Напишите конструктор, который будет создавать пользователей с определенными возможностями
Основные требования:
Для решения этой задачи используйте классы
Конструктор должен экспортироваться под именем User
User должен принимать и сохранять name и age при создании объекта
На прототипе User должен иметь метод sayHi, который выводит в консоль текст 
  Hi, I am John, где John - свойство name объекта
На прототипе User должен иметь метод requestNewPhoto, который выводит в консоль текст 
  New photo request was sent for John, где John - свойство name объекта
На прототипе User должен иметь метод setAge, который установит новое значение свойству 
  age и выведет в консоль текст New photo request was sent for John, где 
  John - свойство name объекта, если новый возраст больше или равен 25
Метод setAge должен вернуть false и прекратить выполнение, если переданное значение меньше нуля
Метод setAge должен вернуть переданное значение, если переданное значение не меньше нуля
Статический метод createEmpty должен создавать юзера с пустыми полями 
(name - пустая строка, age - null)
*/
// export class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHi() {
//     console.log(`Hi, I am ${this.name}`);
//   }

//   requestNewPhoto() {
//     console.log(`New photo request was sent for ${this.name}`);
//   }

//   setAge(newAge) {
//     if (newAge < 0) {
//       return false;
//     } else {
//       this.age = newAge;
//       if (this.age >= 25) {
//         console.log(`New photo request was sent for ${this.name}`);
//       }
//       return newAge;
//     }
//   }

//   static createEmpty() {
//     return new User("", null);
//   }
// }

// export default User;

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
/*
Корабль
Создайте корабль, который унаследует некоторое поведение средства передвижения
Основные требования:
Экспортируйте из файла 2 класса с именами Vehicle и Ship
Vehicle должен хранить свойства name и numberOfWheels
Vehicle должен иметь метод move, который выводит в консоль текст 
  Argo is moving, где Argo - это свойство name объекта
Vehicle должен иметь метод stop, который выводит в консоль текст 
  Argo stopped, где Argo - это свойство name объекта
Ship должен наследоваться от Vehicle
Конструктор Ship принимает 3 аргумента name, numberOfWheels, maxSpeed
Ship должен иметь метод move, который выводит в консоль текст 
  Argo lifting anchor up, где Argo - это свойство name объекта, а затем вызывает метод 
  move наследованный от Vehicle
Ship должен иметь метод stop, который вызывает метод stop наследованный от Vehicle,
  а затем выводит в консоль текст Argo lifting anchor down, где 
  Argo - это свойство name объекта
*/
// // Explain;
// class Vehicle {
//   constructor(name, numberOfWheels) {
//     this.name = name;
//     this.numberOfWheels = numberOfWheels;
//   }

//   move() {
//     console.log(`${this.name} is moving`);
//   }

//   stop() {
//     console.log(`${this.name} stopped`);
//   }
// }

// class Ship extends Vehicle {
//   constructor(name, numberOfWheels, maxSpeed) {
//     super(name, numberOfWheels);
//     this.maxSpeed = maxSpeed;
//   }

//   move() {
//     console.log(`${this.name} lifting anchor up`);
//     super.move();
//   }

//   stop() {
//     super.stop();
//     console.log(`${this.name} lifting anchor down`);
//   }
// }

// export { Vehicle, Ship };

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
/*
Защищенные поля
Создайте кошелек с возможностью пополнения и снятия средств
Основные требования:
Класс должен экспортироваться под именем Wallet
Баланс кошелька по умолчанию равен 0
Метод getBalance должен вернуть текущий баланс
Метод deposit должен увеличивать баланс указанную сумму
Метод withdraw должен уменьшать баланс указанную сумму
При попытке снять больше средств, чем есть на счету - вывести сообщение 
  No enough funds в консоль прекратить выполнение
*/
// // Explain
// class Wallet {
//   #balance = 0;

//   getBalance() {
//     return this.#balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       console.log('No enough funds');
//       return;
//     }
//     this.#balance -= amount;
//   }
// }

// export default Wallet;

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
/*
Order класс
Представь, что ты разрабатываешь сайт, где люди могут делать заказы в интернет магазине. 
Для такого ресурса нужно будет создать сущность (класс) Order, 
которая будет отображать и хранить данные о заказах. 
Создай этот класс и добавьте в него указанные поля
Основные требования:
Начальный код:
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
Создай класс Order c полями указанными в редакторе (тип данных для полей важен)
Конструктор должен принимать параметры - price, city, type, ID проставляется рандомный. По-умолчаний заказ не подтвержден
Создай методы класса:
  checkPrice() - должен проверять сумму заказа и возвращать true, если сумма заказа больше 1000 и false в другом случае
  confirmOrder() - должен проставлять ордер в статус confirmed = true (если заказ не был подтвержден раньше) и дату конфирма ставить в текущую
  isValidType() - поле type может принимать только два значения - Buy, Sell - метод возвращает true, если это требование выполняется и false, если нет
*/
// // Explain
// class Order {
//   constructor(price, city, type) {
//     this.id = Math.random().toString(36).substr(2, 9); // Генерация случайного ID
//     this.price = price;
//     this.dateCreated = new Date();
//     this.isConfirmed = false;
//     this.dateConfirmed = null;
//     this.city = city;
//     this.type = type;
//   }

//   checkPrice() {
//     return this.price > 1000;
//   }

//   confirmOrder() {
//     if (!this.isConfirmed) {
//       this.isConfirmed = true;
//       this.dateConfirmed = new Date();
//     }
//   }

//   isValidType() {
//     return this.type === 'Buy' || this.type === 'Sell';
//   }
// }

// // Пример использования класса Order
// const order = new Order(1200, 'New York', 'Buy');
// console.log(order.checkPrice()); // Вернет true
// order.confirmOrder();
// console.log(order.isConfirmed, order.dateConfirmed); // Вернет true и дату подтверждения
// console.log(order.isValidType()); // Вернет true

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
/*
User repository
Создай класс User и UserRepository - хранилище пользователей
Основные требования:
Создай класс User c полями 
  id - string
  name - string - имя пользователя
  sessionId - string
Конструктор должен принимать параметры в том порядке, как они указаны выше
Также возможность модификации полей должна быть закрыта, но возможность их считывания нет (укажи getter, но не указывай setter), пример работы кода смотри в редакторе
Создай класс UserRepository c полями 
  users - array[User] - массив объектов пользователей
Поле инициализируется в конструкторе входящим массивом. Возможность модификации поля из других классов должна быть закрыта, но возможность чтения открыта (укажи getter, но не указывай setter). Чтобы запретить мутацию массива, используй метод Object.freeze
Object.freeze(users) запрещает любые мутации массива users
Напиши метод getUserNames() - для получения массива имен пользователей
Напиши метод getUserIds() - для получения массива айдишников пользователей
Напиши метод getUserNameById() - для получения имени пользователя, по его id
Обрати внимание, что обращение к name происходит как к свойству, хоть он и метод класса
// пример работы getters / setters у классов и объектов

class Dog {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

const myDog = new Dog('Rex');
console.log(myDog.name); // ===> 'Rex'
myDog.name = 'Buddy'; // ===> если бы не было setter, то имя бы не поменялось
console.log(myDog.name); // ===> 'Buddy'
*/
// // Explain
// class User {
//   constructor(id, name, sessionId) {
//     this._id = id;
//     this._name = name;
//     this._sessionId = sessionId;
//   }

//   get id() {
//     return this._id;
//   }

//   get name() {
//     return this._name;
//   }

//   get sessionId() {
//     return this._sessionId;
//   }
// }

// class UserRepository {
//   constructor(users) {
//     this._users = Object.freeze(users);
//   }

//   get users() {
//     return this._users;
//   }

//   getUserNames() {
//     return this._users.map(user => user.name);
//   }

//   getUserIds() {
//     return this._users.map(user => user.id);
//   }

//   getUserNameById(id) {
//     const user = this._users.find(user => user.id === id);
//     return user ? user.name : null;
//   }
// }

// // examples
// const user = new User('1', 'Tom', 'session-id');

// // получить свойства можем
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'

// // но изменить эти свойства нельзя
// // user.name = 'Bob'; // пытаемся изменить старое значение
// // console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

// // Пример использования классов
// const usersData = [
//   new User("1", "Alice", "session1"),
//   new User("2", "Bob", "session2"),
//   new User("3", "Charlie", "session3")
// ];

// const userRepository = new UserRepository(usersData);
// console.log(userRepository.getUserNames()); // Возвращает массив имен пользователей
// console.log(userRepository.getUserIds()); // Возвращает массив ID пользователей
// console.log(userRepository.getUserNameById("2")); // Возвращает имя пользователя с ID "2"

// // examples.js

// class Dog {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(name) {
//     this._name = name;
//   }
// }

// const myDog = new Dog('Rex');
// console.log(myDog.name); // ===> 'Rex'
// myDog.name = 'Buddy'; // ===> если бы не было setter, то имя бы не поменялось
// console.log(myDog.name); // ===> 'Buddy'