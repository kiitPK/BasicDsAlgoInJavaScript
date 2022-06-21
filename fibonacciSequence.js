function fibonacci(n) {
  const start = [0, 1];

  for (let i = 2; i < n; i++) {
    start[i] = start[i - 1] + start[i - 2];
  }

  return start;
}

console.log(fibonacci(9));
