// goal is to format a text that's 'key:value' pair into a visually beautiful text format like:
// one................1
// ten...............10
// eleven............11 good for arrays
// difficulty: medium

let entries = [
  "One:1",
  "seven:7",
  "ten:10",
  "ninety-nine:99",
  "hundred:100",
  "seven-hundred-thirty-seven:739",
  "thousand:1,000",
  "a million:1,000,000",
  "a billion:1,000,000,000"
];
entries.forEach(element => console.log(formatEntry(element)));

function formatEntry(entry){
  let len = entry.length;
  if(len === 0) return entry;

  // first take the words to get their lengths seperately and add them when needed
  let words = entry.split(":"); // ['key', 'value']
  
  // set a maximum characters number on 1 line (100 here) and include words lengths
  let maxLine = 80 - words[0].length - words[1].length;
  let result = words[0];

  // specify the character you want as a seperator (1 character only)
  let symbol = "_";

  for(let i = 0; i < maxLine; i++)
    result += symbol;

  return result + words[1]; 
}