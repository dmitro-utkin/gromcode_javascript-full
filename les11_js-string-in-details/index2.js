// sortContacts

// String.fromCodePoint(65); // A
// 'Ann'.charCodeAt(0); // 65
// 'd'.charCodeAt(); // 100

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '666-66-66',
  },
  {
    name: 'John',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Ann',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Stephan',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Suzy',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Adel',
    phoneNumber: '111-11-11',
  },
];

// const sortContacts = arr => {
//   const result = contacts
//     .sort((a, b) => {
//       // return a.name.localeCompare(b.name); // по возростанію
//       return b.name.localeCompare(a.name); // по убиванію
//     });

//   return result;
// };

// console.log(sortContacts(contacts));


const sortContacts = (arr, isAsc) => {
  const result = contacts
    .sort((a, b) => {
      // return a.name.localeCompare(b.name); // по возростанію
      return b.name.localeCompare(a.name); // по убиванію
    });

  return result;
};

console.log(sortContacts(contacts));
