/*
20. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8
*/
function evenDash(number) {
  const numberArray = number.toString().split("");
  let result = [];
  numberArray.forEach((num) => {
    num = Number(num);
    if (num % 2 === 0) {
      result.push(-num);
      //   console.log(-num)
    } else {
      result.push(num);
    }
  });

  return result.join("");
}
let resultDash = evenDash(025468);
console.log(resultDash);

/*
21. Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present 
in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument.

*/

function checkObject(obj, objCheck) {
  const keys = Object.keys(objCheck);

  let obj = [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ];

  const objCheck = { first: "Mercutio", last: null };

  return obj.filter((item) => {
    for (let i = 0; i < keys.length; i++) {
      // console.log(item[keys[i]] == objCheck[keys[i]]);
      if (
        !item.hasOwnProperty(keys[i]) ||
        item[keys[i]] !== objCheck[keys[i]]
      ) {
        console.log("false");
        return false;
      } else {
        console.log("true");
        return true;
      }
    }
  });
  // if (obj.hasOwnProperty(objCheck)) {
  //   console.log("ji");
  // }
}

console.log(checkObject(obj, objCheck));
