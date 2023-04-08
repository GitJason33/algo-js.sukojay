// goal is to replace a given string with another string inside a phrase
// difficulty: medium

let str = "Suko";
let replacement = "Sukka";
let phrase = "Sukojay abracadabra";
console.log("New phrase becomes: " + replace(str, replacement, phrase));

function replace(str, replacement, phrase){
  let len = phrase.length;
  let strLen = str.length;
  let result = "";

  // if the str is empty, then it should tagert in-between characters
  if(strLen === 0) {
    for(let i = 0; i < len - 1; i++)
      result += phrase[i] + replacement;
    
    return result + phrase[len - 1];
  }
  // no need to replace a non existent sub-string
  if(phrase.indexOf(str) === -1) return phrase;

  // will slice a part that's length is same as str's, and then check to replace it
  for(let i = 0; i < len; ){
    let part = phrase.slice(i, i+strLen);

    if(part == str){
      result += replacement;
      i+= strLen; // depends on how long is the str that was replaced
    }else{
      result += phrase[i];
      i++;
    }
  }return result;
}