/*1. The formula to convert from Celsius to Fahrenheit is the
temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Define a variable fahrenheit and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
NOTE; Return the value of the result from the function*/


function celsiusToFahrenheit(celsius){
    let Fahrenheit = (celsius*9/5) + 32;
    return Fahrenheit;
}
console.log(celsiusToFahrenheit(20));


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


function evenIntegersOddIntegers(nums) {
    let evenIntegers = [];
    let oddIntegers = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]%2 == 0) {
            evenIntegers.push(nums[i]);
        }else {
            oddIntegers.push(nums[i]);
        }
    }
    return evenIntegers.concat(oddIntegers);
}
console.log(evenIntegersOddIntegers([5,1,2,4]));


/*
    3. Write a function that takes in integers in minute and convert it to seconds
    Examples:
    convert(5) => 300
    convert(3) => 180
*/
// Pseudo code - Take in input and cast to number
//              Use formular for minute to seconds conversion
//              Store result in a variable
//              Return the result to the function call

function convert(integer){
    let seconds = integer*60;
    return seconds;
}
console.log(convert(5));
console.log(convert(3));

// or

console.log((function convert(integer){
    let seconds = integer*60;
    return seconds;
})(5));

// or

// (function convert(integer){
//     let seconds = integer*60;
//     return seconds;
// })(5)




/*
    4. Write a function that returns true if a number passed into it is an 
    even number and false if otherwise. 
*/

function integer(number){
    if (number%2 == 0) {
        return true;
    }else{
        return false;
    }
}
console.log(integer(4));
console.log(integer(5));

/* 
    5. Create a function that takes a number as an argument, increments the number by 
    1 and return the result. Example addition(0) => 1, addition(4) => 5
*/
function addition(num) {
    num++
    return num;
}
console.log(addition(0));
console.log(addition(4));

// or
// let addition = (num) => {
//     const toNum = Number(num);
//     toNum += 1;
// }
// console.log(addition(3));
/* 
    6. Create a function that takes voltage and current and returns the 
    calculated power. Example circuitPower(230, 10) => 2300
*/
function circuitPower(voltage, current){
    return voltage*current;
}
console.log(circuitPower(230, 10));

/*
       7. You are counting points for a basketball game, given the amount of 
        2-pointers scored and 3-pointers scored, find the final points for the 
        team and return that value. Examples points(1,1) => 5, points(5,7) => 31
    */
function points(n, m){
    return ((n*2)+(m*3));
}
console.log(points(1,1));
console.log(points(5,7));
/*
    8.  Repeat a given string str (first argument) for num times (second argument). 
      Return an empty string if num is not a positive number. 
      For the purpose of this challenge, do not use the built-in .repeat() method.

      Example:
      repeatStringNumTimes("*", 3) should return the string ***.
       repeatStringNumTimes("abc", 3) should return the string abcabcabc.
  */
function repeatStringNumTimes(str, num){ 
    let repeatStr = ''

    if(num>0){
        for(let i=0; i<num; i++){
            repeatStr +=  str
        }
    }
    return repeatStr
}
console.log(repeatStringNumTimes("*",  3));
console.log(repeatStringNumTimes("abc", 3));
