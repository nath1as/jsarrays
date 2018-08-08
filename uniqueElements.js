function uniqueElements(arr) {
  var i;
  var newArr = [];
  for (i = 0; i < arr.length; i++){
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]

