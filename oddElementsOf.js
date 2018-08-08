function oddElementsOf(arr) {
  var newArr = [];
  var i;
  for (i = 1; i < arr.length; i+=2) {
    newArr.push(arr[i]);
  }

  console.log(newArr);
}

var digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]

