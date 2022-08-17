// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);
// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers); // O retorno é [2, 3]

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => console.log(numbers), 3000);
const despesas = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
//   const renda = 1000;

// const despesasMensal = (renda, despesas, callback) => {
//     const despesaTotal = callback(despesas)
//     const saldofinal = renda - despesaTotal

//     console.log(`Balanço do mês:
//     Recebido: R$ ${renda},00
//     Gasto: R$ ${despesaTotal},00
//     Saldo: R$ ${saldofinal},00`);

// };
// const somaDespesas = (despesas) => {
//   const custoItem = despesas.map((item => Object.values(item)));
//   const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
// return despesaTotal;
// }
// despesasMensal(renda, despesas, somaDespesas)

const userFullName = ({ firtsName, lastName}) => `Hello! My name is ${firtsName} ${lastName}`;

const getUser = (param) => {
  const userToReturn = {
  firtsName: "Ivan",
  lastName: "Ivanovich",
  nationality: "Russian"
};

return param(userToReturn);
};
getUser(userFullName);


