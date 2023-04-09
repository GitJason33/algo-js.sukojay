// goal is to draw triangles like level-1, but instead of starting left, start right side.
// difficulty: medium, medium +

let num = 5;
// console.log(triangle(5));
// console.log(reverseTriangle(5));
console.log(mixedTriangle(5));

/* rectangular triangle
        *
      * *
    * * *
  * * * *
* * * * *     */
function triangle(num, symbol = "*"){
  let output = "";

  // as always, we work row by row. here ascendingly
  for(let row = 1; row <= num; row++){

    // starting with spaces, as they lead before the symbols
    // first count spaces. notice they start 1 step lower than 'num' descending to 'row' as a limit.
    for(let spaces = num; spaces > row; spaces--)
      output += "  ";
    
    // now, draw symbols normally like level-1
    for(let stars = 1; stars <= row; stars++)
      output += symbol + " ";

    // then jump 1 line at the end of each row
    output += "\n";
  }
  return output;
}

/* reverse rectangular triangle
* * * * *
  * * * *
    * * *
      * *
        *      */
function reverseTriangle(num, symbol = "*"){
  let output = "";

  // working row by row descending
  for(let row = 1; row <= num; row++){

    // starting with spaces like above
    // notice they start from 1 ascending to 1 step lower than 'row'.
    for(let spaces = 1; spaces < row; spaces++)
      output += "  ";
    
    // draw symbols starting from 'row' till 'num' to avoid deformation
    for(let stars = row; stars <= num; stars++)
      output += symbol + " ";

    output+= "\n";
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
  // very similar to the make of level-1 mixed version, but using the above ones
  let output = reverseTriangle(num, symbol);

  // now draw the other triangle using the triangle() code, starting from row 2 not 1
  for(let row = 2; row <= num; row++){
    for(let spaces = num; spaces > row; spaces--)
      output += "  ";

    for(let stars = 1; stars <= row; stars++)
      output += symbol + " ";

    output += "\n";
  }
  return output;
}