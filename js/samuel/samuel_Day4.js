/*
       7. You are counting points for a basketball game, given the amount of 
        2-pointers scored and 3-pointers scored, find the final points for the 
        team and return that value. Examples points(1,1) => 5, points(5,7) => 31
    */

function pointCounter(two_Pointer, three_Pointer) {
  return two_Pointer * 2 + three_Pointer * 3;
}
console.log(pointCounter(1, 1));

/*
    8.  Repeat a given string str (first argument) for num times (second argument). 
      Return an empty string if num is not a positive number. 
      For the purpose of this challenge, do not use the built-in .repeat() method.

      Example:
      repeatStringNumTimes("*", 3) should return the string ***.
       repeatStringNumTimes("abc", 3) should return the string abcabcabc.
  */

function repeatStringNumTimes(str, num) {
  let repeatedString = "";
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      repeatedString += str; //repeatedString = repeatedString + str
    }
  } else {
    return repeatedString;
  }
  return repeatedString;
}

console.log(repeatStringNumTimes("abc", 4));
