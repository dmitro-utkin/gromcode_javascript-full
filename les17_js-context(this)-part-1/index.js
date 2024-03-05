// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
// };

// console.log(user.getFullName());

// --------------------------------------------
// --------------------------------------------
// --------------------------------------------

// const callbackPrompt = {
//     message: 'Tell me your number',
//     showPrompt() {
//         const phoneNumber =  prompt(this.message);
//         console.log(phoneNumber);
//     },
//     showDeferredPrompt(ms) {
//         // setTimeout(() => this.showPrompt(), ms)
//         setTimeout(this.showPrompt.bind(this), ms)
//     }
// };

// callbackPrompt.showDeferredPrompt(1000)

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------

// export function defer(func, ms) {
//     return function (...args) {
//       setTimeout(() => {
//         func.apply(this, args);
//       }, ms);
//     };
//   }

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

// /* ===> 1 <=== */
// const student = {
//     name: 'Tom',
// };

// function sayName() {
//     console.log(this.name);
// }

//   // вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента
//   sayName.call(student); // Output: Tom

//   // вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// const anotherObject = {
//     name: 'Bruce',
// };

// sayName.call(anotherObject); // Output: Bruce


//   /* ===> 2 <=== */
// const company = {
//     companyName: 'Microsoft',
// };

// function greeting(firstName, lastName) {
//     console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
// }

//   // вызовите ф-цию greeting так, чтобы в консоль вывелось
//   // 'Hello, Bob Marley. Welcome to the Microsoft'
//   // используйте объект company

//   greeting.call(company, 'Bob', 'Marley'); // Output: Hello, Bob Marley. Welcome to the Microsoft

//   /* ===> 3 <=== */
// const country = {
//     countryName: 'Ukraine',
//     capital: 'Kyiv',
// };

// function getPopulation(population) {
//     return `Population in ${this.countryName} is ${population}`;
// }

//   // вызовите ф-цию getPopulation так, чтобы она вернула
//   // 'Population in Ukraine is 43000'
//   // 43000 передавайте в виде числа
//   // используйте объект country
//   // результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// const result = getPopulation.call(country, 43000);

// console.log(result); // Output: Population in Ukraine is 43000

// //   /* ===> 4 <=== */
// const transaction = {
//     amount: 1200,
//     operation: 'sell',
//     currency: 'USD',
//     exchange: 'NYSE',
//     printTransaction() {
//     console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//     },
// };

// const anotherTransaction = {
//     amount: 400,
//     operation: 'buy',
//     currency: 'USD',
//     exchange: 'NASDAQ',
// };

//   // вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
//   // '400 USD - buy on NASDAQ'
//   // используйте объект anotherTransaction как контекст
// transaction.printTransaction.call(anotherTransaction); // Output: 400 USD - buy on NASDAQ

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

// /* ===> 1 <=== */
// const student = {
//     name: 'Tom',
// };

// function sayName() {
//     console.log(this.name);
// }

// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента
// // Call sayName to print 'Tom'
// sayName.apply(student); // Output: Tom

//   // вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// // Define another object
// const anotherObject = {
//     name: 'Bruce'
// };

//   // Call sayName to print 'Bruce' using anotherObject
// sayName.apply(anotherObject); // Output: Bruce

//   /* ===> 2 <=== */
// const company = {
//     companyName: 'Microsoft',
// };

// function greeting(firstName, lastName) {
//     console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
// }

//   // вызовите ф-цию greeting так, чтобы в консоль вывелось
//   // 'Hello, Bob Marley. Welcome to the Microsoft'
//   // используйте объект company

// greeting.apply(company, ['Bob', 'Marley']); // Output: Hello, Bob Marley. Welcome to the Microsoft

//   /* ===> 3 <=== */
// const country = {
//     countryName: 'Ukraine',
//     capital: 'Kyiv',
// };

// function getPopulation(population) {
//     return `Population in ${this.countryName} is ${population}`;
// }

//   // вызовите ф-цию getPopulation так, чтобы она вернула
//   // 'Population in Ukraine is 43000'
//   // 43000 передавайте в виде числа
//   // используйте объект country
//   // результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// const result = getPopulation.apply(country, [43000]);
// console.log(result); // Output: Population in Ukraine is 43000

