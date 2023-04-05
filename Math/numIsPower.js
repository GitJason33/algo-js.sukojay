// goal is to find if a number is powered in a specific base
// difficulty: easy
let n = 16;
let base = 2;

const isPower = (number, base) => {
  let i = number;

  // keep dividing the number by the base until it's 1 or below
  while(i > 1)
    i /= base;
  
  // if final division gave 1, means that the number is indeed in this base
  return i === 1 ? true : false;
}

console.log(`is ${n} a power of ${base}? ` + isPower(n, base));


// a similar function but returns the exponent of the number (-1 if not)
// difficulty: 1

function whatPower(number, base){
  let i = number;
  let exponent = 0;

  while(i > 1){
    i /= base;
    exponent++;
  }
  
  // -1 means it's not a power 
  return i === 1 ? exponent : -1;
}
console.log(`on what power is ${n} for ${base}? ` + whatPower(n, base));
