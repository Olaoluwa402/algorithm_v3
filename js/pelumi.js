/*1. The formula to convert from Celsius to Fahrenheit is the
temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Define a variable fahrenheit and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
NOTE; Return the value of the result from the function*/


function celsiusToFahrenheit(celsius){
    return (celsius*9/5) + 32
};
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
console.log(evenIntegersOddIntegers([3,1,2,4]));
