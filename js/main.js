// Bootcamp Algorithm challenge/solutions - itskills 2022
// const { log } = console; //console.log

/*1. The formula to convert from Celsius to Fahrenheit is the
temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Define a variable fahrenheit and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
NOTE; Return the value of the result from the function*/

// function convertCelsius(para) {
//   return para * (9 / 5) + 32;
// }
// console.log(convertCelsius(2)); //converts Celsius to Fahrenheit.
// /*

//     2. Given an integer array nums, move all the even integers
//     at the beginning of the array  followed by all the odd integers.
//     Return any array that satisfies the condition
//     Example:
//     Input: nums = [3,1,2,4]
//     output: [2,4,3,1]
//     Explanation: outputs: [4,2,3,1], [2,4,1,3] and [4,2,1,3]
//     would also be accepted
//  */

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

/*  function tempfah(cel){
        return cel*(9/5)+32
    }
    console.log(tempfah(40)); */

// algo_date_15;

// let x;
// let num1;
// let num2;
// let arr = [2, 3, 4, 5, 6, 7];
// arr.forEach(myfunction());
// function myfunction() {
//   if (x % 2 == 0) {
//     num1 = x.append;
//   } else {
//     num2 = x.append;
//   }
//   myfunction();
// }
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

// function repeatStringNumTimes(str, num) {
//   if (num < 0) {
//     return "";
//   } else {
//     return num * str;
//   }
// }
// console.log(repeatStringNumTimes("abc", 2));

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
  // const sortedArray = arr.sort((a, b) => a - b);
  // const min = sortedArray[0];
  // const max = sortedArray[sortedArray.length - 1];

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
// console.log(sumAll([10, 15]));
function sumPrime(num) {
  // 1. loop through the num given, excluding zero and 1
  //2. initiate a sum count
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum = sum + i;
    }
  }

  return sum;

  function isPrime(test) {
    //check that num is prime
    for (let i = 2; i < test; i++) {
      if (test % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(sumPrime(12), "prime");

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

/* 11.
      A tetrahedron is a pyramid with a triangular base and three sides. 
      A tetrahedral number is a number of items within a tetrahedron.
      Create a function that takes an integer n and returns the nth tetrahedral number.
      
      Hint :
      tetra(2) ➞ 4
      tetra(5) ➞ 35
      tetra(6) ➞ 56

      Tn = (n * (n + 1) * (n + 2)) / 6

    12. Write a function redundant that takes in a string str and returns a function that returns str.
      const f1 = redundant("apple")
      f1() ➞ "apple"
      const f2 = redundant("pear")
      f2() ➞ "pear"
      const f3 = redundant("")
      f3() ➞ ""
 */
