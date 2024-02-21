export function withdraw(clients, balances, client, amount) {
  const index = clients.findIndex((item) => item === client);
  return index !== -1
    ? balances[index] >= amount
      ? ((balances[index] -= amount), balances[index])
      : -1
    : -1;
}

const clients = ["Ann", "John", "User"];
const balances = [1400, 87, -6];
const clientName = "John";
const amountToWithdraw = 40;

const remainingBalance = withdraw(
  clients,
  balances,
  clientName,
  amountToWithdraw
);
console.log(remainingBalance); // Вивід: 37
console.log(balances); // Вивід: [1400, 37, -6]
