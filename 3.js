function concat(array1, secondArgument) {
  var newArray = [];
  var length;
  var i;

  for (i = 0, length = array1.length; i < length; i += 1) {
    newArray[i] = array1[i];
  }

  if (Array.isArray(secondArgument)) {
    for (i = 0, length = secondArgument.length; i < length; i += 1) {
      newArray[newArray.length] = secondArgument[i];
    }
  } else {
    newArray[newArray.length] = secondArgument;
  }

  console.log(newArray);
}


concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
concat([1, 2], 3);                     // [1, 2, 3]
concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
concat([2, 3], 'four');                // [2, 3, "four"]


var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);
newArray;                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
newArray;                              // [2, 3, { a: "two", b: 3 }]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

obj;
