// goal is to swap 2 elements in an array
// difficulty: very easy

let array = [1,2,3];
swap(array, 0, 2); // numbers indicate indexes

// imagine having 2 glasses: one with chocolate shake, other with water. swap their content!
function swap(array, i, j){
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}