//   /* ===> 4 <=== */
// const transaction = {
//     amount: 1200,
//     operation: 'sell',
//     currency: 'USD',
//     exchange: 'NYSE',
//     printTransaction() {
//     console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//     },
// };

// const anotherTransaction = {
//     amount: 400,
//     operation: 'buy',
//     currency: 'USD',
//     exchange: 'NASDAQ',
// };

//   // вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
//   // '400 USD - buy on NASDAQ'
//   // используйте объект anotherTransaction как контекст

// transaction.printTransaction.apply(anotherTransaction); // Output: 400 USD - buy on NASDAQ

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

// /* ===> 1 <=== */
// const student = {
//     name: 'Tom',
// };

// function sayName() {
//     console.log(this.name);
// }

// /*
//    * создайте ф-цию sayStudentName которая будет выводить в консоль имя студента 'Tom'
//    * используйте .bind и ф-цию sayName
//    */
//   // Function to output the student's name 'Tom'
// const sayStudentName = sayName.bind(student);
// sayStudentName(); // Output: Tom
// /*
//    * создайте ф-цию sayBruceName которая будет выводить в консоль имя 'Bruce'
//    * используйте ф-цию sayName и .bind с нужным объектом
//    */
// // Function to output the name 'Bruce'
// const anotherObject = {
//     name: 'Bruce',
// };
// const sayBruceName = sayName.bind(anotherObject);
// sayBruceName(); // Output: Bruce

//   /* ===> 2 <=== */
// const company = {
//     companyName: 'Microsoft',
// };

// function greeting(firstName, lastName) {
//     console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
// }

// /*
//    * создайте ф-цию specialGreeting которая будет выводить в консоль
//    * 'Hello, Bob Marley. Welcome to the Microsoft`
//    * используйте ф-цию greeting и .bind с нужным объектом и аргументами
//    * specialGreeting не должна принимать ни одного аргумента
//    */
// const specialGreeting = greeting.bind(company, 'Bob', 'Marley');
// specialGreeting();

//   /* ===> 3 <=== */
// const country = {
//     countryName: 'Ukraine',
//     capital: 'Kyiv',
// };

// function getPopulation(population) {
//     return `Population in ${this.countryName} is ${population}`;
// }

// /*
//    * создайте ф-цию getUkrainePopulation которая будет возвращать строку
//    * 'Population in Ukraine is 43000`
//    * 43000 передавайте в виде числа
//    * используйте ф-цию getPopulation и .bind с нужным объектом и аргументами
//    * getUkrainePopulation не должна принимать ни одного аргумента
//    */
// const getUkrainePopulation = getPopulation.bind(country, 43000);
// const result = getUkrainePopulation();
// console.log(result); // Output: Population in Ukraine is 43000

//   /* ===> 4 <=== */
// const transaction = {
//     amount: 1200,
//     operation: 'sell',
//     currency: 'USD',
//     exchange: 'NYSE',
//     printTransaction() {
//         console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//     },
// };

// const anotherTransaction = {
//     amount: 400,
//     operation: 'buy',
//     currency: 'USD',
//     exchange: 'NASDAQ',
// };

// /*
//    * создайте ф-цию printSpecialTransaction которая будет выводить в консоль
//    * '400 USD - buy on NASDAQ`
//    * используйте метод transaction.printTransaction и .bind с нужным объектом
//    * printSpecialTransaction не должна принимать ни одного аргумента
//    */
// const printSpecialTransaction = transaction.printTransaction.bind(anotherTransaction);
// printSpecialTransaction(); // выведет в консоль '400 USD - buy on NASDAQ'

// module.exports = {
//   sayStudentName,
//   sayBruceName,
//   specialGreeting,
//   getUkrainePopulation,
//   printSpecialTransaction,
// };

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

// export const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   setFullName(fullName) {
//     const parts = fullName.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// user.setFullName('Дмитро Уткін');
// console.log(user.getFullName());

// export class Order {
//   constructor(id, price, dateCreated, isConfirmed, dateConfirmed, city, type) {
//     this.id = id;
//     this.price = price;
//     this.dateCreated = dateCreated;
//     this.isConfirmed = isConfirmed;
//     this.dateConfirmed = dateConfirmed;
//     this.city = city;
//     this.type = type;
//   }
// }

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------