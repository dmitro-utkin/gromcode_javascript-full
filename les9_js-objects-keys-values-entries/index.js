// const users = {
//   'Tom': 17,
//   'John Doe': 19,
//   'Bob': 18,
// };

// const getAdults = usersObj => Object
//   .entries(usersObj)
//   .filter(user => user[1] >= 18)
//   .map(user => user[0]);

// console.log(getAdults(users))

//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------

// const copyObj = obj => Object.assign({}, obj);

//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------

// const getKeys = (obj) => {
//   Object.keys(obj).forEach(key => {
//     console.log(key);
//   });
// };
// // examples
// console.log(getKeys({ name: "Denis", city: "Warsaw", englishLevel: "A1" }));
// // prints ===>
// // name
// // city
// // englishLevel

//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------

// // Function to add property using dot notation
// function addPropertyV1(userData, userId) {
//   userData.id = userId;
//   return userData;
// }

// // Function to add property using Object.assign to mutate the original object
// function addPropertyV2(userData, userId) {
//   return Object.assign(userData, { id: userId });
// }

// // Function to add property using Object.assign to create a new object and not mutate the original one
// function addPropertyV3(userData, userId) {
//   return Object.assign({}, userData, { id: userId });
// }

// // Function to add property using spread operator to create a new object and not mutate the original one
// function addPropertyV4(userData, userId) {
//   return { ...userData, id: userId };
// }

// // Example usage
// const user = {
//   name: 'Sam',
// };
// console.log(addPropertyV1(user, '1234567')); // Output: { name: 'Sam', id: '1234567' }
// console.log(addPropertyV2(user, '1234567')); // Output: { name: 'Sam', id: '1234567' }
// console.log(addPropertyV3(user, '1234567')); // Output: { name: 'Sam', id: '1234567' }
// console.log(addPropertyV4(user, '1234567')); // Output: { name: 'Sam', id: '1234567' }

//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------

// function mergeObjectsV1(obj1, obj2) {
//   return Object.assign({}, obj1, obj2);
// }

// function mergeObjectsV2(obj1, obj2) {
//   return Object.assign({}, obj2, obj1);
// }

// function mergeObjectsV3(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// function mergeObjectsV4(obj1, obj2) {
//   return { ...obj2, ...obj1 };
// }

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   student: false,
// };

// console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
// console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }

//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------

// const getPeople = obj => {
//   return Object.values(obj).flatMap(room => room.map(person => person.name));
// }

// // Example usage
// const rooms = {
//   room1: [
//     { name: 'Jack' },
//     { name: 'Andrey' },
//     { name: 'Ann' },
//     { name: 'Vasyl' }
//     // ...
//   ],
//   room2: [
//     { name: 'Dan' }
//     // ...
//   ],
//   room3: [
//     { name: 'Denis' },
//     { name: 'Max' },
//     { name: 'Alex' }
//     // ...
//   ]
//   // ...
// };

// // function getPeople(rooms) {
// //   return Object.values(rooms).map(room => room.map(person => person.name)).flat();
// // }

// const people = getPeople(rooms);
// console.log(people);
// // Output: ['Jack', 'Andrey', 'Ann', 'Vasyl', 'Dan', 'Denis', 'Max', 'Alex']

//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------

// const getTotalRevenue = (transactions) => transactions.reduce(
//   (total, transaction) => total + transaction.amount,
//   0,
// );

// // Example usage
// const dayTransactions = [
//   { userId: 22, amount: 60, operation: "sell" },
//   { userId: 22, amount: 160, operation: "buy" },
//   { userId: 44, amount: 90, operation: "sell" },
// ];

// const result = getTotalRevenue(dayTransactions);
// // Result: 310
// console.log(result);

//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------

// function addPropertyV1(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }
// function addPropertyV2(obj, key, value) {
//   return Object.assign(obj, { [key]: value });
// }
// function addPropertyV3(obj, key, value) {
//   return Object.assign({}, obj, { [key]: value });
// }
// function addPropertyV4(obj, key, value) {
//   return { ...obj, [key]: value };
// }

// // examples
// const transaction = {
//   value: 170,
// };
// console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------

// Explain
// function buildObject(keysList, valuesList) {
//   if (keysList.length !== valuesList.length) {
//     throw new Error('The arrays must be of the same length');
//   }

//   return keysList.reduce((acc, key, index) => {
//     return {
//       ...acc,
//       [key]: valuesList[index],
//     };
//   }, {});
// }

// const keys = ['name', 'age', 'city'];
// const values = ['Alice', '25', 'New York'];

// const result = buildObject(keys, values);
// Output: { name: 'Alice', age: '25', city: 'New York' }

// function buildObject(keysList, valuesList) {
//   if (keysList.length !== valuesList.length) {
//     throw new Error('The arrays must be of the same length');
//   }

//   const result = {};
//   for (let i = 0; i < keysList.length; i++) {
//     result[keysList[i]] = valuesList[i];
//   }
//   return result;
// }

// const keys = ['name', 'age', 'city'];
// const values = ['Alice', '25', 'New York'];

// const result = buildObject(keys, values);
// // Output: { name: 'Alice', age: '25', city: 'New York' }
// console.log(result)

//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------

// function compareObjects(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

// function compareObjects(firstObj, secondObj) {
//   const keys1 = Object.keys(firstObj);
//   const keys2 = Object.keys(secondObj);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (const key of keys1) {
//     if (firstObj[key] !== secondObj[key] || !secondObj.hasOwnProperty(key)) {
//       return false;
//     }
//   }

//   return true;
// }

// function compareObjects(firstObj, secondObj) {
//   const firstKeys = Object.keys(firstObj);
//   const secondKeys = Object.keys(secondObj);

//   if (firstKeys.length !== secondKeys.length) {
//     return false;
//   }

//   return firstKeys.every(key => secondObj.hasOwnProperty(key) && firstObj[key] === secondObj[key]);
// }

// // examples
// const obj1 = {
//   name: "Tom",
//   age: 17,
// };

// const obj2 = {
//   name: "Bob",
//   age: 17,
// };

// const obj3 = {
//   name: "Bob",
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: "Tom",
//   age: 17,
// };

// const obj5 = {
//   age: 17,
//   name: "Tom",
// };

// console.log(compareObjects(obj1, obj2)); // ==> false
// console.log(compareObjects(obj2, obj3)); // ==> false
// console.log(compareObjects(obj1, obj4)); // ==> true
// console.log(compareObjects(obj4, obj5)); // ==> true

//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------
//  --------------------------------

// Данные о пользователях храняться в виде объекта в формате
const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
};

// Нужно написать функцию, которая такой объект преобразует в массив и отсортирует пользователей по возрасту от самого младшего до старшего
// Основные требования:
// Функция с именем getCustomersList должна принимать объект в заданом выше формате
// Функция должна вернуть список пользователей в виде массива, отсортированного по возрасту по возрастанию
// Элементы итогового массива должны включать поле id, значением которого является ключ из исходного объекта
// [
//     {
//         name: 'Tom',
//         age: 17,
//         id: 'customer-id-2'
//     },     
//     {
//         name: 'William',
//         age: 54,
//         id: 'customer-id-1'
//     },
//     ...
// ]
// Исходный объект должен остаться неизменным

// function getCustomersList(customers) {
//   return Object.keys(customers).map(customerId => ({
//     id: customerId,
//     name: customers[customerId].name,
//     age: customers[customerId].age,
//   })).sort((a, b) => a.age - b.age);
// };

// console.log(getCustomersList(customers));
