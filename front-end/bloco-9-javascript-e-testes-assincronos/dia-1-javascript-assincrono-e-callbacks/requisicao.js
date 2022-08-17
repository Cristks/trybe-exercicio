const fetch = require('node-fetch');

// const getRandonAdvice = () => {;
// const url = 'https://api.adviceslip.com/advice';

// const request = fetch(url)
// .then((response) => (response.json()))
// // .then((Object) => console.log(Object.slip.advice));
// //podemos desestruturar
// // .then((Object) => {
 
// //     const { slip } = Object;
// //     const { id, advice } = slip;
// //     console.log(advice);

// //  });
// // 
// .then(({slip: {id, advice}}) => console.log(advice))
// .catch((error) => console.log('Ops, algo deu errado!', error.errno));
// };

// getRandonAdvice()

const getRandonAdvice = async () => {
    try {
    const url = 'https://api.adviceslip.com/advice';
    const request = await fetch(url);
    const json = await request.json();
    const { slip } = json
    //console.log(slip);
    //console.log(json);
    const { id, advice } = slip
    console.log(advice)
    return advice;
    } catch (error) {
//console.log(' ops algo deu errado')
return ' always check your Internte connection and ypur URLS.';

    };

};

getRandonAdvice();