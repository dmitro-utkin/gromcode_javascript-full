const asyncCalculator = (num) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 1000);
  }).then(
    (value) =>
      new Promise((resolve) => {
        setTimeout(() => {
          const result = value * value;
          console.log(`Squared value: ${result}`);
          resolve(result);
        }, 1000);
      })
  );

// const p = asyncCalculator(4);

// p.then((value) => {
//   const result = value * 2;
//   console.log(`Doubled value: ${result}`);
//   return result;
// });

// p.then((value) => console.log(value));

const p = asyncCalculator(4)
  .then((value) => {
    const result = value * 2;
    console.log(`Doubled value: ${result}`);
    return result;
  })
  .then((value) => console.log(value));
