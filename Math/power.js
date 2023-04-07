// goal is to calculate the power of a number using an algorithm, built in functions are restricted
// difficulty: easy

let base = -5;
let exponent = -2;
console.log(`${base}^${exponent} = ${power(base, exponent)}`);


function power (base, exponent) {
  if(base === 1) return 1;
  if(base === 0) return 0;

  let result = 1;
  for(let i = 0; i < Math.abs(exponent); i++)
    result *= base;
  
  // check if exponent is negative, that will go backwards: -2^-2 = -1/4
  if(exponent < 0){
    if(exponent === -1) return 1/base;
    else if(base < 0) return -1/result;
    else return 1/result;
  }
  return result;
}
