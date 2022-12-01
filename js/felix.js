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

const redundant = function (str){
    let result = "";
    for(let i=0; i<str.length; i++)
    result += str[i];
    return JSON.stringify(result);
}
console.log("apple");



 
