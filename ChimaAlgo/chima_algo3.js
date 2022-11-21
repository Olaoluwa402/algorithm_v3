/* 
        5. Create a function that takes a number as an argument, increments the number by 
        1 and return the result. Example addition(0) => 1, addition(4) => 5
    */
let incre_num = (number) => {
  number++;
  return number;
};
console.log(incre_num(5));

/* 
       6. Create a function that takes voltage and current and returns the 
        calculated power. Example circuitPower(230, 10) => 2300
    */
let circuitPower = (i, v) => {
  let power = i * v;
  console.log(power);
};
circuitPower(230, 10);
