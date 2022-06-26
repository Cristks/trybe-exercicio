//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallWord = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggestWord.length) {
     biggestWord = array[index];   
    }
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallWord.length) {
    smallWord = array[index];
    }
}

console.log(biggestWord);
console.log(smallWord);