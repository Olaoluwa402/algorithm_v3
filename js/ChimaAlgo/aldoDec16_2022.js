
/*


20. Write a JavaScript program which accept a number as input and insert dashes 
(-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

21. Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present 
in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument.

*/


let insertDash = (numbers)=>{
    let newArray = []
    let originalArray = numbers.split('')
  
 for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2 == 0){
        newArray.push('1')
    }
    else{
        newArray.push('0')
    }
    }
for(let j=0; j<newArray.length; j++){
    if(newArray[j] == 1 && newArray[j+1] == 1){
        //colors.splice(2, 0, 'purple');
       newArray.splice(j+1, 0, '-');
       // console.log(newArray[j])
        originalArray.splice(j+1, 0, '-');
    }

}
//  console.log(newArray)
//  console.log(originalArray)
 return originalArray.join('')
}
console.log(insertDash("0254688883"))

