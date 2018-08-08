function join(arr, str) {
  var string = '';
  var i;
  for (i = 0; i < arr.length; i++) {
    if (i > 0) {
      string += str;
    }
    string += String(arr[i]);
  }

  console.log(string);

}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'
