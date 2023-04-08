// goal is to draw a rectangular triangle in 2 ways, and then combine them
// difficulty: easy

let n = 5;
console.log(triangle(n));
/*
*
* *
* * *
* * * *
* * * * *     */
function triangle(num, symbol = "*"){
  // num is the number of lines to be drawn
  let output = "";

  for(let row = 1; row <= num; row++){
    // stars increases depending on which row we are on
    for(let stars = 1; stars <= row; stars++)
      output += symbol + " ";
    
    // jump 1 line after finishing 1 row
    output += '\n';
  } 
  return output;
}