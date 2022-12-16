// Bootcamp Algorithm challenge/solutions - itskills 2022
// const { log } = console;
/*1. The formula to convert from Celsius to Fahrenheit is the
temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Define a variable fahrenheit and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
NOTE; Return the value of the result from the function*/

// function converttoF(celsius){
//     let Fahrenheit = celsius * (9/5) + 32;
//     return Fahrenheit;
// }
// console.log(converttoF(30))

// ()()
// function tempconvert(celsius){
//     const k = 9/5
//     const k2 = 32
//     let Fahrenheit = (celsius * k) + k2;
//     return Fahrenheit;
// }
// console.log(tempconvert(100))
// OR
// function tempconvert(celsius) {
//   let Fahrenheit = (celsius * 9) / 5 + 32;
//   return Fahrenheit;
// }
// console.log(tempconvert(100));

/*
    2. Given an integer array nums, move all the even integers 
    at the beginning of the array  followed by all the odd integers. 
    Return any array that satisfies the condition
    Example: 
    Input: nums = [3,1,2,4]
    output: [2,4,3,1]
    Explanation: outputs: [4,2,3,1], [2,4,1,3] and [4,2,1,3] 
    would also be accepted
 */
// function evenandodd(nums) {
//   let even = [];
//   let odd = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 == 0) {
//       even.push(nums[i]);
//     } else {
//       odd.push(nums[i]);
//     }
//   }
//   return even.concat(odd);
// }

// console.log(evenandodd([3, 1, 2, 4]));

/*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
        
    1. take in input and cast to number
    2. use formula for minute to seconds convertion
    3. store result in a variable and return the result to the function call
    */
// function convert(minute) {
//   let seconds = minute * 60;
//   return seconds;
// }
// console.log(convert(5));
// console.log(convert(3));

/*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */

// function evenAndOdd(num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(evenAndOdd(4));

// function reverseWords(str) {
//   // Go for it
//   console.log(str);
//   newStr = str.split(" ");
//   let newWord = [];
//   function reverseWords(str) {
//     // Go for it
//     console.log(str);
//     newStr = str.split(" ");
//     let newWord = [];

//     newStr.map((char) => {
//       newWord.push(char.split("").reverse().join(""));
//     });
//     return newWord.join(" ");
//     newStr.map((char) => {
//       newWord.push(char.split("").reverse().join(""));
//     });
//     return newWord.join(" ");
//   }
// }

//   5. Create a function that takes a number as an argument, increments the number by
// 1 and return the result. Example addition(0) => 1, addition(4) => 5

// function increment(num) {
//   let result = num + 1;
//   return result;
// }
// console.log(increment(10));

//  6. Create a function that takes voltage and current and returns the
//     calculated power. Example circuitPower(230, 10) => 2300

// function voltCurr(c, v) {
//   let power = c * v;
//   return power;
// }
// console.log(voltCurr(10, 10));

/*
       7. You are counting points for a basketball game, given the amount of 
        2-pointers scored and 3-pointers scored, find the final points for the 
        team and return that value. Examples points(1,1) => 5, points(5,7) => 31
    */

// function basketballPoints(a, b) {
//   return a * 2 + b * 3;
// }
// console.log(basketballPoints(1, 1));
// console.log(basketballPoints(5, 7));
/*
    8.  Repeat a given string str (first argument) for num times (second argument). 
      Return an empty string if num is not a positive number. 
      For the purpose of this challenge, do not use the built-in .repeat() method.

      Example:
      repeatStringNumTimes("*", 3) should return the string ***.
       repeatStringNumTimes("abc", 3) should return the string abcabcabc.
  */

