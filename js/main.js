// Bootcamp Algorithm challenge/solutions - itskills 2022
const { log } = console; //console.log

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
// evenInt(nums)

/*  function tempfah(cel){
        return cel*(9/5)+32
    }
    console.log(tempfah(40)); */

algo_date_15;

let x;
let num1;
let num2;
let arr = [2, 3, 4, 5, 6, 7];
arr.forEach(myfunction());
function myfunction() {
  if (x % 2 == 0) {
    num1 = x.append;
  } else {
    num2 = x.append;
  }
  myfunction();
}
/*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
    */
//psuedo code
//1.Take in input and cast to number
//2. use formular for minute to seconds convertion
//3. store result in a variable and return the result to the function call\

/*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */

/* 
        5. Create a function that takes a number as an argument, increments the number by 
        1 and return the result. Example addition(0) => 1, addition(4) => 5
    */

/* 
       6. Create a function that takes voltage and current and returns the 
        calculated power. Example circuitPower(230, 10) => 2300
    */

/*
       7. You are counting points for a basketball game, given the amount of 
        2-pointers scored and 3-pointers scored, find the final points for the 
        team and return that value. Examples points(1,1) => 5, points(5,7) => 31
    */

// 8.  Repeat a given string str (first argument) for num times (second argument).
//   Return an empty string if num is not a positive number.
//   For the purpose of this challenge, do not use the built-in .repeat() method.

//   Example:
//   repeatStringNumTimes("*", 3) should return the string ***.
//    repeatStringNumTimes("abc", 3) should return the string abcabcabc.

function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  } else {
    return num * str;
  }
}
console.log(repeatStringNumTimes("abc", 2));

/*
    9.
        We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
        The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers 
        between 1 and 4 (both inclusive) is 10.

        sumAll([1, 4]) should return 10.

        sumAll([4, 1]) should return 10.

        sumAll([5, 10]) should return 45.

        sumAll([10, 5]) should return 45.
    */
