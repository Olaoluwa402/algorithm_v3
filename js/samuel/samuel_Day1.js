/*1. The formula to convert from Celsius to Fahrenheit is the
temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Define a variable fahrenheit and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
NOTE; Return the value of the result from the function*/

let convertToFahrenheit = function (celsius) {
  return (degFahrenheit = celsius * (9 / 5) + 32);
};

console.log(convertToFahrenheit(30));

// function convert(x, y) {
//   const degFahrenheit = celsius * (9 / 5) + 32;
//   return degFahrenheit;
// }

// convert(30);

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

function evenOdd(nums) {
  let even = [];
  let odd = [];
  for (let num of nums) {
    if (num % 2 == 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  return odd.concat(even);
}

// for(let i=0; i < nums.length; i++){

// }

// gjh

console.log(evenOdd([3, 1, 2, 4, 5, 6, 7, 8, 9]));
