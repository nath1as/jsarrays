function slice(array, begin, end) {
  var result = [];
  var i;

  begin = begin > array.length ? array.length : begin;
  end = end > array.length ? array.length : end;

  for (i = begin; i < end; i += 1) {
    result.push(array[i]);
  }

  console.log(result);
  return result;
}

function splice(array, start, deleteCount) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  var arrayCopy = slice(array, 0, array.length);
  var elementCount = arguments.length - 3;
  var newLength = array.length + elementCount - deleteCount;
  array.length = newLength;
  var copyBackCount;
  var i;

  for (i = 0; i < elementCount; i += 1) {
    array[start + i] = arguments[3 + i];
  }

  copyBackCount = arrayCopy.length - (start + deleteCount);
  for (i = 0; i < copyBackCount; i += 1) {
    array[start + elementCount + i] = arrayCopy[start + deleteCount + i];
  }

  console.log(slice(arrayCopy, start, start + deleteCount));
  return slice(arrayCopy, start, start + deleteCount);
}


slice([1, 2, 3], 1, 2);               // [2]
slice([1, 2, 3], 2, 0);               // []
slice([1, 2, 3], 5, 1);               // []
slice([1, 2, 3], 0, 5);               // [1, 2, 3]

var arr = [1, 2, 3];
slice(arr, 1, 3);                     // [2, 3]
arr;                                  // [1, 2, 3]


splice([1, 2, 3], 1, 2);              // [2, 3]
splice([1, 2, 3], 1, 3);              // [2, 3]
splice([1, 2, 3], 1, 0);              // []
splice([1, 2, 3], 0, 1);              // [1]
splice([1, 2, 3], 1, 0, 'a');         // []

var arr = [1, 2, 3];
splice(arr, 1, 1, 'two');             // [2]
arr;                                  // [1, "two", 3]

var arr = [1, 2, 3];
splice(arr, 1, 2, 'two', 'three');    // [2, 3]
arr;                                  // [1, "two", "three"]

var arr = [1, 2, 3];
splice(arr, 1, 0);                    // []
splice(arr, 1, 0, 'a');               // []
arr;                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
splice(arr, 0, 0, 'a');               // []
arr;                                  // ["a", 1, 2, 3]
