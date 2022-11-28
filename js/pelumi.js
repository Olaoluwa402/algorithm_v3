/*1. The formula to convert from Celsius to Fahrenheit is the
temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Define a variable fahrenheit and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
NOTE; Return the value of the result from the function*/


function celsiusToFahrenheit(celsius){
    let Fahrenheit = (celsius*9/5) + 32;
    return Fahrenheit;
}
console.log(celsiusToFahrenheit(20));


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


function evenIntegersOddIntegers(nums) {
    let evenIntegers = [];
    let oddIntegers = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]%2 == 0) {
            evenIntegers.push(nums[i]);
        }else {
            oddIntegers.push(nums[i]);
        }
    }
    return evenIntegers.concat(oddIntegers);
}
console.log(evenIntegersOddIntegers([5,1,2,4]));


/*
    3. Write a function that takes in integers in minute and convert it to seconds
    Examples:
    convert(5) => 300
    convert(3) => 180
*/
// Pseudo code - Take in input and cast to number
//              Use formular for minute to seconds conversion
//              Store result in a variable
//              Return the result to the function call

function convert(integer){
    let seconds = integer*60;
    return seconds;
}
console.log(convert(5));
console.log(convert(3));

// or

console.log((function convert(integer){
    let seconds = integer*60;
    return seconds;
})(5));

// or

// (function convert(integer){
//     let seconds = integer*60;
//     return seconds;
// })(5)




/*
    4. Write a function that returns true if a number passed into it is an 
    even number and false if otherwise. 
*/

function integer(number){
    if (number%2 == 0) {
        return true;
    }else{
        return false;
    }
}
console.log(integer(4));
console.log(integer(5));

/* 
    5. Create a function that takes a number as an argument, increments the number by 
    1 and return the result. Example addition(0) => 1, addition(4) => 5
*/
function addition(num) {
    num++
    return num;
}
console.log(addition(0));
console.log(addition(4));

// or
// let addition = (num) => {
//     const toNum = Number(num);
//     toNum += 1;
// }
// console.log(addition(3));
/* 
    6. Create a function that takes voltage and current and returns the 
    calculated power. Example circuitPower(230, 10) => 2300
*/
function circuitPower(voltage, current){
    return voltage*current;
}
console.log(circuitPower(230, 10));

/*
       7. You are counting points for a basketball game, given the amount of 
        2-pointers scored and 3-pointers scored, find the final points for the 
        team and return that value. Examples points(1,1) => 5, points(5,7) => 31
    */
function points(n, m){
    return ((n*2)+(m*3));
}
console.log(points(1,1));
console.log(points(5,7));
/*
    8.  Repeat a given string str (first argument) for num times (second argument). 
      Return an empty string if num is not a positive number. 
      For the purpose of this challenge, do not use the built-in .repeat() method.

      Example:
      repeatStringNumTimes("*", 3) should return the string ***.
       repeatStringNumTimes("abc", 3) should return the string abcabcabc.
  */
function repeatStringNumTimes(str, num){ 
    let repeatStr = ''

    if(num>0){
        for(let i=0; i<num; i++){
            repeatStr +=  str
        }
    }
    
}
console.log(repeatStringNumTimes("*",  3));
console.log(repeatStringNumTimes("abc", 3));

// or

function repeatString(string, times){ 
    let repeatS = ''
    if(times < 0){
        return ""
    } else {
        return repeatS += string
    }
}
console.log(repeatStringNumTimes("pelz",  4));

/*
    9.
        We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
        The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers 
        between 1 and 4 (both inclusive) is 10.

        sumAll([1, 4]) should return 10.

        sumAll([4, 1]) should return 10.

        sumAll([5, 10]) should return 45.

        sumAll([10, 5]) should return 45.
    */ function sumAll(arr){
        let val = 0;
        let min = Math.min(...arr)
        let max = Math.max(...arr)
        for(let i = min; i<=max; i++){
           val += i;
        }
        return val;
    }
    let value = sumAll([10,5])
    console.log("%c" + value, "font-size: 20px; color: blue;")

    function sum(arr){
        let num = 0;
        let a = [...arr]
        if(a[0]>a[a.length-1]){
            for(let i = a[0]; i>=a[a.length-1]; i--){
               num += i;
            }
        } else if(a[0]<a[a.length-1]){
            for(let i = a[0]; i<=a[a.length-1]; i++){
                num += i;
        }
    }
        return num;
    }
    console.log(sum([5,10]))
    console.log(sum([10, 5]))

    // 10. Return the number (count) of vowels in the given string.
    // We will consider a, e, i, o, u as vowels for this question.
    // The input string will only consist of lower case letters and/or spaces.

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
       let sum = 0;
       function isPrime(num){
        for (let i=2; i<num; i++){
            if (num % i == 0 ){
                return false
            }
         }
         return true
       }
         for (let i=2; i<=num; i++){
          if (isPrime(i)){
             sum += i
          }
       }
         return sum;
   }
   console.log(sumPrimes(10));
