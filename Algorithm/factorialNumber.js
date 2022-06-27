function factorial(n) {
  let finalResult = 1;
  for (let i = 1; i <= n; i++) {
    finalResult *= i;
  }

  return finalResult;
}

console.log(factorial(5));
console.log(factorial(15));

//BIg(o) = O(n)
