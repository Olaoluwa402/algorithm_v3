/*
       7. You are counting points for a basketball game, given the amount of 
        2-pointers scored and 3-pointers scored, find the final points for the 
        team and return that value. Examples points(1,1) => 5, points(5,7) => 31
    */

let points = (two_pointers, three_pointers) => {
    const ponter_2 = 2;
    const ponter_3 = 3;
    return (two_pointers * ponter_2) + (three_pointers * ponter_3)
};
console.log(points(5,7))


/*
    8.  Repeat a given string str (first argument) for num times (second argument). 
      Return an empty string if num is not a positive number. 
      For the purpose of this challenge, do not use the built-in .repeat() method.

      Example:
      repeatStringNumTimes("*", 3) should return the string ***.
       repeatStringNumTimes("abc", 3) should return the string abcabcabc.
  */

       let repeatStringNumTimes = (str,num)=>{
        let new_str = "";
        if(num > 0){
            for(let i = 0; i < num; i++){
                new_str =new_str + str; 
            }
            return new_str;
        }
        else{
            return ""
        }

       }
       console.log(repeatStringNumTimes("abc", 3))
