// Bootcamp Algorithm challenge/solutions - itskills 2022
const { log } = console;
/*1. The formula to convert from Celsius to Fahrenheit is the
temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Define a variable fahrenheit and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
NOTE; Return the value of the result from the function*/


let convertToFahrenheit = function(celsius){
    return (degFahrenheit =celsius*(9/5) + 32)
}

console.log (convertToFahrenheit(30))


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
      
      console.log(evenOdd([3, 1, 2, 4, 5, 6, 7, 8, 9]));
      



   /*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
    */
   let converttoseconds = function(minute){
    let second= minute*60
    return second
   }

   console.log(converttoseconds(5))
   console.log(converttoseconds(3))

   
/*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */
   function evenAndodd(num){
    if(num % 2==0){
        return true
       }
       else{
        return false
       }
    
   }
   
   console.log(evenAndodd(4))


   
/* 
        5. Create a function that takes a number as an argument, increments the number by 
        1 and return the result. Example addition(0) => 1, addition(4) => 5
    */
function argument(num){
    let result=num +1
    return result
}
console.log(argument(5))

        
/* 
       6. Create a function that takes voltage and current and returns the 
        calculated power. Example circuitPower(230, 10) => 2300
    */
let voltagecurrent= function(v,c){
    let power= v*c
    return power 
}

console.log(voltagecurrent(230,10))


/*
       7. You are counting points for a basketball game, given the amount of 
        2-pointers scored and 3-pointers scored, find the final points for the 
        team and return that value. Examples points(1,1) => 5, points(5,7) => 31
    */
  let pointer= function(a,b){
    return(a*2)+(b*3)
   }
console.log(pointer(5,7))

        /*
    8.  Repeat a given string str (first argument) for num times (second argument). 
      Return an empty string if num is not a positive number. 
      For the purpose of this challenge, do not use the built-in .repeat() method.

      Example:
      repeatStringNumTimes("*", 3) should return the string ***.
       repeatStringNumTimes("abc", 3) should return the string abcabcabc.
  */
     function argument(str,num){
    result=""
    if (num > 0){
        for(let i=0; i<num; i++){
            result +=str
        }
        return result
    }
else{
    return ""
}
 }
console.log(argument("*",3))
console.log(argument("abc",3))

// */
//     9.
//         We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
//         The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers 
//         between 1 and 4 (both inclusive) is 10.

//         sumAll([1, 4]) should return 10.

//         sumAll([4, 1]) should return 10.

//         sumAll([5, 10]) should return 45.

//         sumAll([10, 5]) should return 45.
//     */


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
  console.log(sumAll([10, 15]));
  

//   solution 2

function sumAll(arr) {
    // 1. Declare a variable to first hold the SUM of the array, initialize to zero
    let givenArraySum = 0;
  
    for (let num of arr) {
      givenArraySum += num; // givenArraySum  = givenArraySum  + num
    }
  
    // 2. Check for the MAXIMUM and MINIMUM values in the array
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);
  
    // 3. Declare an EMPTY array to hold the values between the MIN VALUE and MAX and the populate the array
    let numbersBetween = [];
  
    for (let i = minNum + 1; i < maxNum; i++) {
      numbersBetween.push(i);
    }
  
    //   4. Add the values in the array of numbers between the MIN and MAX and store in a variable
    let numbersBetweenSum = 0;
  
    for (number of numbersBetween) {
      numbersBetweenSum += number;
    }
  
    //   5. Return the sum of the given array and the sum of the numbers between
  
    return givenArraySum + numbersBetweenSum;
  }
  console.log(sumAll([10, 5]));
  
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

        function sumprimes(num){
          let sum = 0
          function isprime(num){
            for(let i=2; i<num; i++){
              if(num % i == 0){
                return false
              }
            } 
            return true
          }
            for(let i=2; i<=num; i++){
              if (isprime(i)){
                sum += i
              }
            } 
            return sum
        }
        console.log(sumprimes(10))
        console.log(sumprimes(977))

  // solution 2
         function sumPrime(num){
          // 1. loop through the num given, excluding zero and 1
          // 2. initiate a sum count
          let sum = 0
          for(let i=2; i<=num; i++){
            if(isPrime(i)){
              sum =sum +i;
            }
          }
           return sum;
        
         function isPrime(num){
          // check that num is prime 
          for(let i=2; i<num; i++){
            if(num % i === 0){
              return false;
            }
          }
          return true;
         }
        }
        console.log(sumPrime(12))


        
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
        return  (n*(n+1)*(n+2))/6
      }
      console.log(tetra(2))
      console.log(tetra(5))
      console.log(tetra(6))
/*      
    12. Write a function redundant that takes in a string str and returns a function that returns str.
      const f1 = redundant("apple")
      f1() ➞ "apple"
      const f2 = redundant("pear")
      f2() ➞ "pear"
      const f3 = redundant("")
      f3() ➞ ""
      */
        function redundant(str){
          return function f1(){
            return str;
          };
        }
        const f1 = redundant("apple");
        console.log("apple");

  /*      Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 */

function summation(num){
let result = 0;
for(let i =1; i<=num; i++){
  
   result = result + i;
}
return result;
}
console.log(summation(8))

/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12 */

function makeNegative(num){
if(num<=0){
  return num
}
else{
  return -num
}
}
console.log(makeNegative(1))
console.log(makeNegative(-5))
console.log(makeNegative(0))
console.log(makeNegative(0.12))

/* 13.
Write a function that takes a number and returns the perimeter of either a circle or a square. 
The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, 
and the number will be the side of the square or the radius of the circle.

perimeter("s", 7) ➞ 28
perimeter("c", 4) ➞ 25.12
perimeter("c", 9) ➞ 56.52  */
function perimeter(letter, num){
  if (letter == "s"){
    return 4*num;
  } else if (letter == "c"){
    return 2*3.14*num;
  }
}
console.log(perimeter("s", 7));
console.log(perimeter("c", 4));
console.log(perimeter("c", 9));

/* 14.
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

    * If the number is negative, return the related ancestor.
    * If positive, return the related descendant.
    * You are generation 0. In the case of 0 (male or female), return "me!".
    
generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter" */


function generation(num, char){
if( num==-1 && (char=="m" || char=="f")){
  const res = char == 'm' ? 'father':'mother'
  return res
}else if( num<-1 && (char=="m" || char=="f")){
  const res = char =='m' ? 'grandfather':'grandmother'
  return res
}else if(num<-2  && (char=="m" || char=="f")){
  const res = char =='m' ? 'great grandfather':'great grandmother'
  return res
}else if (num=1 && (char=='m' || char=='f')){
  const res = char =='m' ? 'son':'daughter'
  return res
}else if(num>1 && (char=='m'|| char=='f')){
  const res = char =='m'? 'grandson':'graanddaughter'
  return res
}
}
console.log(generation(-1, 'f'))
console.log(generation(-2, 'f'))
console.log(generation(-2, 'm'))
console.log(generation(-3, 'm'))
console.log(generation(-3, 'f'))
console.log(generation(1, 'm'))
console.log(generation(2, 'f'))

/*I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.*/

