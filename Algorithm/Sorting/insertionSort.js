function insertionSort(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const a = [33, 44, 66, 22, 111, 8, 44, 1, 3, 5, 9];

console.log(insertionSort(a));
