// methods

// const uesr = {
//   name: "John",
//   age: 17,
//   sayHi(num) {
//     console.log(num);
//     console.log(`Hi. I am ${this.name}.`);
//   },
// };

// // uesr.walk = function walk() {
// //   console.log('I\'m walking');
// // };

// // uesr.sayHi = function() {
// //   console.log(`Hi. I am ${this.name}.`);
// // }

// uesr.sayHi(1);

// ---------------------------------

// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 17,
//   getFullName() {
//     console.log(`Hi. I am ${this.firstName} ${this.lastName}.`);
//   },
// };

// // uesr.getFullName();

// // const func = user.getFullName;

// // func();

// // .bind();

// const func = user.getFullName.bind(user);

// func();

// ---------- .bind() -------------------

// const user = {
//   name: "Doe",
//   getFullName() {
//     console.log(`Hi. I am ${this.name}.`);
//   },
// };

// const func = user.getFullName.bind({name: 'Tom'});

// func();

// --------- .call() ---------------

// const user = {
//   name: "Doe",
//   getFullName() {
//     console.log(`Hi. I am ${this.name}.`);
//   },
// };

// const func = user.getFullName;

// func.call({ name: 'Tom' });

// ------ .apply() ----------------------

const user = {
  name: "Doe",
  sayHi(age, message) {
    console.log(`${message}. I'm ${this.name}. I'm ${age} years old.`);
  },
};

// const func = user.sayHi(17, 'Hello');

// func(17, 'Hello');

// func.apply({ name: 'Tom' });
