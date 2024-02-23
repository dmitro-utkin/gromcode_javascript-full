Explain
import { createCalculator } from './index';

describe('createCalculator', () => {
  it('should return 0 as initial value', () => {
    const calculator = createCalculator();
    expect(calculator.getMemo()).toEqual(0);
  });

  it('should add correctly', () => {
    const calculator = createCalculator();
    calculator.add(3);
    expect(calculator.getMemo()).toEqual(3);
  });

  it('should decrease correctly', () => {
    const calculator = createCalculator();
    calculator.decrease(5);
    expect(calculator.getMemo()).toEqual(-5);
  });

  it('should reset correctly', () => {
    const calculator = createCalculator();
    calculator.add(3);
    calculator.reset();
    expect(calculator.getMemo()).toEqual(0);
  });

  it('should retain separate memories for multiple instances', () => {
    const calculator = createCalculator();
    const calculatorNext = createCalculator();
    calculator.add(3);
    calculatorNext.add(5);
    expect(calculator.getMemo()).toEqual(3);
    expect(calculatorNext.getMemo()).toEqual(5);
  });
});
