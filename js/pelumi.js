// /*1. The formula to convert from Celsius to Fahrenheit is the
// temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius.
// Define a variable fahrenheit and assign it the Fahrenheit temperature
// equivalent to the given Celsius temperature.
// Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
// NOTE; Return the value of the result from the function*/


// function celsiusToFahrenheit(celsius){
//     let Fahrenheit = (celsius*9/5) + 32;
//     return Fahrenheit;
// }
// console.log(celsiusToFahrenheit(20));


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


// function evenIntegersOddIntegers(nums) {
//     let evenIntegers = [];
//     let oddIntegers = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i]%2 == 0) {
//             evenIntegers.push(nums[i]);
//         }else {
//             oddIntegers.push(nums[i]);
//         }
//     }
//     return evenIntegers.concat(oddIntegers);
// }
// console.log(evenIntegersOddIntegers([5,1,2,4]));


// /*
//     3. Write a function that takes in integers in minute and convert it to seconds
//     Examples:
//     convert(5) => 300
//     convert(3) => 180
// */
// // Pseudo code - Take in input and cast to number
// //              Use formular for minute to seconds conversion
// //              Store result in a variable
// //              Return the result to the function call

// function convert(integer){
//     let seconds = integer*60;
//     return seconds;
// }
// console.log(convert(5));
// console.log(convert(3));

// // or

// console.log((function convert(integer){
//     let seconds = integer*60;
//     return seconds;
// })(5));

// // or

// // (function convert(integer){
// //     let seconds = integer*60;
// //     return seconds;
// // })(5)




// /*
//     4. Write a function that returns true if a number passed into it is an 
//     even number and false if otherwise. 
// */

// function integer(number){
//     if (number%2 == 0) {
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(integer(4));
// console.log(integer(5));

// /* 
//     5. Create a function that takes a number as an argument, increments the number by 
//     1 and return the result. Example addition(0) => 1, addition(4) => 5
// */
// function addition(num) {
//     num++
//     return num;
// }
// console.log(addition(0));
// console.log(addition(4));

// // or
// // let addition = (num) => {
// //     const toNum = Number(num);
// //     toNum += 1;
// // }
// // console.log(addition(3));
// /* 
//     6. Create a function that takes voltage and current and returns the 
//     calculated power. Example circuitPower(230, 10) => 2300
// */
// function circuitPower(voltage, current){
//     return voltage*current;
// }
// console.log(circuitPower(230, 10));

// /*
//        7. You are counting points for a basketball game, given the amount of 
//         2-pointers scored and 3-pointers scored, find the final points for the 
//         team and return that value. Examples points(1,1) => 5, points(5,7) => 31
//     */
// function points(n, m){
//     return ((n*2)+(m*3));
// }
// console.log(points(1,1));
// console.log(points(5,7));
// /*
//     8.  Repeat a given string str (first argument) for num times (second argument). 
//       Return an empty string if num is not a positive number. 
//       For the purpose of this challenge, do not use the built-in .repeat() method.

//       Example:
//       repeatStringNumTimes("*", 3) should return the string ***.
//        repeatStringNumTimes("abc", 3) should return the string abcabcabc.
//   */
// function repeatStringNumTimes(str, num){ 
//     let repeatStr = ''

//     if(num>0){
//         for(let i=0; i<num; i++){
//             repeatStr +=  str
//         }
//     }
    
// }
// console.log(repeatStringNumTimes("*",  3));
// console.log(repeatStringNumTimes("abc", 3));

// // or

// function repeatString(string, times){ 
//     let repeatS = ''
//     if(times < 0){
//         return ""
//     } else {
//         return repeatS += string
//     }
// }
// console.log(repeatStringNumTimes("pelz",  4));

// /*
//     9.
//         We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
//         The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers 
//         between 1 and 4 (both inclusive) is 10.

//         sumAll([1, 4]) should return 10.

//         sumAll([4, 1]) should return 10.

//         sumAll([5, 10]) should return 45.

