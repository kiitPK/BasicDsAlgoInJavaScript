/* 
A map is an unordered collection of key-values pair. Both key-values can be any data types
To retrive a value, you can use crossponding key 
Maps are iteratble that can be use with for of loops
================================
Objects are unordered whereas maps are ordered
Keys in objects can be only strings and symbols type wehreas in map they can be of any types


https://www.geeksforgeeks.org/map-vs-object-in-javascript/#:~:text=In%20Object%2C%20the%20data%2Dtype,true%20in%20case%20of%20objects.

*/

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("c", 3);
map.delete("a");
console.log(map.has("c"));
console.log(map.size);
map.clear();

for (const [key, value] of map) {
  console.log(`${key}:: ${value}`);
}
