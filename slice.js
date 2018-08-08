function slice(arr, start, end) {
  var i;
  var newArray = [];
  for(i = start; i < end; i++) {
    newArray.push(arr[i]); 
  }
  console.log(newArray);
}

slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]
