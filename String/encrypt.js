// goal is to encrypt a given text string using a method of your choice 
// difficulty: depends on complexity, starting medium

/*
 * I will try to encrypt a text using a randomizer method that gives a random number 
 * to increment or decrement by it. these numbers are represented as: 
 * -> 0 is the actual character
 * -> negative goes backwards in ascii code (won't use)
 * -> positive goes forward in ascii code
 * 
 * the numbers will be stored inside a string for decryption. this string has seperated numbers
 * that represents the go into a character using ascii encoding
 */

let text = "Sukojay";
let security = ""; // puts the numbers
let encrypted = encrypt(text);

console.log(security);
console.log(encrypted);

// test randomizer and ascii code
// console.log(Math.floor(Math.random() * 1001) + 50)
// console.log(text.charCodeAt(0));
// console.log(String.fromCharCode(156,122,87));

function encrypt(text){
  let len = text.length;
  if(len === 0) return '';
  let result = "";

  for(let i = 0; i < len; i++){
    // randomizer from 1 to 1000
    let rand = Math.floor(Math.random() * 1000) + 1; 
    
    // take the ascii code of the character and add the random to it
    let ch = rand + text.charCodeAt(i);

    // add the encrypted character in result
    result += String.fromCharCode(ch);

    // add that number for decryption
    security += rand + " ";
  }
  return result;
}