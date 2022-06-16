function whichSchool(age) {
  if (age <= 13) {
    return "Elementary School";
  } else if (age > 13 && age <= 18) {
    return "Secondary School";
  } else if (age >= 19) {
    return "Lighthouse Labs";
     }
}
console.log(whichSchool(6));
whichSchool(14);
whichSchool(25);