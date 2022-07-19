const a = { x: 1, y: 2 };
const b = a;
b.x = 3;
console.log(a);
console.log(b);

let ad = 10;
// var ad = 20

console.log(ad);

const arr = [1, 2, 3, 4];

const arr1 = arr;

arr1.push(5);
console.log(arr.length + ":::" + arr);
console.log(arr1.length + ":::" + arr1);

//dd[10] = 99;
console.log(a[6]);

console.log(typeof undefined == typeof null);

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(3));
var a23 = (2, 3, 5,9);
console.log(a23)
