let anguloTrianga = 60;
let anguloTriangb = 60;
let anguloTriangc = 60;

let somaAngulosTringulos = anguloTrianga + anguloTriangb + anguloTriangc
let anguloTriangPositivo  = anguloTrianga > 0 && anguloTriangb > 0 && anguloTriangc > 0

if(anguloTriangPositivo){
if(somaAngulosTringulos === 180) {
    console.log(true);
} else { 
    console.log(false);
};
} else {
    console.log('Erro: ângulo inválido');  
}
