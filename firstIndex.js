function firstIndex(val, arr) {
  var i;
  var index;
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] === val) {
    index = i;
    break;
    }
  }
  console.log(index);
}

firstIndex(2, [1, 2, 3]);
firstIndex(9, [1, 2, 3]);
