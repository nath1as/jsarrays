function endsOf(beginningArr, endingArr) {
  var newArr = [];
  newArr.push(beginningArr[0]);
  newArr.push(endingArr[endingArr.length -1]);

  console.log(newArr);
}

endsOf([4, 8, 15], [16, 23, 42]);  // returns [4, 42]
