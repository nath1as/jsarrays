function reverseArray(arr) {
  var reversedArray = [];
  var i;
  for (i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  console.log(reversedArray);
}


reverseArray([1, 2, 3, 4, 5, 6]);
