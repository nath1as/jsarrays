var myArray = [1, 2, 3, 4];
var myOtherArray = myArray; /* reference to the location of the value not value */

myArray.pop();
console.log(myOtherArray); /* pop mutates the original array and the other array */

myArray = [1, 2];
console.log(myOtherArray); /* reassigment of the original array changes the reference to another object, while the other array retains its reference to the original object */
