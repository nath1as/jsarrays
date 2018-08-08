// function lastNOf(arr, count) {
//   var newArr = [];
//   var i;
//   for (i = count; i < arr.length; i++) {
//     newArr.push(arr[i]);
//   }
//   console.log(newArr);
// }

function lastNOf(arr, length) {
  var index = arr.length - length;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]
lastNOf(digits, 15);    // returns [16, 23, 42]

