// goal: shuffle the array of cards (strings), putting elements in random positions

let cards = ["A", "2", '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
shuffle(cards);
console.log(cards);


// my solution - space inefficient
function shuffle(array){
  let indexes = []; // used to see if rand was put
  let shuffled = [];
  
  let len = array.length;
  for(let i = 0; i < len; ){
    let rand = Math.floor(Math.random() * len);
    if(!indexes.includes(rand)){
      indexes.push(rand);
      shuffled.push(array[indexes[i]]);
      i++;
    } else continue;
  }
  for(let i in array) array[i] = shuffled[i];
}

// Bro code's optimized way
function shuffleBro(array){
  let currentIndex = array.length - 1;
  
  while(currentIndex != 0){
    let randomIndex = Math.floor(Math.random() * array.length);
    // swap
    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex]; 
    array[randomIndex] = temp;
    
    currentIndex--;
  }
}