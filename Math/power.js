// goal is to calculate the power of a number using an algorithm, built in functions are restricted
// difficulty: 1

let base = 5;
let exponent = 8;

const power = (base, exponent = base) => {
  let result = 1;
  for(let i = 1; i <= exponent; i++)
    result *= base;
  return result;
}
console.log(`${base}^${exponent} = ${power(base, exponent)}`);
console.log(`${base}^${base} = ${power(base)}`);
