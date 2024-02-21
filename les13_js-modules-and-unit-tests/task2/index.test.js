import getSum, { getSquareNumbers, getOddNumbers, getSquareArray } from "./calculator.js";

it('should get squared numbers', () => {
  const result = getSquareArray([2, 2, 3]);
  expect(result).toEqual([4, 4, 9]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it('should get sum of numbers', () => {
  const result = getSum(8, 4);
  expect(result).toEqual(12);
});
