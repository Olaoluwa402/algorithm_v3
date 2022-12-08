// Bootcamp Algorithm challenge/solutions - itskills 2022

/*    3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
    */

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

/*
       7. You are counting points for a basketball game, given the amount of 
        2-pointers scored and 3-pointers scored, find the final points for the 
        team and return that value. Examples points(1,1) => 5, points(5,7) => 31
    */
// <---I DID THIS MYSELF ----->

// function point(x,y){
//     let twoPointers=2*x;
//     let threePointers=3*y;
//     let teamTotal=twoPointers + threePointers

//     return(teamTotal)
// }
// console.log(point(6,8));

// function Points(x,y){
//     let p=(2*x) + (3*y)
//     return(p)
// }
// console.log(Points(5,8))
/*
    8.  Repeat a given string str (first argument) for num times (second argument). 
      Return an empty string if num is not a positive number. 
      For the purpose of this challenge, do not use the built-in .repeat() method.

      Example:
      repeatStringNumTimes("*", 3) should return the string ***.
       repeatStringNumTimes("abc", 3) should return the string abcabcabc.
  */
//     let stng=("");
//    function stringRepeat(x,num){
//     if(num<0){
//         repeat=stng;
//     }
//     else{
//         repeat=x*num
//     }
//     return(repeat);

//    }
//    console.log(stringRepeat("dara",4));

// let y="dara" * 4;
// console.log (y);

// <<------THIS IS S CLASS CORRRECTION------>

// let stringRepeat=(str,num)=>{
//     let new_str=("");
//     if (num >0){
//         for (let i=0; i<num; i++){
//             new_str=new_str +str;
//         }
//         return new_str;
//     }else {
//         return("")
//     }
// }
// console.log(stringRepeat("abc", 6));

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
    */

//    function sumPrimes(x){
//     let sum=0;
//     // we loop through from 2 num
//     function isPrime(x){
//         for (let num=2; num<=x-1; num++){
//             return (num);

//         // if (x>1 && x%num!==0){
//         //     return x;
//         }

//         }
//         isPrime(5);

//    }
//    console.log(sumPrimes(40));

//     sumPrimes(7);

// 28/11/2022

//      11.
//   A tetrahedron is a pyramid with a triangular base and three sides.
//   A tetrahedral number is a number of items within a tetrahedron.
//   Create a function that takes an integer n and returns the nth tetrahedral number.

//   Hint :
//   tetra(2) ➞ 4
//   tetra(5) ➞ 35
//   tetra(6) ➞ 56

// function tetra(n){
//    tetraNum=((n)*(n+1)*(n+2))/6
//    return tetraNum;

// }
// console.log(tetra(8),("yes"));

// 12. Write a function redundant that takes in a string str and returns a function that returns str.
//   const f1 = redundant("apple")
//   f1() ➞ "apple"
//   const f2 = redundant("pear")
//   f2() ➞ "pear"
//   const f3 = redundant("")
//   f3() ➞ ""

/*

        function redundant(str){
            return(function tai(str){
                return str
            })
        }
        console.log (redundant("folake"))
        */

// solution 1

// function redundant(str) {
//   return (() => {
//     return str;
//   })();
// }

// // console.log (redundant("folake")

// // sollution 2
// function redundant(str) {
//   return function f1() {
//     return str;
//   };
// }

// const result = redundant("folake");
// console.log(result());

/*  13.
Write a function that takes a number and returns the perimeter of either a circle or a square. 
The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, 
and the number will be the side of the square or the radius of the circle.

perimeter("s", 7) ➞ 28
perimeter("c", 4) ➞ 25.12
perimeter("c", 9) ➞ 56.52*/



function periM(l,num){
    if (l==="c"){
        p=2* 3.142 * num 
        return p
    }
    else if(l==="s"){
        p=4*num
        return p
    }

}
console.log(periM("s",7))



14.
/*Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

    * If the number is negative, return the related ancestor.
    * If positive, return the related descendant.
    * You are generation 0. In the case of 0 (male or female), return "me!".
    
generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter"
 */


function famTree(x,y){
    if ( x==0 ){
        return ("ME")
    }
    else if(x==1 && y=="m"){
        return ("son")
    }else if(x==1 && y=="f"){
        return ("daughter")
    }else if(x==2 && y=="m"){
        return ("Grandson")
    }else if(x==2 && y=="f"){
        return ("GrandDaughter")
    }else if(x==3 && y=="m"){
        return ("GreatGrandson")
    }else if(x==3 && y=="f"){
        return ("GreatGrandDaughter")
    }else if(x>3){
        return ("Descendant")
    }else if(x==-1 && y=="m"){
        return ("Father")
    }else if(x==-1 && y=="f"){
        return ("Mother")
    }else if(x==-2 && y=="m"){
        return ("Grandfather")
    }else if(x==-2 && y=="f"){
        return ("GrandMother")
    }else if(x==-3 && y=="m"){
        return ("GreatGrandFather")
    }else if(x==-3 && y=="f"){
        return ("GreatGrandMother")
    }else if(x<-3){
        return ("Ancestor")
    }else{
        return("input a valid decendant format")
    }

}
console.log(famTree(1,"f"))
console.log("attempt to commit")
