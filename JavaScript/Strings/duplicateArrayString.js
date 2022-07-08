const counts = {};
const sampleArray = ["a", "a", "b", "c"];
sampleArray.forEach(function (x) {
  console.log(counts[x]);
  console.log(x);
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);

