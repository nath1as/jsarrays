function shift(arr) {
  var shifted = arr[0];
  var i;

  for (i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return shifted;
}

var count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
