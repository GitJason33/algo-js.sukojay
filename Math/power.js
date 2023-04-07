// goal is to calculate the power of a number using an algorithm, built in functions are restricted
// difficulty: easy

let base = -5;
let exponent = 9;

const power = (base, exponent) => {
  let result = 1;
  for(let i = 1; i <= exponent; i++)
    result *= base;
  return result;
}
console.log(`${base}^${exponent} = ${power(base, exponent)}`);
