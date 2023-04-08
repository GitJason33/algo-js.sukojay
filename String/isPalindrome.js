// goal is to check if a word is palindrome (even if reversed they stay the same)
// difficulty: easy +

let word = 'noon';
console.log("'" + word + "' is palindrome? " + isPalindrome(word));

function isPalindrome(word){
  let len = word.length;

  // check indexes in parallel, one ascending from 0 to middle, one descending from lastIndex to middle
  // if any parallel characters aren't equal, then it's not palindrome
  for(let i = 0, j = len - 1; j >= Math.floor(len / 2); i++, j--){
    if(word[i] != word[j]) return false;
  }
  // I compared j instead of i to reduce 1 comparison at the end ☺
  return true;
}