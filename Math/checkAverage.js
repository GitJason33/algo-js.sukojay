// goal is to check if any of the 3 numbers is equal to the average of other 2
// difficulty: very easy

let a = 6;
let b = 9; 
let c = 12;

// average = (a+b)/coefficient
// coefficient is the amount of numbers in numerator, here 2 numbers
function checkAverage(a, b, c){
  if((a+b)/2 === c) 
    console.log(`${c} is the average of ${a} and ${b}`);
  
  else if((a+c)/2 === b) 
    console.log(`${b} is the average of ${a} and ${c}`);

  else if((b+c)/2 === a)
    console.log(`${a} is the average of ${b} and ${c}`);

  else 
    console.log('non is average of any');
}
checkAverage(a, b, c);