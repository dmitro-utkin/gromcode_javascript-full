// count

// let count = 0;

// const makeCounter = () => {
//   return function () {
//     return count ++;
//   }
// }; // - втаком випадку буде виводитись 0, 1, 2, 3, 4, 5

// ------------------------------


const makeCounter = () => {
  let count = 0;
  return function () {
    return count++;
  }
}; // - втаком випадку буде виводитись 0, 1, 2, 3, 0, 1

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

console.log(counter2()); // 0
console.log(counter2()); // 1