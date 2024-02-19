// copyObj

// const users = {
//   'Tom': 17,
//   'Bob' : 100,
// };

// const players = {
//   'John Doe': 19,
//   'Bob': 18,
// }

// const result = Object.assign({}, users);

// console.log(result === users);

// result.Tom = 90;

// console.log(users);

// const copyObj = obj => Object.assign({}, obj);

// console.log(copyObj(players))

//------------------------------------------
//------------------------------------------
//------------------------------------------
//------------------------------------------
//------------------------------------------
//------------------------------------------

// const user = {
//   name:'Tom',
//   age:17,
// };

// const player = {...user};

// console.log(player === user);
// console.log(player);

// -----------Destructurisation---------------

// const {name = 'default'} = user;

// console.log(name);

// const {name = 'default', ...restProps} = user;

// // console.log(restProps);

// const player = {
//   game: 'football',
//   ...restProps,
// }

// console.log(player);