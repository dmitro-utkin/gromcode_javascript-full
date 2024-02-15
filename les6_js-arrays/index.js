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

function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const minEl = 
}
