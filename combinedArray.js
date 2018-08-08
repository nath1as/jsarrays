function combinedArray(even, odd) {
  var newArr = [];
  var i;
  for (var i = 0; i < even.length; i ++) {
    newArr.push(even[i]);
    newArr.push(odd[i]);
  }
  console.log(newArr);
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

combinedArray(digits, letters);  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]

