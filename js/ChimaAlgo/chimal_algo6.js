
/* 10
        SUM ALL PRIME:
        A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2
        is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is
        divisible by 1, 2 and 4.

        Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

        sumPrimes(15) should return 17.
        sumPrimes(977) should return 73156.

        note:We only need to check up to the square root because the square root 
        of a number is the largest possible unique divisor.
    */
let sumPrimes = (x)=>{
    let primeArray =[];
    let secondPrimeArray=[];
    let thirdPrimeArray=[];
    for(let i=2;i<=x; i++){
    primeArray.push(i)
    }
    for(let i = 0; i<primeArray.length; i++){
        let k = 2;
        if(primeArray[i] % k != 0){
            secondPrimeArray.push(primeArray[i])
        }
    }
    for(let i = 0; i<secondPrimeArray.length; i++){
        let newv = Math.sqrt(secondPrimeArray[i] )
        let newv2 = secondPrimeArray[i+5] % 5 
        if( /[\.]/.test(String(newv)) === true || newv2 == 0)
        {
            thirdPrimeArray.push(secondPrimeArray[i])
        }
    }
    thirdPrimeArray.unshift(2)
    let finalValue = 0
    for(let i=0; i < thirdPrimeArray.length; i++){
        finalValue += thirdPrimeArray[i]
    }

console.log(finalValue)
}
//wrong wrong wrong
// console.log(sumPrimes(10))
sumPrimes(977)