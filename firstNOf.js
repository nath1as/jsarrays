function firstNOf(arr, count) {
  var newArr = [];
  var i;
  for(i = 0; i < count; i++) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
}

var digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3);    // returns [4, 8, 15]

