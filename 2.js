/* copies value of reference */
var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

/* copies value  */
var myArray = [1, 2, 3, 4];
var myOtherArray = [];
var i;

for (i = 0; i < myArray.length; i +=1) {
  myOtherArray.push(myArray[i]);
}

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

/* copies value  */
var myArray = [1, 2, 3, 4];
var myOtherArray = myArray.slice();

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

