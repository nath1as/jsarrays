function matrixSums(arr) {
  var sums = [];
  var currentSum;
  var i;
  var j;

  for (i = 0; i < arr.length; i += 1) {
    currentSum = 0;
    for (j = 0; j < arr[i].length; j += 1) {
      currentSum += arr[i][j];
    }

    sums.push(currentSum);
  }

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