//         sumAll([10, 5]) should return 45.
//     */ function sumAll(arr){
//         let val = 0;
//         let min = Math.min(...arr)
//         let max = Math.max(...arr)
//         for(let i = min; i<=max; i++){
//            val += i;
//         }
//         return val;
//     }
//     let value = sumAll([10,5])
//     console.log("%c" + value, "font-size: 20px; color: blue;")

//     function sum(arr){
//         let num = 0;
//         let a = [...arr]
//         if(a[0]>a[a.length-1]){
//             for(let i = a[0]; i>=a[a.length-1]; i--){
//                num += i;
//             }
//         } else if(a[0]<a[a.length-1]){
//             for(let i = a[0]; i<=a[a.length-1]; i++){
//                 num += i;
//         }
//     }
//         return num;
//     }
//     console.log(sum([5,10]))
//     console.log(sum([10, 5]))

//     /* 10
//         SUM ALL PRIME:
//         A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2
//         is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is
//         divisible by 1, 2 and 4.

//         Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

//         sumPrimes(10) should return 17.
//         sumPrimes(977) should return 73156.

//         note:We only need to check up to the square root because the square root 
//         of a number is the largest possible unique divisor.
//     */
//    function sumPrimes(num){
//        let sum = 0;
//        function isPrime(num){
//         for (let i=2; i<num; i++){
//             if (num % i == 0 ){
//                 return false
//             }
//          }
//          return true
//        }
//          for (let i=2; i<=num; i++){
//           if (isPrime(i)){
//              sum += i
//           }
//        }
//          return sum;
//    }
//    console.log(sumPrimes(10));

//    /* 11.
//       A tetrahedron is a pyramid with a triangular base and three sides. 
//       A tetrahedral number is a number of items within a tetrahedron.
//       Create a function that takes an integer n and returns the nth tetrahedral number.
      
//       Hint :
//       tetra(2) ➞ 4
//       tetra(5) ➞ 35
//       tetra(6) ➞ 56
//    */  
//     function tetra(n){
//       let formular = (n*(n+1)*(n+2))/6; 
//       return formular;
//     }
//     console.log(tetra(2));
//     console.log(tetra(5));
//     console.log(tetra(6));

//    /*
//     12. Write a function redundant that takes in a string str and returns a function that returns str.
//       const f1 = redundant("apple")
//       f1() ➞ "apple"
//       const f2 = redundant("pear")
//       f2() ➞ "pear"
//       const f3 = redundant("")
//       f3() ➞ ""
// */
//     function redundant(str){
//         return function f1(){
//             return str;
//         }
//     }
//     const result = redundant("apple");
//     console.log("apple");
    
// /*  13.
// Write a function that takes a number and returns the perimeter of either a circle or a square. 
// The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, 
// and the number will be the side of the square or the radius of the circle.

// perimeter("s", 7) ➞ 28
// perimeter("c", 4) ➞ 25.12
// perimeter("c", 9) ➞ 56.52
// */
// function perimeter(l, num){
//     if (l == "s"){
//         return 4*num;
//     } else if(l == "c"){
//         return 2*3.14*num;
//     } else{
//         return "neither c nor s"
//     }
// }
// console.log(perimeter("s", 7));
// console.log(perimeter("c", 4));
// console.log(perimeter("c", 9));
// console.log(perimeter("u", 9));

// /*
// 14.
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

//     * If the number is negative, return the related ancestor.
//     * If positive, return the related descendant.
//     * You are generation 0. In the case of 0 (male or female), return "me!".
    
// generation(2, "f") ➞ "granddaughter"
// generation(-3, "m") ➞ "great grandfather"
// generation(1, "f") ➞ "daughter"

// let generation = (gen, gender) => {
//   let g = {
//     "3": ["great grandson", "great granddaughter"],
//     "2": ["grandson", "granddaughter"],
//     "1": ["son", "daughter"],
//     "0": ["me", "me"],
//    "-1": ["father", "mother"],
//    "-2": ["grandfather", "grandmother"],
//    "-3": ["great grandfather", "great grandmother"]
//   };
  
