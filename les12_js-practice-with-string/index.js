// const  calc = expression => {
//   const [a, operator, b] = expression.split(' ');
//   let result;

//   switch (operator) {
//     case '+':
//       result = Number(a) + Number(b);
//       break;
//     case '-':
//       result = a - b;
//       break;
//     case '*':
//       result = a * b;
//       break;
//     case '/':
//       result = a / b;
//       break;
//   }

//   return `${expression} = ${result}`;
// };

// console.log(calc('2 / 2'));

// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------

// const reverseString = (str) => {
//   return typeof str !== "string"
//     ? null
//     : str.split('').reverse().join('');
// };

// console.log(reverseString('qwerty'));

// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------

// const cleanTransactionsList = transactionList => {
//   const cleanList = transactionList
//     .filter(item => typeof item === "string" && !isNaN(item.replace(" ", "")))
//     .map(item => {
//       const trimmedItem = item.trim();
//       const number = parseFloat(trimmedItem);
//       if (!isNaN(number)) {
//         const formattedNumber = number.toFixed(2);
//         return `$${formattedNumber}`;
//       }
//       return null; // якщо елемент не є числом, вертаємо null
//     })
//     .filter(item => item !== null); // видаляємо всі невалідні елементи (де item=null) з масиву
//   return cleanList;
// };

// const transactionList = ['  1.9 ', '16.4', 17, ' 1 dollar '];
// const result = cleanTransactionsList(transactionList);
// console.log(result); // Output: ['$1.90', '$16.40', '$17.00']
// console.log(transactionList); // Input array remains unchanged

// ---------------------------------------------------------------------

// const cleanTransactionsList = transactionList => {
//   return transactionList.map(item => {
//     const stripped = item.toString().replace(/[^\d.]/g, ''); // видаляємо всі символи окрім цифр та крапок
//     const number = parseFloat(stripped); // парсимо рядкове число в float
//     if (!isNaN(number)) {
//       return `$${number.toFixed(2)}`; // форматуємо число до двох десяткових знаків та додаємо знак $
//     }
//     return null; // якщо не можемо отримати числове значення повертаємо null
//   }).filter(item => item !== null); // видаляємо всі невалідні елементи (де item=null) з масиву
// };

// const cleanTransactionsList = (transactionList) => {
//   return transactionList
//     .map((item) => {
//       const stripped = item.toString().replace(/[^\d.]/g, "");
//       const number = parseFloat(stripped);
//       if (!isNaN(number)) {
//         return `$${number.toFixed(2)}`;
//       }
//       return null;
//     })
//     .filter((item) => item !== null);
// };

// const transactions = ["  1.9 ", "16.4", 17, " 1 dollar "];
// const result = cleanTransactionsList(transactions);
// console.log(result); // Output: ['$1.90', '$16.40', '$17.00', '$1.00']
// console.log(transactions);

// --------------------------------------------------------------

// const cleanTransactionsList = transactionList => {
//   const cleanList = transactionList
//     .map(item => item.toString()) // перетворюємо всі елементи у строки
//     .filter(item => {
//       const stringWithoutSpaces = item.replace(/\s/g, ''); // видаляємо всі пробіли з рядка
//       return !isNaN(stringWithoutSpaces); // повертаємо true якщо рядок представляє собою число
//     })
//     .map(item => {
//       const trimmedItem = item.trim();
//       const number = parseFloat(trimmedItem);
//       const formattedNumber = number.toFixed(2);
//       return `$${formattedNumber}`;
//     });
//   return cleanList;
// };

// const transactionList = ['  1.9 ', '16.4', 17, ' 1 dollar '];
// const result = cleanTransactionsList(transactionList);
// console.log(result); // Output: ['$1.90', '$16.40', '$17.00']
// console.log(transactionList); // Вихідний масив залишається незмінним
