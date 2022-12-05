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
//     }
//     return result;
//   } else {
//     return "";
//   }
// }
// console.log(repeatStringNumTimes("*", 3));
// console.log(repeatStringNumTimes("ABC", 3));

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


      function sumPrimes(num){
        let numofPrime = [];

        for(let i=1; i<=num; i++ ){
            numofPrime.push(i);    
        } 
        return numofPrime;
      }
      //   primeofnumofPrime =[]
      // for (let i=2; i<=primeofnumofPrime; i++ ){
      //   if(numofPrime % i == 0){
      //     primeofnumofPrime.push(i)
      //   }
      //   return primeofnumofPrime += numofPrime;
      // }
        console.log(sumPrimes(10))

        function sumPrime(num){
          // 1. loop through the num given, excluding zero and 1
          // initiate a sum count
          let sum = 0;

          for (let i=2; i<=num; i++){
              if (isPrime(i)){
                sum = sum +i;
              }
          }
          return sum;
           
          function isPrime(num){
            for(let i =2; i < num; i++){
              if (num % i === 0){
                return false;
              }
            }
            return true
          }
        }

      //  11.
      // A tetrahedron is a pyramid with a triangular base and three sides. 
      // A tetrahedral number is a number of items within a tetrahedron.
      // Create a function that takes an integer n and returns the nth tetrahedral number.
      
      // Hint :
      // tetra(2) ➞ 4
      // tetra(5) ➞ 35
      // tetra(6) ➞ 56
      
      function tetra(n){
        return (n*(n+1)*(n+2))/6
      }
      console.log(tetra(2))
      console.log(tetra(5))




//     12. Write a function redundant that takes in a string str and returns a function that returns str.
//       const f1 = redundant("apple")
//       f1() ➞ "apple"
//       const f2 = redundant("pear")
//       f2() ➞ "pear"
//       const f3 = redundant("")
//       f3() ➞ ""
//      

        const redundant = function(str){
          function f1(str){
            return JSON.stringify(str); // a method that makes a copy of a string passed as parameter.
          }
          return f1(str);
        }
        console.log(redundant("apple"));
        console.log(redundant("pear"));
        console.log(redundant(""));



        /*  13.
Write a function that takes a number and returns the perimeter of either a circle or a square. 
The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, 
and the number will be the side of the square or the radius of the circle.

perimeter("s", 7) ➞ 28
perimeter("c", 4) ➞ 25.12
perimeter("c", 9) ➞ 56.52
*/

// function takes a letter and number (letter, num)
// returns perimeter of circle (2πr) and square (4a)

 function perimeter(letter, num){
  if(letter === "c"){
    return 2*3.14*num
  }
  else if(letter === "s"){
    return 4*num
  }

  // OR

  return (letter == "s")?4*num:(letter == "c")?2*3.142*num:false
 }
 console.log(perimeter("s",7))
 console.log(perimeter("c",4))
 console.log(perimeter("c",9))



/*
14.
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

    * If the number is negative, return the related ancestor.
    * If positive, return the related descendant.
    * You are generation 0. In the case of 0 (male or female), return "me!".
    */
    
// generation(2, "f") ➞ "granddaughter"
// generation(-3, "m") ➞ "great grandfather"
// generation(1, "f") ➞ "daughter"
 
function generation(num, char){
  if (num >1 && char == "f"){
    return "granddaughter"
  }
  else if (num >1 && char == "m"){
    return "grandson"
  }
  else if(num == 1 && char == "f"){
    return "daughter"
    }
  else if(num == 1 && char == "m"){
      return "son"
      }
  else if(num == -1 && char == "m"){
        return "father"
      }
  else if(num == -1 && char == "f"){
        return "mother"
      }
  else if(num == -2 && char == "m"){
    return "grandfather"
  }
  else if(num == -2 && char == "f"){
    return "grandmother"
  }
  else if(num == -3 && char == "f"){
    return "great grandmother"
  }
  else if(num == -3 && char == "m"){
    return "great grandmother"
  }
}

console.log(generation(1,"f"))
console.log(generation(1,"m"))
console.log(generation(2,"f"))
console.log(generation(2,"m"))
console.log(generation(-1,"f"))
console.log(generation(-1,"m"))
console.log(generation(-2,"f"))
console.log(generation(-2,"m"))
console.log(generation(-3,"m"))
console.log(generation(-3,"f"))
// console.log(generation(-4,"f"))
