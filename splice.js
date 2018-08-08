function splice(arr, start, num) {
  var i;
  var removed = [];

  for (i = start; i < arr.length; i++) {
    if (i < start + num) {
      removed.push(arr[i]);
    }

    arr[i] = arr[i + num];
  }

  arr.length = arr.length - removed.length;
  return removed;
}
var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]

