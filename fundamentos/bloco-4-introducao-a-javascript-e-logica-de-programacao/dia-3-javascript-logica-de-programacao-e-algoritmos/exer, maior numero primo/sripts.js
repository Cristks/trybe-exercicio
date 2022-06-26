//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let biggestPrimNumber = 0
for (let number = 2; number <= 50; number += 1) {
    let isPrime = true
    for (let numberDivisor = 2; numberDivisor < number; numberDivisor += 1) {
        if (number % numberDivisor === 0) {
            isPrime = false;
        }
    }


if (isPrime) {
    biggestPrimNumber = number;
}
}
console.log(biggestPrimNumber);
