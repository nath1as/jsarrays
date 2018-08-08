function arrayToString(arr) {
  var str = '';
  var i;

  for (i =0; i < arr.length; i++) {
    str += String(arr[i]);
  }

  console.log(str);
}


arrayToString([1, 'a', 4]);
