//aça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
let n = 5;
let symbols = '*';
let imputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
imputLine = imputLine + symbols;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    console.log(imputLine);
}

