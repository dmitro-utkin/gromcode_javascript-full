// перебір масива

// const numbers = [11, 22, 33, 55, 66];

// let sumOfNumbers = 0;
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   sumOfNumbers += numbers[i];
// }

// console.log('Result: ' + sumOfNumbers);

// function sum(numbers) {
//   let sumOfNumbers = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sumOfNumbers += numbers[i];
//   }
//   return sumOfNumbers;
// }
function sum(numbers) {
  let sumOfNumbers = 0;

  for (let num of numbers) {
    sumOfNumbers += num;
  }

  return sumOfNumbers;
}
const numbers = [11, 22, 33, 55, 66];
const sumOfElements = sum(numbers);

console.log('Result: ' + sumOfElements);

// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------

// const numbers = [11, 22, 33, 55, 66];

// const arr = numbers;

// arr[2] = 100;

// console.log(numbers);
