// goal: make a function to capitalize elements of array 'students' and fix camel case
// goal2: make a function to print an element

const students = ['sPongEBob', 'patrICK', 'sQuiDwArD'];
/**
 * @param {string[]} array 
 * @param {number} index 
 * @param {string} element
 */
//* follow the order of parameters!!
function capitalize(element, index, array){
  array[index] = element[0].toUpperCase() + element.slice(1).toLowerCase();
}
const print = (element) => console.log(element);

//^ easy way to iterate 
// for(let i in students)  capitalize(students, i, students[i]);
// console.log(students);

//^ other way is use callbacks and forEach()
students.forEach(capitalize);
students.forEach(print);

// console.log(students);
