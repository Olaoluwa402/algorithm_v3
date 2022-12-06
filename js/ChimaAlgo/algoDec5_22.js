// 15.
//     Integer Reversal
//     Given an integer, reverse the order of the digits

//     reverseInteger(123) => 321
//     reverseInteger(46923) => 32964

let reverseInteger = (digits) => {
  return Number(digits.toString().split("").reverse().join(""));
};
console.log(reverseInteger(46923));

// 16.
//         Perform a search and replace on the sentence using the arguments provided and return the new sentence.

//         First argument is the sentence to perform the search and replace on.

//         Second argument is the word that you will be replacing (before).

//         Third argument is what you will be replacing the second argument with (after).

//         Note: Preserve the case of the first character in the original word when you are replacing it.
//         For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

//         Template:
//         myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

//         myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.

//         myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
// */

let myReplace = (sentence, original, replaceWith) => {
  let realAlphabet = checkCase(original, replaceWith);
  return sentence.replace(original, realAlphabet);
};

let checkCase = (alphabet1, alphabet2) => {
  if (alphabet1[0].toUpperCase() + alphabet1.slice(1) === alphabet1) {
    return alphabet2[0].toUpperCase() + alphabet2.slice(1);
  } else {
    return alphabet2[0].toLowerCase() + alphabet2.slice(1);
  }
};

console.log(checkCase("up", "Down"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
