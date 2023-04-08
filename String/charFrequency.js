// goal is to count each character inside a string and draw a characters bar chart inside the console using a symbol like * (don't include tabulation or new lines)
// difficulty: medium

/**
 * counter = 0, when character occurs
 * result += char
 * function isCounted(result, char) => returns if a character has already been counted to continue
 * innerLoop : counts from i till length - 1: 
 * result += counter
 */
let phrase = "aaaabbbbbbbbbbbbbbbbbbbbbbbbbbbb\n\tbbbbbbbbbbbbaaaaaaaaaCCCCddDDDDDDDDaaaaaaa";
let frequency = calculateFrequency(phrase);
let displayChart = barChart(frequency, "*"); 

// console.table(frequency);
console.log(displayChart);


function calculateFrequency(phrase){
  let len = phrase.length;
  if(len === 0) return '';
  let result = new Map(); // a map is more efficient than an array here
  
  for(let i = 0; i < len; i++){
    let ch = phrase[i];
    
    // check if the character has been counted
    if(!isCounted(result, ch)){
      let counter = 0;

      // now, start searching for occurences and count from i till end
      for(let j = i; j < len; j++){
        if(phrase[j] == ch) counter++;
      }
      // add the number of counted chars you found to result
      result.set(ch, counter);
    }
  }return result;
}


// this function checks if the character has been counted in result
function isCounted(freq, ch){
  if(freq == '') return false; // empty means not counted
  if(ch == "\n" || ch == "\t") return true; // exclude tabulations and new lines

  // check if the map 'freq' has this character to see if it was counted
  if(freq.has(ch)) return true;
  else return false;
}


// this function will display the bar chart of the frequency
function barChart(frequency, symbol = "*"){
  if(frequency.size === 0) return "Nothing to display here.";
  
  let output = "";
  for(let value of frequency.entries()){
    output += `${value[0]} <=> `;

    // add symbols depending on the counter
    let counter = value[1];
    for(let j = 0; j < counter; j++)
      output += symbol;
      
    // jump 1 line after adding symbols
    output+= "\n"; 
  }
  return output;
}