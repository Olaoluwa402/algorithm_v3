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
  console.log(Number(num) + 1); //Adds an integer 1 to the parameter
}
increaseNum(4);

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

function basketballPoints(twos, threes) {
  try {
    let value = twos >= 0 && threes >= 0 ? twos * 2 + threes * 3 : error;
    return value;
  } catch (error) {
    throw new Error("The input must be a number!");
  }
}
console.log(basketballPoints(1, 1));

/*
    8.  Repeat a given string str (first argument) for num times (second argument). 
      Return an empty string if num is not a positive number. 
      For the purpose of this challenge, do not use the built-in .repeat() method.

      Example:
      repeatStringNumTimes("*", 3) should return the string ***.
       repeatStringNumTimes("abc", 3) should return the string abcabcabc.
  */

let emptyContainer = "";
function repeatStringNumTimes(arg, num) {
  //Positive numbers are numbers greater than zero
  if (Math.trunc(num) > 0) {
    for (let x = 0; x < num; x++) {
      emptyContainer += arg;
    }
  }
  return emptyContainer;
}
console.log(repeatStringNumTimes("abc", 1.4));

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
function sumAll(arr) {
  // 1. Check for the MAXIMUM and MINIMUM values in the array
  let minNum = Math.min(...arr); //spread operator
  let maxNum = Math.max(...arr);
  // 2 . Declare a variable to first hold the SUM of the array, initialize to zero
  let givenArraySumWIthMinMaxInclusive = 0;

  for (let i = minNum; i <= maxNum; i++) {
    givenArraySumWIthMinMaxInclusive += i; // givenArraySum  = givenArraySum  + num
  }

  return givenArraySumWIthMinMaxInclusive;
}
console.log(sumAll([10, 15]));

/* 10
        SUM ALL PRIME:
        A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2
        is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is
        divisible by 1, 2 and 4.

        Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

        sumPrimes(10) should return 17.
        sumPrimes(977) should return 73156.

        note:We only need to check up to the square root because the square root 
        of a number is the largest possible unique divisor.
    */

const sumPrimes = function (num) {
  let result = 2; //Since we are adding all prime numbers

  // Conditional statement to check if the input is 1 or less than 1
  if (num <= 1) {
    return "The number must be greater than 1"; // Prime numbers are numbers that are divisible by 1 and itself.
  } else {
    for (let i = 2; i <= num; i++) {
       if(i % 2 === 0 || (i % Math.sqrt(i)) === 0){
        console.log(i);
        continue;
       }
       result += i;  
    }
    console.log(result, "wat");
  }
}
sumPrimes(50);

/* 11.
      A tetrahedron is a pyramid with a triangular base and three sides. 
      A tetrahedral number is a number of items within a tetrahedron.
      Create a function that takes an integer n and returns the nth tetrahedral number.
      
      Hint :
      tetra(2) ➞ 4
      tetra(5) ➞ 35
      tetra(6) ➞ 56

*/

function tetra(n){
  let result = (n * (n+1)*(n+2))/6; //formular for finding nth term of tetrahedron.
  return result;
}
console.log(tetra(2));
console.log(tetra(5));
console.log(tetra(6));
 


/*
    12. Write a function redundant that takes in a string str and returns a function that returns str.
      const f1 = redundant("apple")
      f1() ➞ "apple"
      const f2 = redundant("pear")
      f2() ➞ "pear"
      const f3 = redundant("")
      f3() ➞ ""
 */

      const redundant = function(str){
        function f1(str){
          return JSON.stringify(str); // a method that makes a copy of a string passed as parameter.
        }
        return f1(str);
      }
      console.log(redundant("apple"));
      console.log(redundant("pear"));
      console.log(redundant(""));

      
     

// ALGORITHM PERSONAL PRACTICE:

// Calculating the average of student scores.
//function avgNums(para){
//   let result = 0;
//    let average = [...para];
//    for(let x of para){
//      result += x;
//    }
//     console.log(Math.floor(result/average.length));
// }
// avgNums([2,3,6]);

// // Q2. You are going to be given a word. Your job is to return the middle character of the word. 
// //If the word's length is odd, return the middle character. 
// //If the word's length is even, return the middle 2 characters.

// // #Examples:

// // Kata.getMiddle("test") should return "es"

// // Kata.getMiddle("testing") should return "t"

// // Kata.getMiddle("middle") should return "dd"

// // Kata.getMiddle("A") should return "A"
// // 


// function checkInfo(msg){
//   let value = "";
//    for(let i = 0; i < msg.length; i++){
//     if(msg.length % 2 ==0){
//       console.log(msg[i])
//      value += msg[(msg.length/2)-1] + msg[msg.length/2]
//     } else if(msg.length % 2 !==0){
//       value += msg[Math.trunc(msg.length/2)]
//     }
//     return value;
//    }
   
//    }
//    console.log(checkInfo("A"));

// //Q3. The two oldest ages function/method needs to be completed. 
// //It should take an array of numbers as its argument and return the two highest numbers within the array. 
// //The returned value should be an array in the format [second oldest age,  oldest age].

// // The order of the numbers passed in could be any order. 
// //The array will always include at least 2 items. 
// //If there are two or more oldest age, then return both of them in array format.

// // For example (Input --> Output):

// // [1, 2, 10, 8] --> [8, 10]
// // [1, 5, 87, 45, 8, 8] --> [45, 87]
// // [1, 3, 10, 0]) --> [3, 10]

// function oldestAge(arr){
//   let val = arr.sort(function(a,b){return b-a})
//   return [val[1], val[0]];
// }
// console.log(oldestAge([1,5,87,45,8,8]))

// function redundant(arr){
//   let arrValue = [...arr]
//   console.log(arrValue.join(''))
//   if(arrValue != ""){ //returns true if the value of the parameter is not empty.
//     return "true";
//   } 
//   return "false"; //returns false if the value of the parameter is not empty
// }
// console.log(redundant([]))

