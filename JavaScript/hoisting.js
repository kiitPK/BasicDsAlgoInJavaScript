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


var a = 1
function foo(){
 var a = 2
 console.log(a) // 2 because it will find in local scope 
}
foo()
console.log(a); // 1 due to global scope

