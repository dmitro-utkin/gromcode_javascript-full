// function getFiniteNumbers(arr) {
//   return arr.filter(value => Number.isFinite(value));
// }

// function getFiniteNumbersV2(arr) {
//   return arr.filter(value => isFinite(value));
// }

// function getNaN(arr) {
//   return arr.filter(value => Number.isNaN(value));
// }

// function getNaNV2(arr) {
//   return arr.filter(value => isNaN(value));
// }

// function getIntegers(arr) {
//   return arr.filter(value => Number.isInteger(value));
// }

// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------

// function getParsedIntegers(arr) {
//   return arr.map(value => Number.parseInt(value));
// }

// function getParsedIntegersV2(arr) {
//   return arr.map(value => parseInt(value));
// }

// function getParsedFloats(arr) {
//   return arr.map(value => Number.parseFloat(value));
// }

// function getParsedFloatsV2(arr) {
//   return arr.map(value => parseFloat(value));
// }

// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------

// const multiRound = num => [
//   Math.floor(num * 100) / 100,
//   Math.trunc(num * 100) / 100,
//   Math.ceil(num * 100) / 100,
//   Math.round(num * 100) / 100,
//   +num.toFixed(2),
// ];

// console.log(multiRound(11.12556));
// console.log(multiRound(6.112));

// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------

// const getMaxAbsoluteNumber = (arr) => {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     return null;
//   }
//   const absoluteValues = arr.map((num) => Math.abs(num));

//   return Math.max(...absoluteValues);
// };

// // const getMaxAbsoluteNumber = arr => {
// //   if (!Array.isArray(arr) || arr.length === 0) {
// //     return null;
// //   }
// //   const absoluteValues = arr.map(value => Math.abs(value));
// //   return Math.max(...absoluteValues);
// // };
// // examples
// console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
// console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
// console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
// console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777

// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------

// // function getTotalPrice(arr) {
// //   const sum = arr.reduce((acc, curr) => acc + curr, 0);
// //   const roundedSum = Math.floor(sum * 100) / 100;
// //   return `$${roundedSum.toFixed(2)}`;
// // }
// function getTotalPrice(arr) {
//   const sum = arr.reduce((acc, num) => acc + num, 0);
//   const roundedSum = Math.floor(sum * 100) / 100;
//   return '$' + roundedSum.toFixed(2);
// }


// // Примеры работы
// console.log(getTotalPrice([1.25, 2.15, 3.99])); // '$7.39'
// console.log(getTotalPrice([4.555, 1.333, 2.111])); // '$7.99'

// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------

// function getRandomNumbers(length, start, end) {
//   if (Math.abs(end - start) < 1 || start > end) {
//     return null;
//   }

//   const min = Math.ceil(start);
//   const max = Math.floor(end);

//   return new Array(length)
//     .fill()
//     .map((el) => Math.floor(Math.random() * (max - min) + min));
// }

function getRandomNumbers(length, start, end) {
  const min = Math.ceil(start);
  // console.log(min)
  const max = Math.ceil(end);
  // console.log(max)
  return (start > end || max === min) 
    ? null
    : new Array(length)
      .fill()
      .map((el) => Math.floor(Math.random() * (max - min) + min));
}

// console.log(getRandomNumbers(5, 1.4, 3.22));
// console.log(getRandomNumbers(5, 1.4, 3.22));
// console.log(getRandomNumbers(5, 1.4, 3.22));
// console.log(getRandomNumbers(3, 2.4, 4.5));
// console.log(getRandomNumbers(3, 2.4, 4.5));
// console.log(getRandomNumbers(10, 8, 17.5));
// console.log(getRandomNumbers(50, 90.5, 95));

// console.log(getRandomNumbers(7, 1.4, 1.9));
// console.log(getRandomNumbers(7, 2.11, 2.9));
// console.log(getRandomNumbers(1, 2.5, 0.9));

// console.log(getRandomNumbers(7, 1.5, 1.9));
// console.log(getRandomNumbers(7, 0.4, 0.5));
// console.log(getRandomNumbers(7, 0.1, 0.96));
// console.log(getRandomNumbers(7, 1.01, 1.1));

console.log(getRandomNumbers(20, 0.5, 1.1));

// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------



// const superRound = (num, prec) => [
//   Math.floor(num * Math.pow(10, prec)) / Math.pow(10, prec),
//   Math.trunc(num * Math.pow(10, prec)) / Math.pow(10, prec),
//   Math.ceil(num * Math.pow(10, prec)) / Math.pow(10, prec),
//   +(Math.round(num * Math.pow(10, prec)) / Math.pow(10, prec)).toFixed(prec),
//   +num.toFixed(prec)
// ];

// // console.log(multiRound(11.12556));
// // console.log(multiRound(6.112));

// // examples
// console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]