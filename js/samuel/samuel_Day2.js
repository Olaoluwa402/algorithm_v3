/*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
    */

function minuteToSec(minutes) {
  let seconds = minutes * 60;
  return seconds;
}

console.log(minuteToSec(5));

/*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */

function evenCheck(num) {
  //using ternary operators
  return num % 2 == 0 ? true : false;
}
console.log(evenCheck(3));
