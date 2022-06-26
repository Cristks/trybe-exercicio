// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra
let word = 'maça';

let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);