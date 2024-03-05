// pseudo arrays

// function func() {
//   // console.log(typeof arguments); // object
//   console.log(arguments);
// }

// func(1, 2, 3, 4)

// ------------------------
/*
Функція буде просто суміровать всі аргументи
*/
// метод apply
// function argsSum() {
//   return [].reduce.apply(arguments, [(acc, elem) => {
//     return acc + elem;
//   }, 0])
// };

// метод call
// function argsSum() {
//   return [].reduce.call(arguments, (acc, elem) => {
//     return acc + elem;
//   }, 0)
// };

// console.log(argsSum(1, 2, 3, 4))

/*
можно іще упростити нашу задачу за допомогою современих методів язика.
за допомогою спред оператора
*/
function argsSum() {
  return [...arguments].reduce((acc, elem) => {
    return acc + elem;
  }, 0);
}

console.log(argsSum(1, 2, 3, 4));
