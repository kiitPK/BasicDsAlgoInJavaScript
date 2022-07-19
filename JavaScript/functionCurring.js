// function curry(f) { // curry(f) does the currying transform
//     return function(a) {
//       return function(b) {
//         return f(a, b);
//       };
//     };
//   }

//   // usage
//   function sum(a, b) {
//     return a + b;
//   }

//   let curriedSum = curry(sum);

//   console.log( curriedSum(1) ); // 3

// setTimeout(() => {
//   console.log(1);
// });
// console.log(2);
// Promise.resolve(console.log(3));
// console.log(4);

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const b = A.sort();

  if (b[b.length - 1] <= 0) {
    return 1;
  }
  b.reduce((i, j) => {
    console.log(i + "::" + j);

    if (j - i > 0) {
      return i + 1;
    }
  }, 0);
  for(let)

  //return b[b.length-1]+1
}

solution([1, 3, 6, 4, 1, 2]);
// reverse the array in groups of K

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// k = 3
// [3, 2, 1, 6, 5, 4, 9, 8, 7]

// arr = [1, 2, 3, 4, 5, 6, 7, 8]
// k = 5
// [5, 4, 3, 2, 1, 8, 7, 6]

// let newArrReversed = []
// let finalResult = []

// for(let i =0 ; i< arr.length -1; i++){
// 	if(i%k == 0){
// 		newArr.push(newArrReversed[i])
// 	}

//   if (k== i+1){
//   	newArrReversed.reverse()
//   }

// }
