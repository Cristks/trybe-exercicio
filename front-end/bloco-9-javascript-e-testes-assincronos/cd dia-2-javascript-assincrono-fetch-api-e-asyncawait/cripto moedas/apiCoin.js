

// //apicoin.js
// const fetchCoins = async () => {
//     const url = 'https://api.coincap.io/v2/assets';

//     const coins = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.data)
//     .catch((error) => error.toString());
//     console.log(coins);

//     console.log(coins)
//     return coins;

// }
// const setCoins = async () => {
//     const coins = await fetchCoins();

//     const coinsList = document.getElementById('coins-list');

//     coins.forEach((coin) => {
//         const newLi = document.createElement('li');
//         const usdPrice = Number(coin.priceUsd);

//         newLi.innerText = `${coin.name} (${coin.symboll}): ${usdPrice.toFixed(2)}`;
//         coinsList.appendChild(newLi);

//     });

// }
// window.onload = () => setCoins();

const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';
  
    const coins = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());
  
    console.log(coins);
    return coins;
  }
  
  
  // const setCoins = async () => {
  //   const coins = await fetchCoins();
  
  //   const coinsList = document.getElementById('coins-list');
  
  //   // coins.forEach((coin) => {
  //   //   const newLi = document.createElement('li');
  //   //   const usdPrice = Number(coin.priceUsd);
  //   coins
  //   .filter((coin) => Number(coin.rank) <= 10)
  //   .forEach((coin) => {
  //     const newLi = document.createElement('li');
  //     const usdPrice = Number(coin.priceUsd);

  //     newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

  //     coinsList.appendChild(newLi);
    
      

  
  //     // newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;
  
  //     // coinsList.appendChild(newLi);
  //   });
  // }
// const fetchUsdCurrencies = async () => {
//   const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
  
// }
  
//   window.onload = () => setCoins();
// const fetchCoins = async () => {
//   const url = 'https://api.coincap.io/v2/assets';

//   const coins = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.data)
//     .catch((error) => error.toString());

//   console.log(coins);
//   return coins;
// };

const fetchUsdCurrencies = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
  const usdEndpoint = '/currencies/usd.min.json'
  const url = baseUrl.concat(usdEndpoint);

  const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((error) => error.toString());

  return usdCurrencies;
};

const setCoins = async () => {
  const coins = await fetchCoins();
  const usdCurrencies = await fetchUsdCurrencies();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      const brlPrice = usdPrice * usdCurrencies.brl;

      newLi.innerText = `${coin.name} (${coin.symbol}): ${brlPrice.toFixed(2)}`;

      coinsList.appendChild(newLi);
    });
};

window.onload = () => setCoins();