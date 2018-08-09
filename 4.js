function concat(array1, secondArgument) {
  var newArray = [];
  var currentArg;
  var i;
  var j;

  for (i = 0; i < arguments.length; i += 1) {
    currentArg = arguments[i];
    if (Array.isArray(currentArg)) {
      for (j = 0; j < currentArg.length; j += 1) {
        newArray[newArray.length] = currentArg[j];
      }
    } else {
      newArray[newArray.length] = currentArg;
    }
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
