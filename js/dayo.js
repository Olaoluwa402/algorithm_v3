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
(function convert(celsius){
    let Fahrenheit = celsius * (9/5) + 32;
    return Fahrenheit;
})(30)

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