// function repeatStringNumTimes(str, num) {
//   let result = "";
//   if (num > 0) {
//     for (let i = 0; i < num; i++) {
//       result += str;
//     }if(num == 1 && char == "m"){
//       return "son"
//       }
//   else if(num == -1 && char == "m"){
//         return "father"
//       }
//   else if(num == -1 && char == "f"){
//         return "mother"
//       }
//   else if(num == -2 && char == "m"){
//     return "grandfather"
//   }
//   else if(num == -2 && char == "f"){
//     return "grandmother"
//   }
//   else if(num == -3 && char == "f"){
//     return "great grandmother"
//   }
//   else if(num == -3 && char == "m"){
//     return "great grandmother"
//   }
// }
// }

// console.log(generation(1,"f"))
// console.log(generation(1,"m"))
// console.log(generation(2,"f"))
// console.log(generation(2,"m"))
// console.log(generation(-1,"f"))
// console.log(generation(-1,"m"))
// console.log(generation(-2,"f"))
// console.log(generation(-2,"m"))
// console.log(generation(-3,"m"))
// console.log(generation(-3,"f"))
// console.log(generation(-4,"f"))

// 15.
//     Integer Reversal
//     Given an integer, reverse the order of the digits

//     reverseInteger(123) => 321
//     reverseInteger(46923) => 32964

// let reverseInteger = (num) => {return num.toString().split('').reverse().join("")}

// console.log(reverseInteger(123))

// 16.
//         Perform a search and replace on the sentence using the arguments provided and return the new sentence.

//         First argument is the sentence to perform the search and replace on.

//         Second argument is the word that you will be replacing (before).

//         Third argument is what you will be replacing the second argument with (after).

//         Note: Preserve the case of the first character in the original word when you are replacing it.
//         For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

//         Template:
//         myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

//         myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.

//         myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.

//     myReplace = (sentence, before, after) => {
//      sentence.replace(before, after)
//     }
//     myReplace = (sentence, before, after) => { return sentence.replace(before, after)}

// console.log(myReplace("Let us go to the store" , "store", "mall"))
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
// console.log(myReplace("I think we should look up there", "up", "Down"))

/*
17.
      Write a function that splits an array (first argument) into groups the length of size (second argument) 
      and returns them as a two-dimensional array.

      Example:
      chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

      chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

      chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

      chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

        */

//   function chunkArrayInGroups(arr, size){
//     let result = []
//     for (i=0; i<=arr.length; i++){
//        result.push(arr.splice(0,size));
//     }
//     return result
//   }

//   console.log(chunkArrayInGroups(["a","b","c","d"],2))
//   console.log(chunkArrayInGroups([0,1,2,3,4,5],3))
//   console.log(chunkArrayInGroups([0,1,2,3,4,5],2))
//   console.log(chunkArrayInGroups([0,1,2,3,4,5],4))

/*
19.
  Function count Vowels:
  Given a string of words or phrases, count the number of vowels.
*/

// function countVowels(words) {
//   numofvowel = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i] == "a" || words[i] =="e" || words[i] == "i" || words[i] == "o" || words[i] == "u") {
//         numofvowel.push(words[i]); 
//     }
//   }
//   return numofvowel.length
// }
// console.log(countVowels("my name is dayo"));

// 20. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8
function addDash(input){
  // value = input.toString()
  // even = []
  // odd = []
  //   for (let i=0; i<=value.length; i++){
  //     if (value[i] % 2 == 0){
  //       even.push(value[i])
  //     }
  //     else {
  //        odd.push(value[i])
  //     }
  //   }
  //   return even.join('-') + odd
  
    result = ""
  for (let i = 0; i<input.length; i++){
    if(input[i] % 2 == 0 && input[i+1] % 2 == 0){
          result += input[i] + "-"
    }else {
      result += input[i]
    }
  }
  return result

}
console.log(addDash("025468"))





// 21. Make a function that looks through an array of objects (first argument) 
// and returns an array of all objects that have matching name and value pairs (second argument). 
// Each name and value pair of the source object has to be present 
// in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
// and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
// because it contains the name and its value, that was passed on as the second argument.




