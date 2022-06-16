function range(start, end, step) {
  let array = [];
  if (start === undefined) {
   } else if (end === undefined) {
    return "error";
   } else if (step > undefined) {
    return "error";
   } else if (start === end) {
    return "error";
   } else if (step === 0) {
     return "error"; } 
  else {
    let i = 0;
  for (i = start; i < end; i = i + step) {
    array.push(i);
    } 
  } return array;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));