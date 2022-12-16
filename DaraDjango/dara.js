// Bootcamp Algorithm challenge/solutions - itskills 2022

/*    3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
    */
// 1Take input and cast to nummber.
// 2.use formula for minutes conversion
// 3.store result

//x=prompt(x)
// function sec(x){

//   console.log(x * 60);
// }
// sec(3);

/*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */
// function check(x){
//     if(x%2==0){
//         return true;
//     }
//     else{
//        return false;
//     }
// }
//     console.log(check(60))

// }

// another solution to NO 4
// function evemCheck(num){
//     return num%2==0? true:false;

// }
// cpmsole.log(evenCheck(3));

/* 
        5. Create a function that takes a number as an argument, increments the number by 
        1 and return the result. Example addition(0) => 1, addition(4) => 5
    */
//    let count;
//    function num(x){

//     count= x+1 ;
//     return count;

//    }
//    console.log(num(5));

/* 
       6. Create a function that takes voltage and current and returns the 
        calculated power. Example circuitPower(230, 10) => 2300
    */

// function pow(x,y){
//     z=x*y
//     return(z);
//     }

// console.log(pow(20,30));

// 15.
// Integer Reversal
// Given an integer, reverse the order of the digits

// reverseInteger(123) => 321
// reverseInteger(46923) => 32964

// function rev (num){
//     //convert num to string to toString
//     //convert to array with split
//     //reverse the array
//     //join the reversed array

//     strng=num.toString().reverse()
//     return strng

// }console.log(rev(12376465875))

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

// function repl(x){
//     x.search()

// }

18;
//         Write a function that takes two or more arrays and returns a new array of unique values in the     order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

//         The unique numbers should be sorted by their original order, but the final array
//         should not be sorted in numerical order.

//    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
//    uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
//    uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]
//     */

// let a = [1, 2, 3, 4, 5, 6];
// let b = [7, 8, 9, 0];
// let c = [5, 4, 5, 6, 4, 45];
// let d = [6, 4, 5, 65, 7, 4, 3];
// let h = [];

// function connect(a, b, c, d) {
//   let g = a.concat(b, c, d);
//   for (let i = 0; i <= g.length - 1; i++) {
//     if (!h.includes(g[i])) {
//       h.push(g[i]);
//     }
//   }
//   return h;
// }
// console.log(connect(a, b, c, d));

let h = [];
function connect(...values) {
  let g = [...values].flat();
  console.log(g, "g");
  for (let i = 0; i < g.length; i++) {
    if (h.includes(g[i])) {
    } else {
      h.push(g[i]);
    }
  }
  return h;
}
console.log(connect([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

/*
19.
  Function count Vowels:
  Given a string of words or phrases, count the number of vowels.
*/

// let count;
// let v="aeiou"
// function vowelCount(phrases){
//     for (let i=0; i<phrases.length ;i++){

//         if(v.includes(phrases(i))){
//            let y= count++;
//         }

//     }return y
// }console.log(vowelCount("tolani is a girl"))

let y = [];
function vowelCount(phrases) {
  phrases = phrases.toLowerCase();
  for (let i = 0; i < phrases.length; i++) {
    if ("aeiou".includes(phrases[i])) {
      y.push(phrases[i]);
    }
  }
  return y.length;
}
console.log(vowelCount("tolani is a girl"));
