// function getArrayBounds(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return [arr.length, arr[0], arr[arr.length - 1]];
// }

// const arrayBound = getArrayBounds([]);

// console.log(arrayBound);

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// function getSum(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let sumOfNumbers = 0;

//   for (let num of arr) {
//     sumOfNumbers += num;
//   }

//   return sumOfNumbers;
// }
// const numbers = [11, 22, 33, 55, 66];
// const sumOfElements = getSum(numbers);

// console.log('Result: ' + sumOfElements);

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// function getSpecialNumbers(from, to) {
//   let specialNumbers = [];
//   for (let i = from; i <= to; i++) {
//     if (i % 3 === 0) {
//       specialNumbers.push(i);
//     }
//   }
//   return specialNumbers;
// }

// const specialNumbers = getSpecialNumbers(10, 30);

// console.log(specialNumbers);

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// "use strict";

// function swap(numbers) {
//   const [start, ...rest] = numbers;

//   return [...rest, start];
// }

// function swapManual(numbers) {
//   let result = [...numbers]; // створюємо копію вхідного масиву
//   const start = result.shift(); // видаляємо перший елемент з копії масиву
//   result.push(start); // додаємо його в кінець копії масиву
//   return result; // повертаємо змінений масив
// }

// // examples
// console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
// swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// function createEmptyArray(len) {
//   return new Array(len).fill();
// }

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// function squareArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   const newSquareArray = [...arr];
//   for (let i = 0; i < newSquareArray.length; i++) {
//     newSquareArray[i] = newSquareArray[i] ** 2;
//   }

//   return newSquareArray;
// }

// console.log(squareArray([1, 10, 9, 11]))

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// const checkSum = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }

//   if (sum > 100) {
//     return true;
//   }
//   return false;
// };

// // examples
// console.log(checkSum([10, 10, 10])); // ===> false
// checkSum([10, 99, 1]); // ===> true
// checkSum([-6, -3, 200]); // ===> true

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   const newIncreaseEvenEl = [...arr];
//   for (let i = 0; i <= newIncreaseEvenEl.length; i++) {
//     if (newIncreaseEvenEl[i] % 2 === 0) {
//       newIncreaseEvenEl[i] += delta;
//     }
//   }
//   return newIncreaseEvenEl;
// };

// // examples
// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
// increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
// console.log(increaseEvenEl([], 120)); // ===> []

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// function reverseArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   const reverseArray = [...arr].reverse(); // створюємо копію масиву та розвертаємо його

//   return reverseArray;
// }

// console.log(reverseArray([1, 2, 3, 4]));

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// function cloneArr(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   const cloneArr = [...arr];

//   return cloneArr;
// }

// console.log(cloneArr([1, 2, 3, 4]));

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// function checker(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   const minEl = Math.min(...arr);
//   const maxEl = Math.max(...arr);

//   if (minEl + maxEl > 1000) {
//     return true;
//   }
//   return false;
// }

// console.log(checker([3, 4, 999]));

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// function sortAsc(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }

//   const cloneAscArr = [...array];

//   let len = cloneAscArr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - 1; j++) {
//       if (cloneAscArr[j] > cloneAscArr[j + 1]) {
//         let temp = cloneAscArr[j];
//         cloneAscArr[j] = cloneAscArr[j + 1];
//         cloneAscArr[j + 1] = temp;
//       }
//     }
//   }
//   return cloneAscArr;
// }

// let array = [3, 1, 8, 4, 10, 2];
// console.log(sortAsc(array)); // Вивід: [1, 2, 3, 4, 8, 10]
// // function bubbleSort(arr) {
// //   let len = arr.length;
// //   for (let i = 0; i < len; i++) {
// //     for (let j = 0; j < len - 1; j++) {
// //       if (arr[j] > arr[j + 1]) {
// //         let temp = arr[j];
// //         arr[j] = arr[j + 1];
// //         arr[j + 1] = temp;
// //       }
// //     }
// //   }
// //   return arr;
// // }
// // ----------------

// function sortDesc(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }

//   const cloneDescArr = [...array];

//   let len = cloneDescArr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - 1; j++) {
//       if (cloneDescArr[j] < cloneDescArr[j + 1]) {
//         let temp = cloneDescArr[j];
//         cloneDescArr[j] = cloneDescArr[j + 1];
//         cloneDescArr[j + 1] = temp;
//       }
//     }
//   }
//   return cloneDescArr;
// }

