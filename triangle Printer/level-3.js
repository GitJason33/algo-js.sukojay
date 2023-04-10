// goal here is to draw even harder shapes which are: infinity-like symbol with crowns
// difficulty: challenging

let n = 5; 
// console.log(crown(n));
// console.log(reverseCrown(n));
console.log(infinity(n));


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
// confusing enough, the spaces are counted: rightSpaces + leftSpaces - 2: middle 1 is an intersection, and 1 extra space is counted
function crown(num, symbol = "*"){
  let output = "";

  // equation of spaces amount
  let spaceCount = (num - 1)*4 - 2;

  // row by row
  for(let row = 1; row <= num; row++){
    // first side stars: based on level-1
    for(let stars = 1; stars <= row; stars++)
      output += symbol + " ";

    // spaces are calculated using the equation above and times 2 again to add all needed spaces
    for(let spaces = 1; spaces <= spaceCount; spaces++)
      output += " ";

    // now draw the second side stars, resembles to level-2 triangle
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
// currentSpace is the max number of spaces that were counted. counting it from 1 above spcaceCount
function reverseCrown(num, symbol = "*"){
  let output = "";
  let spaceCount = (num - 1)*4 - 2;
  let currentSpace = spaceCount + 2; // count an extra space because of star printing on left side
  
  for(let row = 1; row <= num; row++){
    // first, notice that left resembles to level-1
    for(let stars = row; stars <= num; stars++)
      output += symbol + " ";
    
    // now, draw the spaces like above using the equation, but ascending instead
    for(let spaces = currentSpace; spaces < spaceCount; spaces++)
      output += " ";

    // now draw the second side stars, resemble to level-2's reverse triangle
    for(let stars = row; stars <= num; stars++)
      output += symbol + " ";

    // avoid an extra generation of star at 1st line
    if(row === 1) output = output.slice(0, output.length - 2);
    
    // jump 1 line after finishing 1 row
    output += '\n';

    // remove 4 spaces from current space each row you visit (2 for each triangle)
    currentSpace -= 4;
  }

  return output;
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
  // jump 1 line before going on, as we removed a new line in crown()
  let output = crown(num, symbol) + '\n';

  // draw the reverse crown starting from row 2
  let spaceCount = ((num - 1)*4 - 2) - 4; // starting row 2 not 1, we start 4 steps before
  let currentSpace = spaceCount - 2; 
  
  for(let row = 2; row <= num; row++){
    for(let stars = row; stars <= num; stars++)
      output += symbol + " ";
    
    for(let spaces = currentSpace; spaces < spaceCount; spaces++)
      output += " ";

    for(let stars = row; stars <= num; stars++)
      output += symbol + " ";

    output += '\n';
    currentSpace -= 4;
  }

  return output;
}