// methods

// const user = {
//     name: 'John',
//     age: 17,
//     // sayHi: function() {
//     //     console.log(`Hi, i am ${this.name}`)
//     // }

//     // sayHi() {
//     //     console.log(`Hi, i am ${this.name}`)
//     // }
//     sayHi(num) {
//         console.log(num)
//         console.log(`Hi, i am ${this.name}`)
//     }
// }

// user.walk = function walk() {
//     console.log('I\'m walking');
// };

// user.sayHi = function() {
//     console.log(`Hi, i am ${this.name}`)
// }

// user.sayHi(2);


// ----------------------------------------

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     getFullName() {
//         console.log(`${this.firstName} ${this.lastName}`);
//     },
// }

// user.getFullName();


// ------ .bind() ---------

// const user = {
//     name: 'Doe',
//     getFullName() {
//         console.log(this.name);
//     },
// }

// const func = user.getFullName.bind(user);
// const func = user.getFullName.bind({ name: 'Tom' });

// func();

// ------ .call() ------------

// const user = {
//     name: 'Doe',
//     getFullName() {
//         console.log(this.name);
//     },
// }

// const func = user.getFullName;

// func.call({ name: 'Tom' })

// ------- .apply() ----------

const user = {
    name: 'Doe',
    sayHi(age, message) {
        console.log(`${message}. I'm ${this.name}. I'm ${age} years old`);
    },
}

// const func = user.sayHi(17, 'Hello');
const func = user.sayHi;

// func(17, 'Hello');

const anotherUser = {
    name: 'Tom',
}

func.apply(anotherUser, [17, "Hello"]);
// func.call(anotherUser, 17, "Hello");