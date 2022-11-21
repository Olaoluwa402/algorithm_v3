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
function tempconvert(celsius){
    let Fahrenheit = (celsius * 9/5) + 32;
    return Fahrenheit;
}
console.log(tempconvert(100))    


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
function evenandodd(nums) {
    let even = []
    let odd =[]
    for (let i=0; i<nums.length; i++){
        if(nums[i] % 2==0){
            even.push(nums[i]);
        }
        else{
            odd.push(nums[i])
        }
    }
    return even.concat(odd)
}

console.log(evenandodd([3,1,2,4]))

/*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
        
    1. take in input and cast to number
    2. use formula for minute to seconds convertion
    3. store result in a variable and return the result to the function call
    */
        function convert(minute){
            let seconds = minute * 60
            return seconds;
        }
        console.log(convert(5))
        console.log(convert(3))

/*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */

        function evenAndOdd(num){
            if(num % 2 == 0){
                return true
            }
            else {
                return false
            }
        }
        console.log(evenAndOdd(4))

        function reverseWords(str) {
            // Go for it
            console.log(str)
            newStr = str.split(' ')
            let newWord = []
                    function reverseWords(str) {
            // Go for it
            console.log(str)
            newStr = str.split(' ')
            let newWord = []
            
            newStr.map(char=>{
              newWord.push(char.split('').reverse().join(''))
            })
            return newWord.join(' ')
                        newStr.map(char=>{
              newWord.push(char.split('').reverse().join(''))
            })
            return newWord.join(' ')
            
          }



          }

        //   5. Create a function that takes a number as an argument, increments the number by 
        // 1 and return the result. Example addition(0) => 1, addition(4) => 5

        function increment(num){
            let result = num + 1
            return result
        }
        console.log(increment(10))


    //  6. Create a function that takes voltage and current and returns the 
    //     calculated power. Example circuitPower(230, 10) => 2300

        function voltCurr(c,v){
            let power = c * v
            return power
        }
        console.log(voltCurr(10,10))

        /*
       7. You are counting points for a basketball game, given the amount of 
        2-pointers scored and 3-pointers scored, find the final points for the 
        team and return that value. Examples points(1,1) => 5, points(5,7) => 31
    */

        function basketballPoints(a,b){
        return (a*2) + (b*3)
        }
        console.log(basketballPoints(1,1))
        console.log(basketballPoints(5,7))
/*
    8.  Repeat a given string str (first argument) for num times (second argument). 
      Return an empty string if num is not a positive number. 
      For the purpose of this challenge, do not use the built-in .repeat() method.

      Example:
      repeatStringNumTimes("*", 3) should return the string ***.
       repeatStringNumTimes("abc", 3) should return the string abcabcabc.
  */

       function repeatStringNumTimes(str,num){
       let result = ""
        if (num > 0){
            for(let i=0; i<num; i++){
                 result += str
            }
            return result;
        }
        else{
            return ""
        }
       }
       console.log(repeatStringNumTimes("*", 3))
       console.log(repeatStringNumTimes("ABC", 3))