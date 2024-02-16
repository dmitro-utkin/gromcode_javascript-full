/*
// uppercase
// const TIME_TO_GO = 10; // Magical number
// const SECRET_NAME = 'test';

// bad
function withdraw(clients, balances, client, amount) {
  let index = clients.indexOf(client);
  if (amount > balances[index]) {
    return -1;
  } else if (amount <= balances[index]) {
    const result = [];

    balances.forEach(num => {
      if (num === balances[index]) {
        result.push(num - amount);
      } else {
        result.push(num);
      }
    });

    return result[index];
  }
};

// good
const withdraw = (clients, balances, client, amount) => {
  let index = clients.indexOf(client);

  if (amount > balances[index]) {
    return -1;
  }

  balances[index] -= amount;
  return balances[index];
}

// good
function withdraw(clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);

  if (balances[clientIndex] < amount) {
    return -1;
  }

  balances[clientIndex] -= amount;
  return balances[clientIndex];
}

// bad
const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client);
  const balanceOfClient = balances[indexOfClient];
  

  if (amount > balanceOfClient) {
    return -1;
  } else {
    return balanceOfClient - amount;
  }
};

// good
// const withdraw = (clients, balances, client, amount) => {
//   const indexOfClient = clients.indexOf(client);

//   if (amount > balances[indexOfClient]) {
//     return -1;
//   }
  
//   return balances[indexOfClient] - amount;
// }
const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client);
  return amount > balances[indexOfClient] ? -1 : balances[indexOfClient] - amount;
}
*/

//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------

// bad
// function getRandomNumbers(number,start, end) {
//   let resArr = [];

//   if (Math.abs(end - start) < 1) {
//     return null;
//   }

//   start = Math.ceil(start);
//   end = Math.floor(end);

//   for (let i = 0; i < number; i++) {
//     if (start > 0 && end > 0) {
//       resArr.push(Math.floor(Math.random() * (end - start + 1)) + start);
//     } else {
//       resArr.push(Math.ceil(Math.random() * (end - start + 1)) + start);
//     }
//   }

//   return resArr;
// }

// good
function getRandomNumbers(length, start, end) {
  if (Math.abs(end - start) < 1) {
    return null;
  }

  const min = Math.ceil(start);
  const max = Math.ceil(end);

  return new Array(length).fill().map(el => Math.floor(Math.random() * (max - min) + min));
}

console.log(getRandomNumbers(10, 1.4, 3.6));
