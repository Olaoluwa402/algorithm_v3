/* 
        5. Create a function that takes a number as an argument, increments the number by 
        1 and return the result. Example addition(0) => 1, addition(4) => 5
    */

let addition = (num) => (num += 1)
console.log(addition(3))

/* 
       6. Create a function that takes voltage and current and returns the 
        calculated power. Example circuitPower(230, 10) => 2300
*/

function circuitPower(voltage, current) {
  return (power = voltage * current)
}

console.log(circuitPower(230, 10))
