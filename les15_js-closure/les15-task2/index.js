export const createCalculator = () => {
  let memory = 0;

  function add(number) {
    memory += number;
  }

  function decrease(number) {
    memory -= number;
  }

  function reset() {
    memory = 0;
  }

  function getMemo() {
    return memory;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calculator = createCalculator();
const calculatorNext = createCalculator();

console.log(calculator.getMemo()); // 0
console.log(calculator.add(3));
console.log(calculator.getMemo()); // 3
console.log(calculator.decrease(5));
console.log(calculator.getMemo()); // -2

console.log(calculatorNext.add(5));
console.log(calculatorNext.getMemo()); // 5

console.log(calculator.getMemo()); // -2
console.log(calculator.reset());
console.log(calculator.getMemo()); // 0

console.log(calculatorNext.getMemo()); // 5
