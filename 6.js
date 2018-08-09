function reverse(inputForReversal) {
  var i;
  var neW;
  if (typeof(inputForReversal) === 'string') {
    neW = '';
    for (i = inputForReversal.length - 1; i >= 0; i--) {
      neW += inputForReversal[i];
    }
  } else {
    neW = [];
    for (i = inputForReversal.length - 1; i >= 0; i--) {
      neW.push(inputForReversal[i]);
    }
  }
  console.log(neW);
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

var array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]


