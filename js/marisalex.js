/*
    Integer Reversal
    Given an integer, reverse the order of the digits

    reverseInteger(123) => 321
    reverseInteger(46923) => 32964



    
/*16.
        Perform a search and replace on the sentence using the arguments provided and return the new sentence.

        First argument is the sentence to perform the search and replace on.

        Second argument is the word that you will be replacing (before).

        Third argument is what you will be replacing the second argument with (after).

        Note: Preserve the case of the first character in the original word when you are replacing it. 
        For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

        Template:
        myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

        /*
19.
  Function count Vowels:
  Given a string of words or phrases, count the number of vowels.
*/
//set initial count to 0

const string = "The Lazy brown dog jumped over the fence"

function countVowel(string){
  let vowelCount = 0

for(
    let i=0; i < string.length; i++
){
    if (string[i] == "a"|| string[i] == "e" ||string[i] == "i"||string[i] == "o"|| string[i] == "u"){
      vowelCount++;
      
    }
    
}
   return vowelCount;
}

console.log(countVowel(string));

//20. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

function insertDashes() {
  let number = "025468"
  let result = ""

  for (let i = 0; i < number.length; i++) {
    let char = number[i];

    if (char % 2 === 0) {
      result += "-";
    }

    result += char;
  }
  return result;

}
console.log(insertDashes())
