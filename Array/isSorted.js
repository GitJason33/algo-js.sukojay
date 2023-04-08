// goal is to check if an array is sorted ascendingly (to see descending, just use the opposite comparing operator)
// difficulty: easy +

let array = [1,2,3,4,7,6];
console.log(isSorted(array));

function isSorted(array){
  let len = array.length;
  if(len < 2) return true;

  // check if every 2 adjacent elements are escalating only
  for(let i = 0; i < len - 1; i++)
    if(array[i] > array[i + 1]) return false;
  
  return true;
}