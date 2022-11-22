// Bootcamp Algorithm challenge/solutions - itskills 2022
const { log } = console;
/*1. The formula to convert from Celsius to Fahrenheit is the
temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Define a variable fahrenheit and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
NOTE; Return the value of the result from the function*/

function convertCelsius(para) {
  return para * (9 / 5) + 32;
}
console.log(convertCelsius(2)); //converts Celsius to Fahrenheit.

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
// const nums = [3, 1, 2, 4];
// let even = [];
// let odd = [];
// function evenInt(nums) {
//   for (let x of nums) {
//     if (x % 2 == 0) {
//       even.push(x);
//     } else {
//       odd.push(x);
//     }
//   }
//   let element = document.createElement("p");
//   element.innerHTML = even.concat(odd);
//   document.body.appendChild(element);
// }
// evenInt(nums)
/*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180

    */
let minToSecs = function (Int) {
  console.log(60 * Int);
};
minToSecs(5);

// log(
//   (function (Int) {
//     return 60 * Int;
//     // console.log(60 * Int);
//   })(5)
// );

const result = (function (Int) {
  return 60 * Int;
  // console.log(60 * Int);
})(5);

result;
/*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */
const val = function (para) {
  let num = para % 2 == 0 ? "true" : "false";
  return num;
};

console.log(val(3));

/* 
        5. Create a function that takes a number as an argument, increments the number by 
        1 and return the result. Example addition(0) => 1, addition(4) => 5
    */

        function increaseNum(num) {
            console.log((Number(num)+1)); //Adds an integer 1 to the parameter
        }
        increaseNum(4)




/* 
       6. Create a function that takes voltage and current and returns the 
        calculated power. Example circuitPower(230, 10) => 2300
    */

function powerInWatts(voltage, current) {
  return `The calculated power is ${voltage * current} watts`;
}
console.log(powerInWatts(230, 10));

/*
       7. You are counting points for a basketball game, given the amount of 
        2-pointers scored and 3-pointers scored, find the final points for the 
        team and return that value. Examples points(1,1) => 5, points(5,7) => 31
    */
        
        function basketballPoints(twos, threes){
          try {
            let value = (twos >=0 && threes >= 0) ? twos*2+threes*3 : error; 
            return value;
          } catch (error) {
            throw new Error("The input must be a number!");
          }
        }
        console.log(basketballPoints(1,1))

/*
    8.  Repeat a given string str (first argument) for num times (second argument). 
      Return an empty string if num is not a positive number. 
      For the purpose of this challenge, do not use the built-in .repeat() method.

      Example:
      repeatStringNumTimes("*", 3) should return the string ***.
       repeatStringNumTimes("abc", 3) should return the string abcabcabc.
  */

       let emptyContainer = '';
       function repeatStringNumTimes(arg, num){
        //Positive numbers are numbers greater than zero
        if(Math.trunc(num)>0){
          for(let x = 0; x<num; x++){
            emptyContainer += arg;
          }
        }
        return emptyContainer;
       }
       console.log(repeatStringNumTimes("abc", 1.4))

      
