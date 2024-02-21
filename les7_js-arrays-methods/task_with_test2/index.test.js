import { withdraw } from './index';

describe('withdraw function', () => {
  it('should withdraw the specified amount and return the remaining balance if the client exists and has sufficient balance', () => {
    const clients = ["Ann", "John", "User"];
    const balances = [1400, 87, -6];
    const clientName = "John";
    const amountToWithdraw = 40;
    expect(withdraw(clients, balances, clientName, amountToWithdraw)).toBe(47);
    expect(balances).toEqual([1400, 47, -6]);
  });

  it('should return -1 if the client does not exist', () => {
    const clients = ["Ann", "John", "User"];
    const balances = [1400, 87, -6];
    const clientName = "Mike";
    const amountToWithdraw = 40;
    expect(withdraw(clients, balances, clientName, amountToWithdraw)).toBe(-1);
    expect(balances).toEqual([1400, 87, -6]);
  });

  it('should return -1 if the client has insufficient balance', () => {
    const clients = ["Ann", "John", "User"];
    const balances = [1400, 87, -6];
    const clientName = "John";
    const amountToWithdraw = 100;
    expect(withdraw(clients, balances, clientName, amountToWithdraw)).toBe(-1);
    expect(balances).toEqual([1400, 87, -6]);
  });
});
