function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

const a = [33, 44, 66, 22, 111, 8, 44, 1, 3, 5, 9];

console.log(mergeSort(a));
