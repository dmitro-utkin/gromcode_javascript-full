import { getAdults } from './index';

describe('getAdults function', () => {
  it('should return an object with adult users when passed an object with mixed ages', () => {
    const users = { 'John Doe': 19, Tom: 17, Bob: 18, Alice: 25 };
    expect(getAdults(users)).toEqual({ 'John Doe': 19, Bob: 18, Alice: 25 });
  });

  it('should return an empty object when passed an object with no adult users', () => {
    const users = { Ann: 16, Andrey: 17, Mike: 12 };
    expect(getAdults(users)).toEqual({});
  });

  it('should return the same object when passed an object with all adult users', () => {
    const users = { Ann: 25, Chris: 30, Sarah: 22 };
    expect(getAdults(users)).toEqual({ Ann: 25, Chris: 30, Sarah: 22 });
  });
});
