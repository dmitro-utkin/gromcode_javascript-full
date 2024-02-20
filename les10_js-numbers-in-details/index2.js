// parseInt('17.17text'); // 17
// Number.parseInt('17.17text'); //17
// Number.parseInt('seventeen'); // NaN

// parseFloat('17.17text'); // 17.17
// Number.parseFloat('17.17text'); // 17.17
// Number.parseFloat('17.17.99text'); // 17.17
// Number.parseFloat('seventeen'); // NaN

// parseFloat === Number.parseFloat; // true
// parseFloat == Number.parseFloat; // true

// isFinite == Number.isFinite; // false
// isFinite === Number.isFinite; // false

// --------------------------------

const parseArray = arr => arr.map(el => Number.parseFloat(el));

const elementList = [4, 5.6, '   5.7kl', null, NaN, Infinity, undefined];

console.log(parseArray(elementList));
