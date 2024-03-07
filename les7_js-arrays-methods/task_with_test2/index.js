// export function withdraw(clients, balances, client, amount) {
//   const index = clients.findIndex((item) => item === client);
//   return index !== -1
//     ? balances[index] >= amount
//       ? ((balances[index] -= amount), balances[index])
//       : -1
//     : -1;
// }

// const clients = ["Ann", "John", "User"];
// const balances = [1400, 87, -6];
// const clientName = "John";
// const amountToWithdraw = 40;

// const remainingBalance = withdraw(
//   clients,
//   balances,
//   clientName,
//   amountToWithdraw
// );
// console.log(remainingBalance); // Вивід: 37
// console.log(balances); // Вивід: [1400, 37, -6]

// ------------------------------------------
// ---------- Code review -------------------
// ------------------------------------------

// const withdraw = (clients, balances, client, amount) => {
//   const index = clients.findIndex((item) => item === client);
//   return index !== -1
//     ? balances[index] >= amount
//       ? ((balances[index] -= amount), balances[index])
//       : -1
//     : -1;
// };

// // examples
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50); // ==> 37 (balances array should be [1400, 37, -6])
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10); // ==> -1 (balances array should be [1400, 87, -6])

// const withdraw = (clients, balances, client, amount) => {
//   const index = clients.findIndex((item) => item === client);
//   if (index === -1) {
//     return -1;
//   }

//   if (balances[index] < amount) {
//     return -1;
//   }

//   balances[index] -= amount;
//   return balances[index];
// };

// // examples
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // ==> 37 (balances array should be [1400, 37, -6])
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10); // ==> -1 (balances array should be [1400, 87, -6])
