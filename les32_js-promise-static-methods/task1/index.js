// Статичні методи промісів

// const p = new Promise()
// --------------------------------------------------
// // Promise.resolve(value) - Створює проміс в статусі fulfilled з значенням value
// const resolvedPromise = Promise.resolve(17);
// const resolvedPromise2 = new Promise((resolve) => {
//   resolve(17);
// });

// // ---------------------------------------
// // Promise.reject(reason) - Створює проміс в статусі rejected з причиною reason
// //   Promise.reject(new Error('Oops, error!')) - Створює проміс в статусі rejected з помилкою
// const rejectedPromise = Promise.reject(new Error('Oops, error!'));
// const rejectedPromise2 = new Promise((_, reject) => {
//   reject(new Error('Oops, error!'));
// });

// ---------------------------------------
// Promise.all(promises) - Повертає проміс в статусі fulfilled, коли всі проміси завершуються успішно
//   Чекає завершення всіх промісів перед поверненням. Падає в статус rejected, якщо є хоча б один проміс в статусі rejected


// Promise.allSettled(promises) - Повертає проміс в статусі fulfilled, коли всі проміси завершуються успішно

// Promise.race(promises) - Повертає проміс в статусі fulfilled, якщо є хоча б один проміс в статусі fulfilled

// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------

// asyncSum(asyncNum1, asyncNum2, ...)

const getValueWithDelay = (value, delay) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(value);
    resolve(value);
  }, delay);
});

// const asyncNum1 = getValueWithDelay(56, 1000);
// const asyncNum2 = getValueWithDelay(4, 2000);
// const asyncNum3 = getValueWithDelay(10, 3000);

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(undefined, 2000);
const asyncNum3 = getValueWithDelay('10', 3000);


const getSum = numbers => {
  return numbers
  .filter(value => !isNaN(value))
  .reduce((acc, num) => acc + Number(num), 0);
}

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers) // за допомогою методу Promise.all() виконуємо масив промісів
    .then((numbers) => getSum(numbers))
};

// const asyncSum = (...asyncNumbers) => {
//   return Promise.allSettled(asyncNumbers) // за допомогою методу Promise.allSettled() виконуємо масив промісів
//     .then((numbers) => console.log(numbers))
//     // .catch(() => Promise.reject(new Error('Can\'t calculate'))); // метод Promise.reject() створює проміс в статусі rejected
// };

asyncSum(asyncNum1, asyncNum2, asyncNum3)
  .then(result => console.log(result));

// asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3)
//   .then(result => console.log(result));

// getValueWithDelay(56, 1000).then(console.log);