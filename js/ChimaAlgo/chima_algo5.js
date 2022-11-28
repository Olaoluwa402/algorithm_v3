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

        let sumAll=(array)=>{
            let minValue = Math.min(...array)
            let maxValue = Math.max(...array)
            initialValue = 0;

            for(let i = minValue; i <= maxValue; i++){
                initialValue += i
            }
            return initialValue;
        }
 console.log(sumAll([1, 4]))

 let sumAll1 = (array)=>{
    let newArray = array.sort((a,b)=>a-b)
    let minValue = newArray[0]
    let MaxValue = newArray[1]

    initialValue1 = 0
    for(let i= minValue; i <= MaxValue; i++){
        initialValue1 += i;
    }
return initialValue1
 }
 console.log(sumAll1([1, 4]))