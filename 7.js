function shift(array) {
  var i;
  var first = array[0];

  if (array.length > 0) {
    for (i = 0; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }
    array.length = array.length - 1;
  }

  console.log(first);
}

function unshift(array, val) {
  var i;
  for (i = 1; i < arguments.length; i += 1) {
    array.splice(i - 1, 0, arguments[i]);
  }


  console.log(array);

}

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

var testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]
