/*
15.
    Integer Reversal
    Given an integer, reverse the order of the digits

    reverseInteger(123) => 321
    reverseInteger(46923) => 32964
16.
        Perform a search and replace on the sentence using the arguments provided and return the new sentence.

        First argument is the sentence to perform the search and replace on.

        Second argument is the word that you will be replacing (before).

        Third argument is what you will be replacing the second argument with (after).

        Note: Preserve the case of the first character in the original word when you are replacing it. 
        For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

        Template:
        myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

        myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.

        myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
*/

function reverseInteger(n) {
    n = n + "";
    return n.split("").reverse().join("");
    
}
console.log(Number(reverseInteger(123456)));

// 2nd Question
function myPlace(sentence, before, after){
    const index = sentence.indexOf(before);
    console.log(index, "index");
    if(sentence[index][0] === before[0].toUpperCase()){
        after = after[0].toUpperCase() + after.substr(1)
    } else{
        after = after[0].toLowercase() + after.substr(1)
    }
    return sentence.replace(before, after)
}
console.log(myPlace("I think we should look up there", "up", "Down"));

