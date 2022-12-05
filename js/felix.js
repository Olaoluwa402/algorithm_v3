/*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
    */

/*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */

function minuteToSecondsConverter(a) {
  return a * 60;
}
console.log(minuteToSecondsConverter(5));
console.log(minuteToSecondsConverter(3));

function passed(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(passed(5));
console.log(passed(6));

//     5. Create a function that takes a number as an argument, increments the number by
//     1 and return the result. Example addition(0) => 1, addition(4) => 5
function addition(num) {
  return num + 1;
}
console.log(addition(0));
console.log(addition(4));

//    6. Create a function that takes voltage and current and returns the
//     calculated power. Example circuitPower(230, 10) => 2300

//     function power(voltage, current){
//         return voltage * current;
//     }
//    console.log(power(230, 10));

//    function perimeter(l,num){
//     if (l=="s"){
//         return 4 * num;
//     }else if (l=="c"){
//         return 2 * 3.14 *num;
//     }
//     return "the letter can either be c or s"
//     }
//    console.log(perimeter("s",4));
//    console.log(perimeter("d",4));

//    7. You are counting points for a basketball game, given the amount of
// 2-pointers scored and 3-pointers scored, find the final points for the
// team and return that value. Examples points(1,1) => 5, points(5,7) => 31

function finalpoint(two_pointers, three_pointers) {
  return 2 * two_pointers + 3 * three_pointers;
}
console.log(finalpoint(1, 1));
console.log(finalpoint(5, 7));
// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// For the purpose of this challenge, do not use the built-in .repeat() method.

// Example:
// repeatStringNumTimes("*", 3) should return the string ***.
//  repeatStringNumTimes("abc", 3) should return the string abcabcabc.

//      function repeatStringNumTimes (str,num){
//          let repeatStr = ""
//          if (num > 0){
//            for (let i=0; i<num; i++);}

// console.log(repeatStringNumTimes("abc",2)
//       }

// function repeatStringNumTimes(str,num){

//         let repeatStr =""
//         if(num > 0) {
//             for ( let i=0; i<num; i++);
//             return str *
// }
// }
// console.log(repeatStringNumTimes("abc",2))

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
//             The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers
//             between 1 and 4 (both inclusive) is 10.

//             sumAll([1, 4]) should return 10.

//             sumAll([4, 1]) should return 10.

//             sumAll([5, 10]) should return 45.

//             sumAll([10, 5]) should return 45.num;
//

// SUM ALL PRIME:
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2
// is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is
// divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.

// note:We only need to check up to the square root because the square root
// of a number is the largest possible unique divisor

// Javascript program to find
// sum of primes in
// range from 1 to n.

// Returns sum of primes
// in range from

function sumPrimes(num) {
  let sum = 0;
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumPrimes(16));

// A tetrahedron is a pyramid with a triangular base and three sides.
// A tetrahedral number is a number of items within a tetrahedron.
// Create a function that takes an integer n and returns the nth tetrahedral number.

// Hint :
//   tetra(2) ➞ 4
//   tetra(5) ➞ 35
//   tetra(6) ➞ 56

function tetra(n) {
  return (n * (n + 1) * (n + 2)) / 6;
}
console.log(tetra(6));

// // 12. 12. Write a function redundant that takes in a string str and returns a function that returns str.
//       const f1 = redundant("apple")
//       f1() ➞ "apple"
//       const f2 = redundant("pear")
//       f2() ➞ "pear"
//       const f3 = redundant("")
//       f3() ➞ ""
//  */

// function redundant(str){
//     return function ( ){
//         return str;
//     }
// }
// const f1 = redundant("apple")
//  console.log(redundant("apple"));

const redundant = function (str) {
  let result = "";
  for (let i = 0; i < str.length; i++) result += str[i];
  return JSON.stringify(result);
};
console.log("apple");

/*Write a function that takes a number and returns the perimeter of either a circle or a square. 
The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, 
and the number will be the side of the square or the radius of the circle.

perimeter("s", 7) ➞ 28
perimeter("c", 4) ➞ 25.12
perimeter("c", 9) ➞ 56.52*/

function perimeter(l, num) {
  if (l == "s") {
    return 4 * num;
  } else if (l == "c") {
    return 2 * 3.14 * num;
  }
  return "the letter can either be c or s";
}
console.log(perimeter("s", 7));
console.log(perimeter("c", 9));
console.log(perimeter("c", 4));

/*Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

* If the number is negative, return the related ancestor.
* If positive, return the related descendant.
* You are generation 0. I
n the case of 0 (male or female), return "me!".

generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter"*/

const gen = {
  "-3": ["great grandfather", "great grandmother"],
  "-2": ["grandfather", "grandmother"],
  "-1": ["father", "mother"],
  0: ["me!", "me!"],
  1: ["son", "daughter"],
  2: ["grandson", "granddaughter"],
  3: ["great grandson", "great granddaughter"],
};
function generation(x, y) {
  return y == "m" ? gen[x][0] : gen[x][1];
}
console.log(generation(2, "f"));
console.log(generation(-3, "m"));


// Integer Reversal
// Given an integer, reverse the order of the digits

// reverseInteger(123) => 321
// reverseInteger(46923) => 32964

function reverseInteger(num){
 
  // converting number to string
  let str = num.toString().split("");
 
  // reversing the string
  str.reverse();
   
 
  // converting string to integer
  num = parseInt(str.join(""))
 
  // returning integer
  return num;
}
 
// Driver Code
let num = 4562;
console.log("Reverse of no. is " + reverseInteger(num));
console.log(reverseInteger(123));
console.log(reverseInteger(46923));

/*Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

Template:
myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.

myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
*/




function myReplace(str, before, after) {
  const strSplit = str.split(' ');

  if (/^[A-Z]/.test(before)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } 

  strSplit.splice(strSplit.indexOf(before), 1, after);
  return strSplit.join(' ');
}

console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("Let us go to the store", "store", "mall"));

 