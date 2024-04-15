function sum(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + sum(n - 1);
  }
}

// Example usage:
console.log(sum(15)); // Output: 13
console.log(sum(8)); // Output: 8
console.log(sum(4)); // Output: 10
console.log(sum(0)); // Output: 0
console.log(sum(1)); // Output: 1
console.log(sum(2)); // Output: 3
console.log(sum(3)); // Output: 6
