/*
18.
        Write a function that takes two or more arrays and returns a new array of unique values
        in the order of the original provided arrays. In other words, all values present from all 
        arrays should be included in their original order, but with no duplicates in the final array. 
        The unique numbers should be sorted by their original order, but the final array 
        should not be sorted in numerical order.

        uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
        uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
        uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]
    */

function uniteUnique(arr) {
  // console.log(arguments)
  let setValues = new Set(arr);
  console.log(setValues);

  for (let count = 0; count < arguments.length; count++) {
    arguments[count].forEach((item) => {
      //The add() method inserts a new element with a specified value in to a Set object,
      setValues.add(item);
    });
  }
  //The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
  return Array.from(setValues);
}
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

/*
19.
  Function count Vowels:
  Given a string of words or phrases, count the number of vowels.
*/
function VowelsCounter(wordsOrPhrases) {
  let vowels = "aeiou";
  let vowelsArray = vowels.split("");
  let count = 0;

  for (let eachCharacter of wordsOrPhrases) {
    if (vowelsArray.includes(eachCharacter)) count++;
  }
  return count;
}

console.log(VowelsCounter("This is a baby boy"));

// -------------SOLUTION TWO -----------------
// ------------------------------------------
function VowelsCount(wordsOrPhrases) {
  let vowels = "aeiou";
  let vowelsArray = vowels.split("");
  let count = 0;

  for (let x = 0; x < wordsOrPhrases.length; x++) {
    for (let y = 0; y < vowelsArray.length; y++) {
      if (wordsOrPhrases[x] == vowelsArray[y]) {
        count++;
      }
    }
  }
  return count;
}

console.log(VowelsCount("This is a baby boy"));
