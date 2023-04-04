// goal is to calculate the factorial of a number using an algorithm, not built in functions
// difficulty: 0.5

let n = 9;

const factorial = (number) => {
  let result = 1; 
  for(let i = 2; i <= number; i++)
    result *= i;
  return result;
}
console.log(n + "! = " + factorial(n));