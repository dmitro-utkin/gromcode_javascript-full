// const event = {
//   guests: [
//     { name: 'Tom', email: 'a@gmail.com', age: 17 },
//     { name: 'John', email: 'example@server.com', age: 18 }
//   ],
//   message: 'Welcome to the party!',
//   getInvitations() {
//     return this.guests
//       .filter(({ age }) => age >= 18)
//       .map(({ name, email }) => ({
//         email,
//         message: `Dear ${name}! ${this.message}`,
//       }))
//   }
// }

// console.log(event.getInvitations());

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const wallet = {
//   transactions: [1, 5, 89, 337, 3],
//   getMax() {
//     return Math.max(...this.transactions);
//   },
//   getMin() {
//     return Math.min(...this.transactions);
//   }
// }

// console.log(wallet.getMax());
// console.log(wallet.getMin());

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// function argsSum() {
//   return [...arguments].reduce((acc, elem) => {
//     return acc + elem;
//   }, 0);
// }

// console.log(argsSum(1, 2, 3, 4));

// function sumOfSquares(...args) {
//   return args.reduce((total, num) => total + num * num, 0);
// }
// console.log(sumOfSquares(1, 2, 3, 4));

// module.exports = sumOfSquares;

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

/*
Spy function
Начинающему программисту Пете пришла в голову хорошая идея - запоминать аргументы, с которыми вызывалась функция, чтобы видеть некую историю этих вызовов. Тебе предстоит написать функцию, которая решит эту задачу
Начальный код и примеры работы функции:
'use strict';

function saveFuncCalls(func) {
  // put your code here
}

// example 1
function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

const sumWithMemory = saveFuncCalls(sum);
sumWithMemory(4, 2); // ===> 6
sumWithMemory(9, 1); // ===> 10

sumWithMemory.callsHistory; // ===> [ [4, 2], [9, 1] ]

// example 2
function addDelta(array, delta) {
  return array.map(el => el + delta);
}

const addDeltaWithMemory = saveFuncCalls(addDelta);
addDeltaWithMemory([111, 22, 55, 4], 8); // ===> [119, 30, 63, 12]
addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7); // ===> [16, 8, -1, 22, 14, 7]

addDeltaWithMemory.callsHistory; // ===> [ [[111, 22, 55, 4], 8], [[9, 1, -8, 15, 7, 0], 7] ]

// example 3
const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const sayHiWithMemory = saveFuncCalls(user.sayHi);
// sayHiWithMemory(); // ===> throw error // because sayHiWithMemory lost context
const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: 'Tom' });
console.log(sayHiWithMemoryBinded()); // ===> Tom // because we fixed context with bind and run functon again

console.log(sayHiWithMemory.callsHistory); // [ [] ]
Основные требования:
Экспортируй из файла функцию с именем saveFuncCalls
Функция saveFuncCalls принимает функцию, вызовы которой мы хотим сохранять, как единственный параметр, и возвращает функцию, которая будет повторять функционал изначальной функции, а так же будет запоминать все свои вызовы в свойстве callsHistory. Каждый вызов храниться как массив аргументов
Важна поддержка функций, которые используют this внутри
Подсказки и типичные ошибки:
saveFuncCalls должна возвращать ф-цию с именем withMemory. Имя возвращаемой функции может быть любым, мы задали имя для примера
saveFuncCalls должна создавать массив, в который будут вноситься все аргументы, с которыми вызвана withMemory
withMemory присвой как свойство callsHistory созданный на шаге 2 массив. Не забываем что функция в JS - это объект, поэтому ей как и объекту можно присваивать свойства (ключи)
*/

function saveFuncCalls(func) {
  const callsHistory = [];

  function withMemory(...args) {
    if (this) {
      throw new Error('Context has been lost');
    }
    callsHistory.push(args);
    return func.apply(this, args);
  }

  withMemory.callsHistory = callsHistory;
  return withMemory;
}

// module.exports = saveFuncCalls;

// example 1
function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

const sumWithMemory = saveFuncCalls(sum);
sumWithMemory(4, 2); // ===> 6
sumWithMemory(9, 1); // ===> 10

sumWithMemory.callsHistory; // ===> [ [4, 2], [9, 1] ]
