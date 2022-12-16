/*
19.
  Function count Vowels:
  Given a string of words or phrases, count the number of vowels.
*/
function Count_Vowel(str){
    return str.replace(/[^aeiou]/gi, "").length;
}
console.log(Count_Vowel("Irresponsible Attitude"));



// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}

// take input
const result = countVowel(" The example of the vowel counting is done here");

console.log(result);