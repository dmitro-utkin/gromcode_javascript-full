// multiRound

// 0.1 + 0.2 === 0.30000000000000004
// 0.1 + 0.2 === 0.3 // false

// const multiRound = num => [
//   Math.round(num),
//   Math.floor(num),
//   Math.ceil(num),
//   Math.trunc(num),
// ];

// console.log(multiRound(17.1));
// console.log(multiRound(-17.1));
// console.log(multiRound(Math.PI));

// const multiRound = num => [
//   Math.round(num * 100) / 100,
//   Math.floor(num * 100) / 100,
//   Math.ceil(num * 100) / 100,
//   Math.trunc(num * 100) / 100,
//   num.toFixed(2),
// ];

// console.log(multiRound(17.1));
// console.log(multiRound(-17.1));
// console.log(multiRound(Math.PI));
// console.log(multiRound(-Math.PI));

// Math.PI;
// 3.141592653589793
// Math.PI * 1000;
// 3141.592653589793
// Math.round(Math.PI * 1000);
// 3142
// Math.round(Math.PI * 1000) / 1000;
// 3.142

// Math.PI.toFixed(3);
// '3.142'
// +Math.PI.toFixed(3);
// 3.142
// Number(Math.PI.toFixed(3));
// 3.142

// ---------------------------

(0.1 * 34 + 0.2 * 17).toFixed(2);
'6.80'