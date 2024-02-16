// [1, [2, 3, 4], 5, [6]] => [1, 2, 3, 4, 5, 6]

// ----reduce-----
// const flatArray = (arr) => {
//   const flatArray = arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);
//   return flatArray
// };

// const flatArray = (arr) => {
//   return arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);
// };

// const flatArray = (arr) => arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);


// -----flat-----
// const flatArray = (arr) => arr.flat();

// const arr = [1, [2, 3, 4], 5, [6]];

// console.log(flatArray(arr))







// [1, 2, 3, 4] => 10;

// [1, 2, 3, 4].reduce(function (acc, num) {
//   return acc + num;
// }, 0);
