// goal is to check if the string is made up of only whitespaces
// difficulty: very easy

let str = "\n \ty";
console.log(isSpaces(str));

function isSpaces(str){
  let len = str.length;

  if(len === 0) return false;

  // check if characters are made up of only whitespaces
  for(let i = 0; i < len; i++){
    if(str.charAt(i) != " " && str.charAt(i) != "\n" && str.charAt(i) != "\t") 
      return false;
  }
  return true;
}