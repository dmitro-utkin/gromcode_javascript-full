function getMinSquaredNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  const minAbsNumber = Math.min(...numbers.map(num => Math.abs(num)));
  return minAbsNumber ** 2;
}

export default getMinSquaredNumber;