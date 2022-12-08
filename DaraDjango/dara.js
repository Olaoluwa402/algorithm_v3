
// Bootcamp Algorithm challenge/solutions - itskills 2022

    /*    3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
    */
    // 1Take input and cast to nummber.
    // 2.use formula for minutes conversion
    // 3.store result

        //x=prompt(x)
        // function sec(x){
          
        //   console.log(x * 60);
        // }
        // sec(3);

/*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */
        // function check(x){
        //     if(x%2==0){
        //         return true;
        //     }
        //     else{
        //        return false;
        //     }
        // }
        //     console.log(check(60))
            
    

        // }

        // another solution to NO 4
        // function evemCheck(num){
        //     return num%2==0? true:false;
        
        // }
        // cpmsole.log(evenCheck(3));
        

        
/* 
        5. Create a function that takes a number as an argument, increments the number by 
        1 and return the result. Example addition(0) => 1, addition(4) => 5
    */
//    let count;
//    function num(x){
    
//     count= x+1 ;
//     return count;

//    }
//    console.log(num(5));

/* 
       6. Create a function that takes voltage and current and returns the 
        calculated power. Example circuitPower(230, 10) => 2300
    */

        // function pow(x,y){
        //     z=x*y
        //     return(z);
        //     }
            

        
        // console.log(pow(20,30));

        // 15.
        // Integer Reversal
        // Given an integer, reverse the order of the digits
    
        // reverseInteger(123) => 321
        // reverseInteger(46923) => 32964
        


        function rev (num){
            //convert num to string to toString
            //convert to array with split
            //reverse the array
            //join the reversed array

            strng=num.toString().reverse()
            return strng
            

        }console.log(rev(12376465875))








    // 16.
    //         Perform a search and replace on the sentence using the arguments provided and return the new sentence.
    
    //         First argument is the sentence to perform the search and replace on.
    
    //         Second argument is the word that you will be replacing (before).
    
    //         Third argument is what you will be replacing the second argument with (after).
    
    //         Note: Preserve the case of the first character in the original word when you are replacing it. 
    //         For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
    
    //         Template:
    //         myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
    
    //         myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
    
    //         myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
    // */
    
    // function repl(x){
    //     x.search()

    // }

    console.log(new Date)
       