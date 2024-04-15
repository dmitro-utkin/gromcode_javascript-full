function maxFibonacci(n) {
  let prev = 0;
  let curr = 1;

  while (curr <= n) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return prev;
}

// Example usage:
console.log(maxFibonacci(15)); // Output: 13
console.log(maxFibonacci(8)); // Output: 8
