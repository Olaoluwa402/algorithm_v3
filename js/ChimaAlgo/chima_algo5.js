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

        let sumAll = (array_of_numbers)=>{
            if(array_of_numbers[0] - array_of_numbers[1] <= 0){
                let new_array = [];

            for(let i=0; i <= array_of_numbers[1]; i++){
                new_array.push(i)
            }
            
            // return new_array;
            for(let i=0; i<new_array.length; i++){
               
                new_array = new_array[i]+(i+1)
                console.log(new_array)
            }
            return new_array
            }
        
        }
        console.log(sumAll([1, 4]))