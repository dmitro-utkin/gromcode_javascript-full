// getAdults

// const user = {
//   name:'Tom',
//   age: 17,
// };

// Object.keys();
// Object.values();
// Object.entries();

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// ----------------------------------

// const users = {
//   'Tom': 17,
//   'John Doe': 19,
//   'Bob': 18,
// };


// bad!
// const getAdults = usersObj => {
//   // {'Tom': 17, 'John Doe': 19, 'Bob': 18,} => [['Tom', 17], ['John Doe', 19],['Bob', 18]]
//   const usersArray = Object.entries(usersObj);
//   // [['Tom', 17], ['John Doe', 19],['Bob', 18]] => [['John Doe', 19],['Bob', 18]]
//   const filteredUsersArray = usersArray.filter(user => user[1] >= 18);
//   // [['John Doe', 19],['Bob', 18]] => ['John Doe', 'Bob']
//   const usersNames = filteredUsersArray.map(user => user[0]);

//   return usersNames;
// };

// good!
// const getAdults = usersObj => Object
//   .entries(usersObj)
//   .filter(user => user[1] >= 18)
//   .map(user => user[0]);


// console.log(getAdults(users))

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// user { } => ['Tom', 18]

// const user = {
//   name: "Tom",
//   age: 18,
// };

// const concatProps = (obj) => Object.values(obj);

// console.log(concatProps(user));