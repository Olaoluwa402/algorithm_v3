

/*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
    */

/*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */

        function minuteToSecondsConverter(a){
            return a * 60;
        }
        console.log(minuteToSecondsConverter(5));
        console.log(minuteToSecondsConverter(3));




        function passed(num){
            if (num % 2 ==0){ 
                return true;
            }else{
                return false;
            }

        }
        console.log(passed(5));
        console.log(passed(6));



    //     5. Create a function that takes a number as an argument, increments the number by 
    //     1 and return the result. Example addition(0) => 1, addition(4) => 5
    function addition(num){
        return num + 1;
    }
console.log(addition(0));
console.log(addition(4));



    //    6. Create a function that takes voltage and current and returns the 
    //     calculated power. Example circuitPower(230, 10) => 2300

    function power(voltage, current){
        return voltage * current;
    }
   console.log(power(230, 10));