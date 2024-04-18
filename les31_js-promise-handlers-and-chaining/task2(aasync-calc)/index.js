const asyncCalculator = number =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value: ${number}`);
      resolve(number);
    }, 500);
  }).then(value =>
    new Promise(resolve => {
      setTimeout(() => {
        const result = value * value;
        console.log(`Squared value: ${result}`);
        resolve(result);
      }, 500);
    }).then(value => {
      const result = value * 2;
      console.log(`Doubled value: ${result}`);
      return result;
    }),
  );


// const p = asyncCalculator(4);

// p.then((value) => {
//   const result = value * 2;
//   console.log(`Doubled value: ${result}`);
//   return result;
// });

// p.then((value) => console.log(value));

const p = asyncCalculator(5)

  .then((value) => console.log(value));
