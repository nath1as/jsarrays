function arraysEqual(arr1, arr2) {
  var i;
  var equal = true;
  if (arr1.length !== arr2.length) {
    equal = false;
  }

  for (i = 0; i < arr1.length; i++) {
     if (arr1[i] !== arr2[i]) {
       equal = false; 
      }
  }

  console.log(equal);
  
}

arraysEqual([1], [1]);                               // true
arraysEqual([1], [2]);                               // false
arraysEqual([1, 2], [1, 2, 3]);                      // false
arraysEqual([1, 'hi', true], [1, 'hi', true]);       // true
arraysEqual([1, 'hi', true], [1, 'hi', false]);      // false
arraysEqual([1, 'hi', true], [1, 'hello', true]);    // false
arraysEqual([1, 'hi', true], [2, 'hi', true]);       // false

