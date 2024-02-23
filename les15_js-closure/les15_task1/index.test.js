import { makeCounter } from "./index.js";

describe('makeCounter', () => {
  it('should return 0 for the first invocation of counter1', () => {
    const counter1 = makeCounter();
    expect(counter1()).toEqual(0);
  });

  it('should return 1 for the second invocation of counter1', () => {
    const counter1 = makeCounter();
    counter1(); // Incrementing count to 1
    expect(counter1()).toEqual(1);
  });

  it('should return 0 for the first invocation of counter2', () => {
    const counter2 = makeCounter();
    expect(counter2()).toEqual(0);
  });
});