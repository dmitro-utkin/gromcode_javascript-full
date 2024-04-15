// - Композиция
// Композиція базується на основі корирування

// f
// g

// f(g(value)) === f*g(value)

// compose(func1, func2, ...) => 

// doEverything = (...args) => {}

const add3 = value => value + 3;
const mult2 = value => value * 2;
const div4 = value => value / 4;

const compose = (...funcs) => (value) => {
  return funcs.reduce((acc, func) => func(acc), value);
}

const doEverything = compose(
  add3,
  mult2, 
  div4, 
);

console.log(doEverything(3));