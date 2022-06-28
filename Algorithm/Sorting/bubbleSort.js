function bubbleSort(a) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

var a = [55, 44, 33, 22, 1, 4, 5, 6, 7];

bubbleSort(a);

console.log(a);
