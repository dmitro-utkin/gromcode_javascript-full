// - Каррирование

// const sum = (a, b) => a + b;

// const sum = (a) => (b) => a + b;

// const add3 = sum(3);

// const result = add3(5);

// console.log(result);

// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------

const mult = (a) => (b) => a * b;
console.log(mult(5)(4));

const twice = mult(2);
console.log(twice(7));

const triple = mult(3);
console.log(triple(9));

// const result = twice(triple(5));

// console.log(result);