// goal is to check if the string is made only of digits
// difficulty: easy

let str = '34aq';
console.log(isNumber(str));

function isNumber(str){
  let len = str.length;
  
  // no need to check empty strings
  if(len === 0) return false;

  // check each character if it belongs to numbers using character encoding in ascii
  for(let i = 0; i < len; i++)
    if(str.charAt(i) < "0" || str.charAt(i) > "9")
      return false;

  return true;
}