// goal: sort an array of numbers in the way of javascript array.sort() function

let numbers = [9, 8,11, 1, 5, 4, 10, 2, 7, 6, 3, 0];

// negative = y is bigger
// positive = x is bigger
// 0 = they are equal
// descending: y - x; all in reverse.
const ascending = (x, y) => x - y;

/**
 * @param {number[]} array 
 * @param {number} value 
 */
const sort = (array) => {
  let len = array.length;
  for(let i = 0; i < len - 1; i++)
    for(let j = 0; j < len-i-1; j++)
      if(ascending(array[j], array[j+1]) > 0)
        [array[j], array[j+1]] = [array[j+1], array[j]];
}
console.log(numbers);

// use built in, here i used an anonymous function
// numbers.sort((x, y) => x - y);

// or manual. but use a more efficient sort method
sort(numbers);

// reverse it to make it descending
numbers = numbers.reverse();
console.log(numbers);