// let array1 = [3, 1, 8, 4, 10, 2];
// console.log(sortDesc(array1));
// // function bubbleSortDescending(arr) {
// //   let len = arr.length;
// //   for (let i = 0; i < len; i++) {
// //     for (let j = 0; j < len - 1; j++) {
// //       if (arr[j] < arr[j + 1]) {
// //         let temp = arr[j];
// //         arr[j] = arr[j + 1];
// //         arr[j + 1] = temp;
// //       }
// //     }
// //   }
// //   return arr;
// // }

// // let масив = [3, 1, 8, 4, 10, 2];
// // console.log(bubbleSortDescending(масив)); // Вивід: [10, 8, 4, 3, 2, 1]

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

//   Пример работы:
//   Input: withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
//   Output: 37 (и массив balances должен быть [1400, 37, -6])

//   Input: withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)
//   Output: -1 (и массив balances должен быть [1400, 87, -6])

// function withdraw(clients, balances, client, amount) {
//   if (!Array.isArray(clients)) {
//     return null;
//   }
//   if (!Array.isArray(balances)) {
//     return null;
//   }

//   let index = -1;
//   for (let i = 0; i < clients.length; i++) {
//     if (clients[i] === client) {
//       index = i;
//       break;
//     }
//   }

//   if (index !== -1) {
//     if (balances[index] >= amount) {
//       balances[index] -= amount;
//       return balances[index];
//     }
//     return -1;
//   }
//   return -1;
// }

// // let balances = [1400, 87, -6];
// // console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
// // console.log(balances);

// // function withdraw(clients, balances, client, amount) {
// //   let index = -1;
// //   for (let i = 0; i < clients.length; i++) {
// //     if (clients[i] === client) {
// //       index = i;
// //       break;
// //     }
// //   }

// //   if (index !== -1) {
// //     if (balances[index] >= amount) {
// //       balances[index] -= amount;
// //       return balances[index];
// //     } else {
// //       return -1;
// //     }
// //   } else {
// //     return -1;
// //   }
// // }

// let clients = ['Ann', 'John', 'User'];
// let balances = [1400, 87, -6];
// let clientName = 'John';
// let amountToWithdraw = 50;

// let remainingBalance = withdraw(clients, balances, clientName, amountToWithdraw);
// console.log(remainingBalance); // Вивід: 37
// console.log(balances); // Вивід: [1400, 37, -6]

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// const getSubArray = (arr, numberOfElements) => {
//   const subArray = [];
//   for (let i = 0; i < numberOfElements; i++) {
//     subArray.push(arr[i]);
//   }
//   return subArray;
// };

// console.log(getSubArray([11, 4, 8, 3], 2));
// console.log(getSubArray([1, 2, 3, 4, 5], 3));
// // **Пример работы:**
// // Input: getSubArray([11, 4, 8, 3], 2)
// // Output: [11, 4]

// // Input: getSubArray([1, 2, 3, 4, 5], 3)
// // Output: [1, 2, 3]

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// const includes = (arr, num) => {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === num) {
//       return true;
//     }
//   }
//   return false;
// };

// // examples
// console.log(includes([1, 4, 8, 3], 3)); // ==> true
// console.log(includes([1, 4, 8, 3], 5)); // ==> false

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// const removeDuplicates = (array) => {
//   if (!Array.isArray(array) && array.length > 0) {
//     return null;
//   }

//   const removedDuplicates = [];
//   for (let i = 0; i < array.length; i++) {
//     if (removedDuplicates.indexOf(array[i]) === -1) {
//       removedDuplicates.push(array[i]);
//     }
//   }
//   return removedDuplicates;

// };

// console.log(removeDuplicates([1, 2, 3, 4, 2, 3, 5]));

// function removeDuplicatesFromArray(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     let isDuplicate = false;
//     for (let j = 0; j < newArray.length; j++) {
//       if (array[i] === newArray[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//     if (!isDuplicate) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// let existingArray = [1, 2, 3, 4, 2, 3, 5];
// let updatedArray = removeDuplicatesFromArray(existingArray);
// console.log(updatedArray); // Output: [1, 2, 3, 4, 5]

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// function uniqueCount(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array.indexOf(array[i]) === i) {
//       count += 1;
//     }
//   }

//   return count;
// }

// console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));