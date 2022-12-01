/*  13.
Write a function that takes a number and returns the perimeter of either a circle or a square. 
The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, 
and the number will be the side of the square or the radius of the circle.

perimeter("s", 7) ➞ 28
perimeter("c", 4) ➞ 25.12
perimeter("c", 9) ➞ 56.52

*/

const perimeter = function (l, num) {
  // Check if the letter is a square or a circle
  if (l === 's') {
    // The perimeter of a square is => num + num + num + num = 4*num
    return `Perimeter of Square = ${4 * num}`
  } else if (l === 'c') {
    // The perimeter of a circle => 2*pi*r
    // return 2 * Math.PI * num

    return `Perimeter of Circle = ${2 * 3.14 * num}`
  }
}
console.log(perimeter('c', 9))

/*
14.
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

    * If the number is negative, return the related ancestor.
    * If positive, return the related descendant.
    * You are generation 0. In the case of 0 (male or female), return "me!".
    
generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter"
 */

let generation = (x, y) => {
  if (x == 0 && (y == 'f' || (y = 'm'))) {
    return 'ME'
  } else if (x == 1 && y == 'f') {
    return 'DAUGHTER'
  } else if (x == 1 && y == 'm') {
    return 'SON'
  } else if (x == -1 && y == 'f') {
    return 'MOTHER'
  } else if (x == -1 && y == 'm') {
    return 'FATHER'
  } else if (x == -2 && y == 'f') {
    return 'GRANDMOTHER'
  } else if (x == -2 && y == 'm') {
    return 'GRANDFATHER'
  } else if (x == -3 && y == 'f') {
    return 'GREAT GRANDMOTHER'
  } else if (x == -3 && y == 'm') {
    return 'GREAT GRANDFATHER'
  } else {
    return 'ANCESTORS'
  }
}
console.log(generation(6, 'f'))

let generation1 = (x, y) => {
    return (x == 0 && (y == 'f' || (y = 'm')))? 'Me': (x == 1 && y == 'f')?'Daughter':(x == 1 && y == 'm')?'Son':(x == -1 && y == 'f')?'Mother':(x == -1 && y == 'm')?'Father':(x == -2 && y == 'f')?'GrandMother':(x == -2 && y == 'm')?'Grand Father':(x == -3 && y == 'f')?'Great Grandmother':(x == -3 && y == 'm')?'Great Grandfather':'Ancestors'
    
  }
  console.log(generation(1, 'f'))