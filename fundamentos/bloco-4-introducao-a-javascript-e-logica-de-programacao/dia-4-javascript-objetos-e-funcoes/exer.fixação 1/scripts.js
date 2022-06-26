let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3};

//crie um player

let player = { 
name: 'Marta',
lastName: 'Silva',
age: 34,
medals: {golden: 2, solver: 3 },
playersbestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],

}




//Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idades.');
//Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

//[2006, 2007, 2008, 2009, 2010, 2018]

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + players.bestInTheWorld.length + ' vezes.');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');
