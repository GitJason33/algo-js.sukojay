// goal is to count how many times a little string occured in a phrase
// difficulty: medium

let str = "a";
let phrase = "that kid asked me to play with him basketball!"; 
console.log("Length is: " + phrase.length);
console.log(`'${str}' occured ${hasOccured(str, phrase)} times in the phrase.`);

function hasOccured(str, phrase){
  let len = phrase.length;
  let strLen = str.length;

  // means we are counting empty spaces inside the phrase
  if(strLen === 0) return len + 1;
  let counter = 0;
  
  for(let i = 0; i <= len - strLen; i++){
    // let's first form a sub-string from the index going strLength steps
    let part = phrase.slice(i, i+strLen);

    // check if that part is an occurence of counter
    if(part == str) counter++;
  }
  return counter;
}