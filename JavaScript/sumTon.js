function sum() {
  let sumTotal = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumTotal = sumTotal + arguments[i];
    console.log(sumTotal);
  }
}
const susu = sum(1, 2, 3, 4, 5);
console.log(susu);

const sumdigi  = function (a) {
    return function (b) {
      if (b) {
        return sumdigi(a+b); // it takes an argument and return a function which again can take an argument.
      }
      return a; // it will keep on adding 1+2+3+4..
    }
  };

// const tesu = sfa(1)(2)(3)();
console.log(sumdigi(1)(2)(3)(4)());
