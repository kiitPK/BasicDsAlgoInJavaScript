"use strict";
var abc = 4;
var abc = 10;

console.log(abc);

console.log(Array.isArray(1, 2));

function array_clone(arr) {
  return [...arr];
}
const cc = array_clone([1, 2, [4, 0]]);
console.log(cc);

var sample = [{ a: 1 }, { b: 2 }, { c: 3 }]; // i am never gonna change Boo! Yeah
// es5
var mapped = sample.map(function (elem) {
  return elem.a * 10;
});
// es6
let mapped1 = sample.map((elem) => elem.b * 10);
console.log(sample);
console.log(mapped1, mapped);
