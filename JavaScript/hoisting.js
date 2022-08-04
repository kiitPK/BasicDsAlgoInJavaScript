// console.log(a) // undefined
// console.log(b) // ReferenceError: Cannot access 'b' before initialization
// var a = 2
// let b = 2 


// var a;
// console.log(a) // undefined
// console.log(b) // ReferenceError: Cannot access 'b' before initialization
// a = 2
// let b = 2;

// a()
// function a(){
//     console.log("a")
// }
// b();
// var b =function(){
//     console.log("b")
// }

// var answer = 0;

// const baseValue = value => multipleValue => value * multipleValue;

// const multiple = baseValue(2);
// answer = multiple(5);
// console.log(answer);


// var a = 1
// function foo(){
//  var a = 2
//  console.log(a) // 2 because it will find in local scope 
// }
// foo()
// console.log(a); // 1 due to global scope


// var variable = 10;
// (()=>{
//    console.log(variable);   // 10
//    variable = 20;
//    console.log(variable);   // 20
// })();

// let a = 10

// function abc(){
//     console.log(a)
//     const a  // SyntaxError: Missing initializer in const declaration
// }

// var variable = 10;
// (()=>{
//    console.log(variable);   // undefined
//    variable = 20;
//    console.log(variable);   // 20
// })();
// var variable = 30;
// console.log(variable);

// var abc=10, abc=20

var variable = 10;
(()=>{
   variable_3 = 35;
   console.log(variable_3);
   var variable_3 = 45;
   console.log(variable_3);
   variable_2 = 15;
   console.log(variable);   // 20
})();

console.log(variable_2);
console.log(variable_3);
var variable=30;
