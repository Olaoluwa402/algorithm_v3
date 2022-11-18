/*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
    */
   (
    (min)=>{
        const k = 60
        console.log(min*k)
    }
   )(3)

   /*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */
   
    let value = (number)=>{
        let value = (number%2 == 0)?"True":"False"
        console.log(value)
    }
    value(6)

