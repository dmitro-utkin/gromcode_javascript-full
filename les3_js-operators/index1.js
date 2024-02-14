// Унарний плюс приводе операнд до числа
+17;
+'77';
+true;
+false;

// Бінарний плюс складає строки або додає числа
10 + '5'; // '105'
'some' + 'text'; // 'sometext'
1 + 3 + '6' // '46'

// Математичні оператори приводять операнди до числа
'24' / 4 // 6
4 / '2' // 2
4 * '2' // 8
'2' * 4 // 8
4 - '3' // 1
'-3' - '-4' // 1
'seventeen' / 3 // NaN
4 * 'four' // NaN
17 / 0 // Infinity
const a = 17;
const b = -a;
-'f' // NaN
-'3' // -3

// Мат.операції з undefined повертають NaN
undefined + 1; // NaN
null + 8; // 8
7 - null; // 7
'text' + null // 'textnull'
'text' + undefined // 'textundefined'

// Постфіксна префіксна форма запису
let num = 17;
++num;
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
/* eslint-disable */

// Унарный плюс приводит операнд к числу
+17;
console.log("+17:", +17);
+'77';
console.log("+'77':", +'77');
// Бинарный плюс складывает строки или прибавляет числа
10 + '5';
console.log("10 + '5':", 10 + '5');
'some' + 'text';
console.log("'some' + 'text':", 'some' + 'text');
// Математические операции с undefined возвращают NaN
undefined + 1;
console.log("undefined + 1:", undefined + 1);
null + 8;
console.log("null + 8:", null + 8);
undefined + '5';
console.log("undefined + '5':", undefined + '5');
7 - null;
console.log("7 - null:", 7 - null);
5 - undefined;
console.log("5 - undefined:", 5 - undefined);
'text' + null;
console.log("'text' + null:", 'text' + null);

// Постфиксная и префиксная форма записи
let num = 17;
++num;
console.log("++num:", ++num);
num++;
console.log("num++:", num++);

// математические операторы приводят операнды к числам
const a = 17;
console.log(a);
const b = -a;
console.log(b);
'24' / 4;
console.log("'24' / 4:", '24' / 4);
18 * '3';
console.log("18 * '3':", 18 * '3');
'9' - '3';
console.log("'9' - '3':", '9' - '3');
'seventeen' / 3;
console.log("'seventeen' / 3':", 'seventeen' / 3);
4 * 'four';
console.log("4 * 'four':", 4 * 'four');
17 / 0;
console.log("17 / 0:", 17 / 0);

10 + 'seven';
console.log("10 + 'seven':", 10 + 'seven');
undefined + 1;
console.log("undefined + 1:", undefined + 1);
null + 8;
console.log("null + 8:", null + 8);
undefined + '5';
console.log("undefined + '5':", undefined + '5');
'text' + null;
console.log("'text' + null:", 'text' + null);
