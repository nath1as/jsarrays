function concat(arr1, arr2) {
  var newArr = [];
  var i;
  for (i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }
  console.log(newArr);
}
concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]

