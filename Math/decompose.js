// goal is to split a given number into an array of numbers using % and / (modulus and division)
// difficulty: medium

let number = "2147864950";
console.log(decompose(number));

function decompose(number){
  let array = [];

  let len = number.length;
  if(len === 1) return [number];

  // let's slice the first character: 123 / 100 = 1.23 -> int(1.23 % 10) = 1 <=> this way
  for(let i = 0, div = 1; i < len; i++, div *= 10){
    let part = Math.floor((number / div) % 10);

    array.unshift(part); // put element to the front 
  }
  return array;
}