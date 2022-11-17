

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
