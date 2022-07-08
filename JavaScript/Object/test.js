// var obj = {​
//     a: {​
//         b: {​
//             c: 15,
//             j: false
//         }​,
//         k: null
//     },​
// }​;

var obj = {
  a: {
    b: {
      c: 15,
      j: false,
    },
    K: null,
  },
};

function findPath(obj, path) {
  let pathArr = path.split(".");
  //   //let pathArr = "a.b.c".split(".");
  //   console.log(pathArr);
  //   let hasValue = true;
  //   let validPath = "";
  //   for (let i = 0; i < pathArr.length - 1; i++) {
  //     console.log(pathArr[i]);
  //     if (obj.hasOwnProperty(pathArr[i])) {
  //       console.log("Yes");
  //       validPath = validPath.concat(pathArr[i]);
  //     } else {
  //       console.log("no");
  //       hasValue = false;
  //     }
  //   }
  //   //console.log(validPath.join(","));
  //   // validPath = validPath.join(".");
  //   console.log(validPath);
  //   return hasValue ? obj.validPath : undefined;
  return pathArr.reduce((obj, level) => obj && obj[level], obj);
}

///findPath();

console.log(findPath(obj, "a.b.c")); // 15
console.log(findPath(obj, "a.b")); // {​c: 15, j: false}​
console.log(findPath(obj, "a.b.d")); // undefined
console.log(findPath(obj, "a.c")); // undefined
console.log(findPath(obj, "a.b.c.d")); // undefined
console.log(findPath(obj, "a.b.c.d.e")); // undefined
console.log(findPath(obj, "a.b.j")); //false
console.log(findPath(obj, "a.b.j.k")); //undefined
console.log(findPath(obj, "a.k")); //null/*
// - Write method findPath
// - Should take two params:
//     - object
//     - keys separated by dots as string
// - Return value if it exists at that path inside the object, else return undefined
// */
