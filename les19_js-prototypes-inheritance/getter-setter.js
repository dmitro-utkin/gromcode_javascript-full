// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   },
//   set fullName(value) {
//     const [firstName, lastName] = value.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//   },
// }

// user.fullName = 'Tom Hardy'

// console.log(user.firstName);

// Можна не обов'язково викоритсовувати 'getter` або 'setter':

const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  setfullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
}

user.setfullName('Tom Hardy');

console.log(user.fullName);