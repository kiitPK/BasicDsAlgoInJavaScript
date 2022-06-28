function quickSort(ar) {
  if (ar.length < 2) {
    return ar;
  }

  let pivot = ar[ar.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < ar.length - 1; i++) {
    if (ar[i] < pivot) {
      left.push(ar[i]);
    } else {
      right.push(ar[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const a = [33, 44, 66, 22, 111, 8, 44, 1, 3, 5, 9];

console.log(quickSort(a));
