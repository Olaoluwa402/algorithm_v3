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


/*  13.
Write a function that takes a number and returns the perimeter of either a circle or a square. 
The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, 
and the number will be the side of the square or the radius of the circle.

perimeter("s", 7) ➞ 28
perimeter("c", 4) ➞ 25.12
perimeter("c", 9) ➞ 56.52
*/


function perimeterCheck(l, num){
  try {
    if(l == "s"){ //Here the code tests for 's' input.
      return `Perimeter of square is ${4*num}` //Returns the perimeter of square if input is 's'.
    }else {
      throw new Error("The input must either be 's' or 'c'") //Here it throws a custom error if the input is not either of 's' or 'c'.
    }
  } catch (error) {
    if(l == "c"){ //If the input is 'c', it runs through this code block to return the resultant value.
      return `Perimeter of circle is ${(2*Math.PI*num).toFixed(2)}` //Returns the perimeter of circle using the constant Math.PI rounding the result to 2 decimal places using the number method 'toFixed()'.
    }
    throw error;
  }
}
console.log(perimeterCheck('s', 7))
console.log(perimeterCheck('c', 4))
console.log(perimeterCheck('c', 9))
/*
14.
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

    * If the number is negative, return the related ancestor.
    * If positive, return the related descendant.
    * You are generation 0. In the case of 0 (male or female), return "me!".
    
generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter"
 */

function offSpring(x,y){
  //* Hint: This is a word play of arguements. If the inputted number is negative, regardless of the value, the result will either be great grand-father of great grand-mother. However, it will return either of son or daughter if the inputted number is '1' and return grandson or grand-daughter if the inputted number is '2'.
  if(x == 0){
    return "me!";
  } else if(x == 1 && y == "m"){
    return "son"
  } else if(x == 1 && y == "f"){
    return "daughter";
  } else if(x == 2 && y == "m"){
    return "grand-son";
  } else if(x == 2 && y == "f"){
    return "grand-daughter";
  } else if(x < 0 && y == "m"){
    return "great grand-father";
  }else if(x < 0 && y == "f"){
    return "great grand-mother";
  }
}
console.log(offSpring(-2, "f"));

      
/*
15.
    Integer Reversal
    Given an integer, reverse the order of the digits

    reverseInteger(123) => 321
    reverseInteger(46923) => 32964
    */

   function reverseInt(para){
     let val = para.toString();
     let Int = [...val].reverse().join(''); //using spread operator to
     return Number(Int);
     
   }
   console.log(reverseInt(123))
   console.log(reverseInt(46923))


    /*
16.
        Perform a search and replace on the sentence using the arguments provided and return the new sentence.

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


// function myReplace(sentence, before, after){
//   switch (before[0].toUpperCase()) {
//     case before[0]:
//       return sentence.replace(before, after[0].toUpperCase())
//       break;

//     default:
//       return sentence.replace(before, after.toLowerCase())
//       break;
//   }
// }
// console.log(myReplace("Let us go to the store", "store", "mall"))
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
// console.log(myReplace("I think we should look up there", "up", "Down"))


                                      //  ALGORITHM CHALLENGE 06-12-2022
                                    

/*
17.
      Write a function that splits an array (first argument) into groups the length of size (second argument) 
      and returns them as a two-dimensional array.

      Example:
      chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

      chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

      chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

      chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

        */

      function arraySplit(first, second){
        let newArray = [];
       if(first.length > 0){
        for(let i = 0; i < second; i++){
          newArray.push(first[i])
         }
       } else{
        newArray.push(first[i])
       }
       console.log(newArray)
       
       

      }
      arraySplit(["a", "b", "c", "d"], 2)
      arraySplit(["a", "b", "c", "d"], 2)
      arraySplit(["a", "b", "c", "d"], 2)


let messsage = "ITSkills Center"
      switch (messsage) {
        case "biscuit":
          console.log("you like biscuit alot")
          break;
        case "itskillscenter":
          console.log("wrongly spelt")
          break;
        case "ITSkills Center":
          console.log("ITSkills Center is one of the best bootcamp in Lagos")
          break;
      
        default:
          console.log("you are not bright!")
          break;
      }




                                           //  ALGORITHM CHALLENGE 08-12-2022

    /*18.
//     Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array. 

//     The unique numbers should be sorted by their original order, but the final array 
//     ashould not be sorted in numerical order.

//    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
//    uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
//    uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]
//     */

let uniteUnique = function(...arr){ //Used a rest operator to avoid repetition of values
  //Convert to array and flatten it to remove the multiple arrays
let newArray = [...arr].flat();

 //Isolate the duplicates using array Set method
let result = new Set(newArray);

//Using array method, Set will return an object
let uniqueNumbers = [...result] //Using a spread operators helps us to unpack the items in an array
return uniqueNumbers;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))


      
                                          //  ALGORITHM CHALLENGE 12-12-2022

/*
19.
  Function count Vowels:
  Given a string of words or phrases, count the number of vowels.
*/

const vowelLetters = new Map();
//Added a set of vowel letters using map method to append keys and values
vowelLetters.set(1, "a");
vowelLetters.set(2, "e");
vowelLetters.set(3, "i");
vowelLetters.set(4, "o");
vowelLetters.set(5, "u");

//function that counts the number of vowel letters
function countVowels(str){
  let numberOfVowels = 0;
  for(let i of str){
    if(vowelLetters.get(1) == i || vowelLetters.get(2) == i || vowelLetters.get(3) == i || vowelLetters.get(4) == i || vowelLetters.get(5) == i){
      numberOfVowels ++
    }
  }
  return `The number of vowels in your input is: ${numberOfVowels}`;
}
console.log(countVowels("My name is itskillscenter"))




                                         //  ALGORITHM CHALLENGE 16-12-2022

/*
20. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8
*/

function numberConversion(num){
  let evenNums = "";
  if(typeof num == "number"){
    let newNum = num.toString();

    for(let i = 0; i < newNum.length; i++){
    if(newNum[i] % 2 == 0 && newNum[i+1] % 2 == 0){
      evenNums += newNum[i] + "-"
    } else {
      evenNums += newNum[i]
    }
  }
} else {
  for(let j = 0; j < num.length; j++){
    if(num[j] % 2 == 0 && num[j+1] % 2 == 0){
      evenNums += num[j] + "-"
    } else {
      evenNums += num[j]
    }
  }
 
  
}
return evenNums
}
  
console.log(numberConversion(534477))

/*
21. Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present 
in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument.

*/

















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

// function factorial(n){
//   let value = 1;
//   for(let i = 1; i <= n; i++){
//     console.log(i, "amen")
//     value *= i;
//   }
//   return value;
// }
// console.log(factorial(5))



// function solution(N) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     // Set the string result
//     let result = "";
//     // Check the validation for min and max
//     if (N >= 1 && N <= 100) {
//       for (var i = 0; i < N; i++) {
//         let rows = N - 1;
//         if (i < rows) {
//           result += "L" + "\n";
//         } else {
//           for (let j = 0; j < N; j++) {
//             result += " " + "L";
//           }
//         }
//       }
//     }

//     return result;
//   }
//   console.log(solution(7));


