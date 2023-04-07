// goal is to find the power of a base, but multiplication is restricted
// difficulty: medium

/*
to solve, reminder of multiplication: 
base is the number multiplied by itself
exponent is the times this base is multiplied by itself

base^exponent = result

base*base*base*... } exponent times
example: 2^4 = 2*2*2*2 } 4 times

while multiplication is restricted, we have to figure out a second way
see: 
x*y is x+x+x+... } y times
example: 3*5 = 3+3+3+3+3 } 5 times ... analogical enough right?

now to say right, let's get back to base
example: 2^4: 2*2*2*2 } 4 times
let's add up: 
2*2 = 2+2 = 4. base+base+... } base times, huh? the problem is divided here, remember that!
4*2 = 4+4 = 8.
8*2 = 8+8 = 16.
and we finish. but wait, that's not exponent times, that's 'exponent-1' times!

and we can see that each time we finish an addition, we take the result and use
it as a new base each time. we call it a 'term' in an expression. here updating.
*/
let base = -3;
let exponent = -4;

console.log(power(base, exponent));

function power(base, exponent){
  if(base === 0) return 0; // 0 is 0
  // n^1 = n no matter what
  if(exponent === 1) return base;

  // n^0 = 1 no matter what
  if(exponent === 0) return 1;

  let result = 1;
  let term = base;

  // the whole thing is (exponent-1) times
  for(let i = 0; i < Math.abs(exponent)-1; i++){
    // reset the result each time before you go on
    result = 0;

    // each term calculation is base times (base not negative!)
    for(let j = 0; j < Math.abs(base); j++)
      result += term;

    // assign the result to the term 'after' performing the addition
    term = result;
  }
  // check if the exponent is negative, it's a go backwards: 2^-2 = 1/(2^2)
  if(exponent < 0) {
    if(exponent === -1) return -1/result;
    return 1/result;
  }

  // check negativity: if the exponent is even, the sign is opposed
  if(base < 0 && exponent % 2 === 0) return result*-1;
  return result;
}
