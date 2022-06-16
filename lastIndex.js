function lastIndexOf(array, num) {
	var answer = "";
	var result = 0;
  for (var i = array.length; i >= 0; i--) {
    if (array[i] === num) {
      result = i;
	  answer = true;
    }
  }
  if (answer === true) {
    return result;
  } else {
	return -1;  
  }
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);