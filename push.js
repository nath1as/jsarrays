function push(arr, val) {
  arr[arr.length] = val;

  console.log(arr.length);
}

var count = [0, 1, 2];
push(count, 3);         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

