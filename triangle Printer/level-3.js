// goal here is to draw even harder shapes which are: infinity-like symbol with triangles
// difficulty: challenging

let n = 5; 
console.log(leftTriangle(n));

/* infinity like symbol - let's divide the problem into smaller steps
*               *
* *           * *
* * *       * * *
* * * *   * * * *
* * * * * * * * *
* * * *   * * * *
* * *       * * *
* *           * * 
*               *
*/

// let's draw the triangles of that infinity-like
// this triangle resembles to a mix of level-1 versions
import * as Level_1 from "./level-1.js";

function leftTriangle(num, symbol = "*"){
  let output = Level_1.triangle(num, symbol);

  // start from row 2 with reverse triangle
  output += Level_1.reverseTriangle(num - 1);

  return output;
}