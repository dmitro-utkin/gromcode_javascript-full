// wallet - заімствованіє метода

// const wallet = {
//   transactions: [1, 5, 89, 337, 3],
//   getMax() {
//     return Math.max.apply(null, this.transactions);
//   },
//   getMin() {
//     return Math.min.apply(null, this.transactions);
//   }
// }

// console.log(wallet.getMax());
// console.log(wallet.getMin());
/*
Такі механізми використовувалися раніше. 
Зараз є більш продвинутіші механізми, які дають нам робити все простіше
*/

// const wallet = {
//   transactions: [1, 5, 89, 337, 3],
//   getMax() {
//     return Math.max(...this.transactions);
//   },
//   getMin() {
//     return Math.min(...this.transactions);
//   }
// }

// console.log(wallet.getMax());
// console.log(wallet.getMin());
