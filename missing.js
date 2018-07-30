function missing(array) {
  var i;
  var all_numbers = [];
  var missing_numbers = [];

  for (i = array[0]; i <= array[array.length -1]; i++) {
    all_numbers.push(i);
  }
  for (i = 0; i < all_numbers.length; i++) {
    if (array.indexOf(all_numbers[i]) === -1) {
      missing_numbers.push(all_numbers[i]);
    }
  }
  console.log(missing_numbers);
}

missing([-3, -2, 1, 5]);


// function missing(array) {
//   var result = [];
//   var start = array[0] + 1;
//   var end = array[array.length - 1];
//   var integer;

//   for (integer = start; integer < end; integer += 1) {
//     if (array.indexOf(integer) < 0) {
//       result.push(integer);
//     }
//   }

//   return result;
// }
