// goal is to find the maximum out of a list
// difficulty: 1

const getMax = (...numbers) => {
  let max = numbers[0];

  for(let i = 1; i < numbers.length; i++)
    if(max < numbers[i]) 
      max = numbers[i];
  
  return max;
}
console.log('maximum is: ' + getMax(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));