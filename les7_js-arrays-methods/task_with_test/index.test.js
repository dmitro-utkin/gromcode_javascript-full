import { reverseArray } from './index';

describe('reverseArray function', () => {
  it('should reverse the array', () => {
    const array = [0, 0, 1, 3];
    expect(reverseArray(array)).toEqual([3, 1, 0, 0]);
  });

  it('should not modify the original array', () => {
    const array = [0, 0, 1, 3];
    reverseArray(array);
    expect(array).toEqual([0, 0, 1, 3]);
  });

  it('should return null if passed a non-array', () => {
    expect(reverseArray('not an array')).toBeNull();
  });
});
