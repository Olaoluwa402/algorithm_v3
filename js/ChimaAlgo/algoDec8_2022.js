// 18.
//         Write a function that takes two or more arrays and returns a new array of unique values in the     order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

//         The unique numbers should be sorted by their original order, but the final array
//         should not be sorted in numerical order.

//    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
//    uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
//    uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]
//     */
//    function uniteUnique(array1, array2){
//         let theTwoArrays = array1.concat[array2]
//         return theTwoArrays
//    }
//    console.log(uniteUnique([1, 2, 3], [5, 2, 1]))

//    let a = [1,2,3]
//    let b = [4,5,6]

//    console.log(a.concat(b))

//Solution 1
'use strict'
let uniteUnique = (...array) => {return [...new Set([...array].flat())]};
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4]));

// ((...array) => {console.log([...new Set([...array].flat())])})([1, 2, 3], [5, 2, 1, 4])

//Solution 2


  
  //console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));