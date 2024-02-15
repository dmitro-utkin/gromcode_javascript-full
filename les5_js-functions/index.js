// /**
//  * @param {number} firstNum
//  * @param {number} secondNum
//  * @return {number}
//  */
// function sum(firstNum, secondNum) {
//   return firstNum + secondNum;
// }

// // examples
// console.log(sum(11, 11)); // ==> 22
// console.log(sum(-2, 10)); // ==> 8

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------

// function sayHi (name) {
//   const greeting = 'Hi, ' + name;
//   console.log(greeting);
// }

// sayHi('Tom')

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------

// function getEvenOdd(num) {
//   if (num % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// }

// const result = getEvenOdd(2);

// console.log(result);

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------

// const square = (num) => num * num;

// const result = square(6);

// console.log(result);

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// 'use strict';

// /**
//  * @param {number} from
//  * @param {number} to
//  * @return {number}
//  */
// function getSum(from, to) {
//   let sum = 0;
//   for (let i = from; i <= to; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// // examples
// // TODO

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------

// function increaser(a, index) {
//   if (a > index) {
//     a += index;
//   }
//   return a;
// }

// console.log(increaser(11, 10))

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------

// 'use strict';

// function sum(from, to) {
//   let result = 0;

//   for (let index = from; index <= to; index += 1) {
//     result += index;
//   }
//   return result;
//   // }
// }

// function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
//   return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
// }

// // examples
// sum(5, 10); // ===> 45
// sum(11, 11); // ===> 11

// compareSums(5, 10, 5, 10); // ===> false
// compareSums(5, 15, 3, 5); // ===> true
// compareSums(-2, 5, 5, 9); // ===> false

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------

// function findDivCount(a, b, n) {
//   let count = 0;
//   for (let i = a; i <= b; i++) {
//     if (i % n === 0) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(findDivCount(10, 30, 10));

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------

// function getPrimes(num) {
//   for (let i = 2; i <= num; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//     }
//   }
// }
// console.log(getPrimes(22));