//O fatorial é representado pelo sinal !
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
//4! = 4 x 3 x 2 x 1 = 24

let fatorial = 1;
for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}
console.log(fatorial)