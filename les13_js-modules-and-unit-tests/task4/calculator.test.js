import { calc } from './calculator';

describe('calc function', () => {
  it('should correctly add two numbers', () => {
    expect(calc('2 + 3')).toBe('2 + 3 = 5');
  });

  it('should correctly subtract two numbers', () => {
    expect(calc('5 - 3')).toBe('5 - 3 = 2');
  });

  it('should correctly multiply two numbers', () => {
    expect(calc('2 * 3')).toBe('2 * 3 = 6');
  });

  it('should correctly divide two numbers', () => {
    expect(calc('6 / 3')).toBe('6 / 3 = 2');
  });

  it('should return null if passed a non-string', () => {
    expect(calc(123)).toBeNull();
  });
});