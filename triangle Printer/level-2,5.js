// goal is to draw other types of triangles, and form shapes using triangles
// difficulty: medium, medium +

let n = 3;
// console.log(isoTriangle(n));
console.log(mixedIsoTriangle(n));

/* isocel triangle
    *
   * *
  * * *
 * * * *
* * * * *      */
function isoTriangle(num, symbol = "*"){
  let output = "";

  // it is to the same code used for triangle in level-2, but instead of 2 spaces, only 1 " "
  for(let row = 1; row <= num; row++){
    for(let spaces = num; spaces > row; spaces--)
      output += " ";
    
    for(let stars = 1; stars <= row; stars++)
      output += symbol + " ";

    output += "\n";
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
function mixedIsoTriangle(num, symbol = "*"){
  let output = "";
  // first draw reverse isocel triangle descending till 1 row less than 'num'
  for(let row = 1; row <= num-1; row++){
    for(let spaces = 1; spaces < row; spaces++)
      output += " ";
    
    for(let stars = row; stars <= num; stars++)
      output += symbol + " ";

    output+= "\n";
  }
  // finally draw the isoTriangle
  output += isoTriangle(num, symbol);
  return output;
}