//       return gender === "m" && gen > -4 && gen < 4
//     ? g[gen][0]
//     : gender === "f" && gen > -4 && gen < 4
//     ? g[gen][1]
//     : "out of scope"; 
// };
// console.log(generation(0, "m"));

// */

// /*
// 15.
//     Integer Reversal
//     Given an integer, reverse the order of the digits

//     reverseInteger(123) => 321
//     reverseInteger(46923) => 32964
// */

//     function reverseInteger(number){
//         number += '';
//         return number.split('').reverse().join('');
        
//     }
//     console.log(reverseInteger(123));

// // OR

//     function reverseInteger(number){
//         number = number.toString();
//         const reversed = [];
//         for(let i = number.length -1 ; i >= 0; i--){
//             reversed.push(number[i])
//         }
//         return reversed.join('');
//     }
//     console.log(reverseInteger(123));

// /*
// 16.
//         Perform a search and replace on the sentence using the arguments provided and return the new sentence.

//         First argument is the sentence to perform the search and replace on.

//         Second argument is the word that you will be replacing (before).

//         Third argument is what you will be replacing the second argument with (after).

//         Note: Preserve the case of the first character in the original word when you are replacing it. 
//         For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

//         Template:
//         myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

//         myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.

//         myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.

// */

// // function myReplace(sentence, before, after){
// //     const index = sentence.indexOf(before);
// //     if (){

// //     }else{

// //     }      
// //     return sentence.replace(before, after);

// // }
// // console.log(myReplace("I think we should look up there", "up", "Down"));
// /*
// 17.
//     Write a function that splits an array (first argument) into groups the length of size (second argument) 
//     and returns them as a two-dimensional array.

//     Example:
//     chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

//     chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

//     chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

//     chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

// */
// function chunkArrayInGroups(array, chunkLength){
//     let result = [];
//     for(let i = 0; i < array.length; i+=chunkLength){
//     //iterate through and slice it every chunk length 
//         let chunk = array.slice(i, i+chunkLength);
//         result.push(chunk);
//     }
//     return result;
// }
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 10, 14], 4));

// // SWITCH
// // let grade = "Grade A"
// // switch (grade){
// //     case :
// //         console.log();
// //         break
// //     case :
// //         console.log();
// //         break
// //     case :
// //         console.log();
// //         break
// //     case :
// //         console.log();
// //         break
// //     default:
// //         console.log();
// // }
// /*
// 18.
//         Write a function that takes two or more arrays and returns a new array of unique values in the     order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array. 

//         The unique numbers should be sorted by their original order, but the final array 
//         should not be sorted in numerical order.

//    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
//    uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
//    uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]
//    
   function uniteUnique(...array){
         let newArr = [...array.flat()]
         return [...new Set(newArr)]
   }
   console.log(uniteUnique([1, 2, 3], [5, 2, 1]))
   console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
   console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))

// 
let unique = []
function uniteUnique(array1, ...arrays){
   let newArr = [array1, ...arrays].flat()
// .flat() creates a new array with all arrays concatenated into it
   for (let i=0; i<newArr.length; i++){
       if(!unique.includes(newArr[i])){
// .includes() determines whether characters in unique are in newArr
          unique.push(newArr[i])
       }
   }
   return unique
}
console.log(uniteUnique([1, 2, 3], [5, 2, 1]))
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))

/*
19.
  Function count Vowels:
  Given a string of words or phrases, count the number of vowels.
*/
// // define vowels
// const vowels = ["a","e","i","o","u"];

// function countVowel(string){
//    // initialize count
//    let count = 0;
//    // loop through to check if each chracter is a vowel
//    for(let i=0; i<string.length; i++){
      
//       if(vowels.includes(string[i].toLowerCase())){
//          count++
//       }
//    }
//    // return number of vowels
//    return count;  
// }
// console.log(countVowel("I am Unstoppable"))
// console.log(countVowel("Congratulations"))