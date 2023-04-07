// goal is to check if the string is made only of low and up case letters
// difficulty: easy

let str = "letter123";
console.log(isLetters(str));

function isLetters(str){
  let len = str.length;

  // no need to check empty strings
  if(len === 0) return false;

  // check if letter belongs to a range of characters encoding in ascii
  for(let i = 0; i < len; i++){
    if((str.charAt(i) < "A" || str.charAt(i) > "Z") && (str.charAt(i) < "a" || str.charAt(i) > "z")){
      return false;
    }
  }return true;
}