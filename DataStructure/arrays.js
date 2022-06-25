const arr = [1, 3, 4, "kiitPK"];

arr.push(10); // push this element at last position
arr.unshift(0); // adding 0 at 0 index
arr.pop(); // remove item at end
arr.shift(); // remove item at begning

for (const item of arr) {
  console.log(item);
}

// Also chaeck : map, filter, reduce, concat, slice and splice

const mapVal = [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

let stuVal = mapVal.map(student=> student.name.toUpperCase())
console.log(stuVal)

/* 

Insert/Remove at end : 0(1)
Insert/Remove at begning : 0(n)
access : 0(1)
search : 0(n)
push / pop : 0(1)
shift, unshift, concat, slice, splice : 0(n)
forEach, map, filter, reduce : 0(n)

*/
