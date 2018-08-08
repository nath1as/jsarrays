function missing(array) {
  var i;
  var allNumbers = [];
  var missingNumbers = [];

  for (i = array[0]; i <= array[array.length -1]; i++) {
    allNumbers.push(i);
  }
  for (i = 0; i < allNumbers.length; i++) {
    if (array.indexOf(allNumbers[i]) === -1) {
      missingNumbers.push(allNumbers[i]);
    }
  }
  console.log(missingNumbers);
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []


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
