Number.isNaN('text'); // false
Number.isNaN(NaN); // true
isNaN('text'); // true
isNaN(NaN); // true
NaN == NaN; // false
NaN === NaN; // false

Number.isFinite('17'); // false
isFinite('17'); // true

parseInt('17.17text');
Number.parseInt('17.17text');
Number.parseInt('seventeen');

parseFloat('17.17text');
Number.parseFloat('17.17text');
Number.parseFloat('seventeen');

Number.isInteger(17); // true
Number.isInteger(17.0); // true
Number.isInteger(17.17); // false
Number.isInteger('17'); // false
Number.isInteger(Infinity); // false
Number.isInteger(NaN); // false
Number.isInteger(undefined); // false
Number.isInteger(null); // false

const num = '67';

Number.isNaN(num); // false