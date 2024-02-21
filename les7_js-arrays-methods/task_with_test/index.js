export const reverseArray = (arr) => {
  return Array.isArray(arr) ? [...arr].reverse() : null;
};

const array = [0, 0, 1, 3];

console.log(reverseArray(array));
console.log(array);
