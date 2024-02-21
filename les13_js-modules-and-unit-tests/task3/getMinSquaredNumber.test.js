import getMinSquaredNumber from './getMinSquaredNumber';

describe('getMinSquaredNumber function', () => {
  it('should return null if passed an empty array', () => {
    expect(getMinSquaredNumber([])).toBeNull();
  });

  it('should return null if passed a string', () => {
    expect(getMinSquaredNumber('string')).toBeNull();
  });

  it('should return the square of the minimum absolute number in the array', () => {
    expect(getMinSquaredNumber([-777, 3, -2, 6, 45, -20])).toBe(4);
  });
});