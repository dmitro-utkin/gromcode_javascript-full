// methods .pop(), .push(), .shift(), .unshift()

// const people = ['Tom', 'Ann', 'Bob'];

// // people[people.length] = 'Jack';
// // people.length = 0;

// // people.unshift('Jack', 'John'); // добавили елементи в початок масива
// // people.push('Jack', 'John'); // add to end
// const last = people.pop('Jack', 'John'); // delete from end
// const first = people.shift('Jack', 'John'); // delete from start
// // people.push('Jack', 'John');


// console.log(first);
// console.log(last);
// console.log(people);
// console.log(people.length);

// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------

// from , to => [% 3 === 0]

function getSpecialNumbers(from, to) {
  let specialNumbers = [];
  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      specialNumbers.push(i);
    }
  }
  return specialNumbers;
}

const specialNumbers = getSpecialNumbers(10, 30);

console.log(specialNumbers);
