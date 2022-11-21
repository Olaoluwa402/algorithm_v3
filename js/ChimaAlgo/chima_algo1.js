

//Quesstion 1

let convert = (celsius)=>{
    const k = 9/5;
const k1 = 32;
console.log((celsius * k)+k1)
}
convert(100);

//Question 2

let sort = (array_num)=>{
    let new_array = []
for(let i =0; i<array_num.length;i++){
    if(array_num[i]%2 == 0){
        new_array.push(array_num[i])
    }
}
for(let i =0; i<array_num.length;i++){
    if(array_num[i]%2 != 0){
        new_array.push(array_num[i])
    }
}
console.log(new_array)
}
sort([3,1,2,4])

//QUESTION 2 REPEAT

let sort2 = (array1)=>{
let even_array1 = []
let odd_array2 =[]
for(i=0; i<array1.length;i++){
    if(array1[i]%2 == 0){
        even_array1.push(array1[i])
    }
    else{
        odd_array2.push(array1[i])
    }
}
console.log(even_array1.concat(odd_array2))
}
sort2([3,1,2,4,7,8,6,])