function sum() {
  let sumTotal = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumTotal = sumTotal + arguments[i];
    console.log(sumTotal);
  }
}
const susu = sum(1, 2, 3, 4, 5);
console.log(susu);

const sumdigi = function (a) {
  return function (b) {
    if (b) {
      return sumdigi(a + b); // it takes an argument and return a function which again can take an argument.
    }
    return a; // it will keep on adding 1+2+3+4..
  };
};

function argSum() {
  let sumResult = 0;
  let len = arguments.length;
  console.log(arguments);
  for (let i = 0; i < len; i++) {
    console.log(arguments[i]);
    sumResult += arguments[i];
  }

  return sumResult;
}

// // const tesu = sfa(1)(2)(3)();
console.log("::::", argSum(1, 2, 3, 4));

// let person = {
//   name: "San",
//   printMyName: () => {
//     console.log("My name is ", this.name);
//   },
// };

// let obj = {
//   name: "pk",
//   age: 33,
// };

// function printMyName(name, age) {
//   console.log(this.name + " " + this.age);
// }

// printMyName.bind(obj, ["ak", 30]);
