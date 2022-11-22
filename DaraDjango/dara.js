
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
        function check(x){
            if(x%2==0){
                return true;
            }
            else{
               return false;
            }
        }
            console.log(check(60))
            
    

        // }

        another solution to NO 4
        function evemCheck(num){
            return num%2==0? true:false;
        
        }
        cpmsole.log(evenCheck(3));
        

        
/* 
        5. Create a function that takes a number as an argument, increments the number by 
        1 and return the result. Example addition(0) => 1, addition(4) => 5
    */
   let count;
   function num(x){
    
    count= x+1 ;
    return count;

   }
   console.log(num(5));

/* 
       6. Create a function that takes voltage and current and returns the 
        calculated power. Example circuitPower(230, 10) => 2300
    */

        function pow(x,y){
            z=x*y
            return(z);
            }
            

        
        console.log(pow(20,30));
