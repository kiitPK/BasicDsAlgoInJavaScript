array1 = [
  { id: 2, name: "bob" },
  { id: 1, name: "alice" },
  { id: 3, name: "Charlie" },
];
array2 = [
  { id: 2, beverage: "coffee", food: "burger" },
  { id: 3, beverage: "coca" },
  { id: 4, food: "cake" },
];

//console.log(array1.prototype.push.apply(array2));
//console.log([...array1, ...array2]);

let mergedSubjects = array1.map((subject) => {
  let otherSubject = array2.find((element) => element.id === subject.id);
  let otherSubject1 = array2.find((element) => element.id !== subject.id);
  return { ...subject, ...otherSubject, otherSubject1 };
});

console.log(mergedSubjects);
