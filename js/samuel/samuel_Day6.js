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


function sumPrimes(num) {
  // 1.Generate an array of all the numbers less than or equal to num

  let listOfNumbers = []

  for (let i = 1; i <= num; i++) {
    listOfNumbers.push(i)
  }

  // 2.  Function to check if a number is prime
  function checkPrime(number) {
    if (number <= 1) {
      return false
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false
        }
      }
      return true
    }
  }

  // 3. Test the elements of List of Numbers and push prime into a variable
  let primeNumbers = []
  listOfNumbers.forEach((element) => {

    const isElementPrime = checkPrime(element)

    if (isElementPrime) {
      primeNumbers.push(element)
    }
  })
  console.log('The prime numbers = ' + primeNumbers)

  // 4. Sum all the prime Numbers in the array of primeNumbers
  let sumOfPrimeNumbers = 0
  primeNumbers.forEach((primeNum) => {
    sumOfPrimeNumbers += primeNum
  })

  //   5. Return the summation
  return 'The sum of prime = ' + sumOfPrimeNumbers
}

console.log(sumPrimes(10))
    */

function sumPrimes(num) {
  let sum = 0
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      sum += i
    }
  }
  return sum

  function checkPrime(test) {
    for (let i = 2; i < test; i++) {
      if (test % i == 0) {
        return false
      }
    }
    return true
  }
}
console.log(sumPrimes(10))
