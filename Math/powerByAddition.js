// goal is to find the power of a base, but multiplication is restricted
// difficulty: easy +

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
let base = 2;
let exponent = 4;

const power = (base, exponent = base)=> {
  // you have to define this manually as result starts at 0 not 1
  if(exponent === 0 || base === 1) return 1;
  if(base === 0) return 0;

  let result = 0;
  let term = base;

  // the whole thing is exponent-1 times
  for(let i = 0; i < exponent-1; i++){

    // each term calculation is base times
    for(let j = 0; j < base; j++)
      result += term;

    // assign the result to the term 'after' performing the addition
    term = result;
  }
  return result;
}