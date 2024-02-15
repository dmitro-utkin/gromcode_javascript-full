const prefix = 'Hi, ';


function sayHi(name, anotherName = 'anonymus') {
  const greeting = prefix + name + ' and ' + anotherName;
  console.log(greeting);
}

sayHi('Tom', 'Bob');
// function sayHi(name = 'anonymus') {
//   const greeting = prefix + name;
//   console.log(greeting);
// }

// sayHi();

// function sayHi (name) {
//   console.log(arguments);
//   const greeting = prefix + name;
//   console.log(greeting);
// }

// sayHi('Dimas', 'Bob')

// function sayHi (name, anotherName) {
//   console.log('anotherName: ', anotherName);
//   const greeting = prefix + name;
//   console.log(greeting);
// }

// sayHi('Dimas', 'Bob')

// function sayHi (name) {
//   const greeting = prefix + name;
//   console.log(greeting);
// }

// sayHi('Dimas')

// function sayHi (name) {
//   const greeting = 'Hi, ' + name;
//   console.log(greeting);
// }

// sayHi('Dima')