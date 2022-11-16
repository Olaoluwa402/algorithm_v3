

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
const nums = [3, 1, 2, 4];
let even = [];
let odd = [];
function evenInt(nums) {
  for (let x of nums) {
    if (x % 2 == 0) {
      even.push(x);
    } else {
      odd.push(x);
    }
  }
  let element = document.createElement("p");
  element.innerHTML = even.concat(odd);
  document.body.appendChild(element);
}
evenInt(nums)
  /*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180

    */
  (function (Int) {
    console.log(60 * Int);
  }
);
5;

/*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */
const val = function (para) {
    let num = (para %2 == 0) ? "true" : "false";
    return num;
};

console.log(val(3));
