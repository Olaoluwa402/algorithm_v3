/*  13.
Write a function that takes a number and returns the perimeter of either a circle or a square. 
The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, 
and the number will be the side of the square or the radius of the circle.

perimeter("s", 7) ➞ 28
perimeter("c", 4) ➞ 25.12
perimeter("c", 9) ➞ 56.52*/

let perimeter=(shape,sides)=>{
    return (shape == "s")?4*sides:(shape == "c")?2*3.142*sides:false
}
console.log(perimeter("c", 9))



/*14.
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

    * If the number is negative, return the related ancestor.
    * If positive, return the related descendant.
    * You are generation 0. In the case of 0 (male or female), return "me!".
    
generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter"
 */

let generation = (gen,gender)=>{
// let g = [{1:"grandson",gender},{2:"granddaughter"}]
let g = {
    '1':['son', 'daughter'],
    '2':['grandson', 'grand daughter'],
    '3':['great grandson', 'great grand daughter'],
    '0':['male me','female me'],
    '-1':['father', 'mother'],
    '-2':['grandfather', 'grandmother'],
    '-3':['great grandfather', 'great grandmother']
}
// return (gender==="m")?g[gen][0]:(gender==="f")?g[gen][1]:"not a gender"
 return (gender==="m" && gen > -4 && gen < 4)?g[gen][0]:(gender==="f" && gen > -4 && gen < 4)?g[gen][1]:"out of scope"
}


console.log(generation(0, "m"))