// goal is to draw a rectangular triangle in 2 ways, and then combine them
// difficulty: easy, easy +

let n = 7;
// console.log(triangle(n));
// console.log(reverseTriangle(n, "#"));
// console.log(mixedTriangle(n));

/* rectangular triangle
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

/* reverse rectangular triangle 
* * * * *
* * * *
* * *
* *
*       */
function reverseTriangle(num, symbol = "*"){
  // this time, symbols goes descending while rows go on
  let output = "";
  
  for(let row = 1; row <= num; row++){
    // stars decrease depending on the row we are on
    for(let stars = row; stars <= num; stars++)
      output += symbol + " ";
    
    // jump 1 line after finishing 1 row
    output += '\n';
  }
  return output;
}

/* mixed rectangular triangle 
* * * * *
* * * *
* * *
* *
*
* *
* * *
* * * *
* * * * *       */
function mixedTriangle(num, symbol = "*"){
  // draw the reverse one first
  let output = reverseTriangle(num, symbol);

  // now same as triangle() but start from row 2 not 1 to avoid redundunt 1-star at middle
  for(let row = 2; row <= num; row++){
    for(let stars = 1; stars <= row; stars++)
      output += symbol + " ";
    
    output += '\n';
  } 
  return output;
}

export { triangle, reverseTriangle };