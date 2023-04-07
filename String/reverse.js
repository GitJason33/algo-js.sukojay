// goal is to reverse a given string
// difficulty: easy

let str = "mansour"; // reverse is trever
console.log(reverse(str)); 

function reverse(str){
  let len = str.length;
  
  // no need to reverse an empty or single-character string
  if(len < 2) return str;
  let result = "";

  // put the letter, then put before it next letter, keep doing that
  for(let i = 0; i < len; i++)
    result = str.charAt(i) + result;
  return result;
}