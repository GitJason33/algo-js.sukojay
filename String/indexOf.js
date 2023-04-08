// goal is to find the first occurence of a little string in a phrase like indexOf() function
// difficulty: medium

let str = "beach";
let phrase = "Great! Now I am going to the beach to have fun!";

console.log(`What's the index of '${str}' inside of the phrase? ` + indexOf(str, phrase));

function indexOf(str, phrase){
  let len = phrase.length;
  let strLen = str.length;

  // first occurence of emptiness is 0
  if(strLen === 0) return 0;

  // check each index, made as a word of strLen length, to find the first occurence only
  for(let i = 0; i <= len - strLen; i++){
    let part = phrase.slice(i, i+strLen);

    if(part == str) return i; // return index
  }
  return -1; // not found
}