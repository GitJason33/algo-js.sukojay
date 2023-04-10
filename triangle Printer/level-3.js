// goal here is to draw even harder shapes which are: infinity-like symbol with crowns
// difficulty: challenging (left: easy, right: medium)

let n = 3; 
console.log(crown(n));
// console.log(reverseCrown(n));

/* infinity like symbol - let's divide the problem into smaller steps
*                   *
* *               * *
* * *           * * *
* * * *       * * * *
* * * * *   * * * * *
* * * * * * * * * * *
*/
// let's draw each part as a crown
// first, notice that we draw stars, then spaces, then stars again in a mirror way?
// confusing enough, the spaces are counted: rightSpaces + leftSpaces - 1: middle 1 is an intersection
function crown(num, symbol = "*"){
  let output = "";

  // equation of spaces amount
  let spaceCount = (num - 1)*4 - 1;

  // row by row
  for(let row = 1; row <= num; row++){
    // first side stars: based on level-1
    for(let stars = 1; stars <= row; stars++)
      output += symbol + " ";

    // spaces are calculated using the equation above and times 2 again to add all needed spaces
    for(let spaces = 1; spaces < spaceCount; spaces++)
      output += " ";

    // now draw the second side stars, same as the first side ones
    for(let stars = 1; stars <= row; stars++)
      output += symbol + " ";

    // jump 1 line to continue
    output += "\n";

    // remove 4 spaces off space count each row you visit (2 for each triangle)
    spaceCount -= 4;
  }
  // at the last line, 1 extra star is printed. just slice the result without it (3 charcters "* \n")
  return output.slice(0, output.length - 3);
}

/* 
* * * * * * * * * * *
* * * * *   * * * * *
* * * *       * * * *
* * *           * * *
* *               * *
*                   *
*/
function reverseCrown(num, symbol = "*"){

}

/* infinity like symbol
*                   *
* *               * *
* * *           * * *
* * * *       * * * *
* * * * *   * * * * *
* * * * * * * * * * *
* * * * *   * * * * *
* * * *       * * * *
* * *           * * *
* *               * *
*                   *
*/
function infinity(num, symbol = "*"){
  let output = crown(num, symbol);

  // first, we are working on double the rows-1. but notice that the shape resembles to a crown as well
  // for(let row = 1; row <)
}