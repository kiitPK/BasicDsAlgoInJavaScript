function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
  }
  return -1
}


const a = [-10,2,5,7]
console.log(linearSearch(a,2))