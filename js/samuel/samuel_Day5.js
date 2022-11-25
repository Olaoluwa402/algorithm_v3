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
  // 1. Declare a variable to first hold the SUM of the array, initialize to zero
  let givenArraySum = 0
  for (let num of arr) {
    givenArraySum += num
  }
  // 2. Check for the MAXIMUM and MINIMUM values in the array
  let minNum = Math.min(...arr)
  let maxNum = Math.max(...arr)

  // 3. Declare an EMPTY array to hold the values between the MIN VALUE and MAX and the populate the array
  let numbersBetween = []

  for (let i = minNum + 1; i < maxNum; i++) {
    numbersBetween.push(i)
  }

  //   4. Add the values in the array of numbers between the MIN and MAX and store in a variable
  let numbersBetweenSum = 0

  for (number of numbersBetween) {
    numbersBetweenSum += number
  }
  //   5. Return the sum of the given array and the sum of the numbers between

  return givenArraySum + numbersBetweenSum
}
console.log(sumAll([10, 5]))
