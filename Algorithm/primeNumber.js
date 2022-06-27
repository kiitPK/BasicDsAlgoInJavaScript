function primeOrNot(n) {
  if (n < 2) return true;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(primeOrNot(1));
console.log(primeOrNot(5));
console.log(primeOrNot(4));

// O(n)
