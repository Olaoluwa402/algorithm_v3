/*19.
  Function count Vowels:
  Given a string of words or phrases, count the number of vowels.
*/
let countVowels = (phrase)=>{
    let vowelArray = []
    for(let i=0; i < phrase.length; i++){
        if(phrase[i] == "a" || phrase[i] == "e" || phrase[i] == "i" || phrase[i] == "o" || phrase[i] == "u"){
            vowelArray.push(phrase[i])
        }
    }
    return `the number of vowels in the phrase is ${vowelArray.length}`
}
console.log(countVowels("my name is faraday"))
//solution 2

let countVowels2 = (phrase)=>{
    let vowelArray = []
    let myVowels="aeiou"
    for(let i=0; i < phrase.length; i++){
        if(myVowels.includes(phrase[i])){
            vowelArray.push(phrase[i])
        }
    }
    return `the number of vowels in the phrase is ${vowelArray.length}`
}


console.log(countVowels2("my name is faraday"))

//solution


let countVowels3 = (phrase)=>{
    let vowelArray = []
    let myVowels="aeiou"
    for(let i=0; i < myVowels.length; i++){
   for(let j=0; j<phrase.length; j++){
    if(myVowels[i] == phrase[j]){
        vowelArray.push(phrase[j])
    }
   }
    }
    return `the number of vowels in the phrase is ${vowelArray.length}`
}


console.log(countVowels3("my name is faraday"))
