// goal is to check if an str is a floating number
// difficulty: easy +

let str = "12.5";
console.log("Is '" + str + "' a float? " + isFloat(str));

function isFloat(str){
  let len = str.length;
  let countPoint = 0;

  // let's first count the occurences of points '.' 
  for(let i = 0; i < len; i++) 
    if(str[i] == '.') countPoint++;

  // if there is more than 1 point, it's not a legal float
  // a trailing point is considered integer not float
  if(countPoint !== 1 || str[len - 1] == ".") return false;

  // else means it's a float
  else return true;
}