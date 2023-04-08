// goal is to decrypt an encrypted text
// difficulty: depends on complexity, here medium +

// using my encryption algorithm, decryption will have a key to open the text
// the text is stored inside an object along with its security key
let important = {
  text: "Sukojay",
  security: "" // puts the random numbers
}
console.log("Text initially: " + important['text']);

encrypt(important);
console.log("Text encrypted: " + important['text']);

// decrypt(important);
// console.log("Text decrypted: " + important['text']);

// I changed to using an object
function encrypt(toEncrypt){
  let len = toEncrypt['text'].length;
  if(len === 0) return;
  let result = "";

  for(let i = 0; i < len; i++){
    let rand = Math.floor(Math.random() * 1000) + 1; 

    let ch = rand + toEncrypt['text'].charCodeAt(i);

    result += String.fromCharCode(ch);

    toEncrypt['security'] += rand + " ";
  }
  toEncrypt['text'] = result;
}

// decrypt the text
function decrypt(encrypted){
  
}