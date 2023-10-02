fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Erro ao buscar dados da API');
    }
    return response.json();
  })
  .then((data) => {
    displayExchangeData(data);
  })
  .catch((error) => {
    console.error(error);
    
  });

function displayExchangeData(data) {
  const usdbrl = data.USDBRL;
  const eurbrl = data.EURBRL;

  document.getElementById("usdbrl").innerHTML = usdbrl.name;
  document.getElementById("ask").innerHTML = usdbrl.ask;
  document.getElementById("pctChange").innerHTML = usdbrl.pctChange;
  document.getElementById("high").innerHTML = usdbrl.high;
  document.getElementById("low").innerHTML = usdbrl.low;

  document.getElementById("eurusd").innerHTML = eurbrl.name;
  document.getElementById("askEur").innerHTML = eurbrl.ask;
  document.getElementById("pctChangeEur").innerHTML = eurbrl.pctChange;
  document.getElementById("highEur").innerHTML = eurbrl.high;
  document.getElementById("lowEur").innerHTML = eurbrl.low;
}
