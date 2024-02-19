// transformToObject 

// const prop = 'my';

// const obj = {
//   name: 'Tom',
//   age: 17,
//   interest: 'footbal',
//   'my name': 'Bob',
//   [prop + 'name']: 'value',
// }

// console.log(obj.name);

// obj.name = "Dima";

// console.log(obj.name);
// console.log(obj['my name']);
// console.log(obj[prop + 'name']);

// ------------------------------------------

// [1, 'text'] => {'1': 1, text: 'text'}

// const transformToObject = arr => {
//   const obj = {};

//   arr.forEach(el => {
//     obj[el] = el;
//   })

//   return obj;
// };

// console.log(transformToObject([1, 'text']));

// const user = {
//   name: 'Tom',
// }

// user.name = 'Bob';
// console.log(user.name);

// ----------------------------------------------

// const a = {};
// const b = {};

// console.log(a == b); // false
// console.log(a === b); // false

// const c = {};
// const d = c;

// console.log(c == d); // true
// console.log(c === d); // true

// ----------------------------------------------

// const name = 'Tom';

// const user = {
//   // name: name,
//   name,
// }