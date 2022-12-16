// const numbers = [1,2,3,4,5]
// console.log(numbers.slice())
// console.log(numbers.slice(0))
// console.log(numbers.slice(0, numbers.length))
// console.log(numbers.slice(1,4))
// console.log(numbers.slice(2,4))
// console.log(numbers.slice(2,6))


// //splice
// const num = [1,2,3,4,5]
// num.splice()
// console.log(num)
// //splice 2
// const num1 = [1,2,3,4,5,6]
// num1.splice(0,1)
// console.log(num1)

// //splice 3
// const num2 = [1,2,3,4,5,6,7]
// num2.splice(3,3,7,8,9)
// console.log(num2.splice(3,3,7,8,9))



// //splice 4
// let num2 = [1,2,3,4,5,6]
// const resNum = num2.splice(3,3,7,8,9)

// console.log((num2, "numbers"));
// console.log((resNum, "resNum"));

// push

//let data = [2,3,4,5,7,1];
const nums = [1, 3, 1, 6, 4, 50, 7, 13, 11];
 console.log(nums.sort((a, b) => a - b))

// loop

const ad = [
    [1, 2, 3,  ["john", "joe"]],
    [1,7,6, ["dan", "joy"]],
];
for (let i = 0; i < ad.length; i++){ 
 const bnb = ad[i];
 for(j=0; j < bnb.length; j++){
    const alt = bnb[j];
    console.log(alt, "alt");
    const final = [];
    if(Array.isArray(alt)){
        for(let r = 0; r < alt.length; r++){
            final.push(alt[r].toUpperCase());
        }
    }
 }
 console.log(bnb);
}
console.log("nestedForLoop");