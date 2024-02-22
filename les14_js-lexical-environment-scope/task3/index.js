// let defaultNumber = 0;

// const add = num => defaultNumber += num;
// console.log(add(1));

// const decrease = num => num = defaultNumber - num;
// console.log(decrease(2));

// const reset = () => num = 0;
// console.log(reset());

// const getMemo = num => defaultNumber;
// console.log(getMemo(1));

// module.exports = {
//   add,
//   decrease,
//   reset,
//   getMemo,
// };

// ----------------------------

let memory = 0;

export function add(number) {
  memory += number;
}

export function decrease(number) {
  memory -= number;
}

export function reset() {
  memory = 0;
}

export function getMemo() {
  return memory;
}

console.log(add(1));
console.log(decrease(2));
console.log(reset());
console.log(getMemo());