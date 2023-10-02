fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL').then(r=>{
    return r.json()
    
}).then(corpo=>{
    console.log(corpo)
    document.getElementById("usdbrl").innerHTML=corpo.USDBRL.name
    document.getElementById("ask").innerHTML=corpo.USDBRL.ask
    document.getElementById("pctChange").innerHTML=corpo.USDBRL.pctChange
    document.getElementById("high").innerHTML=corpo.USDBRL.high
    document.getElementById("low").innerHTML=corpo.USDBRL.low

    console.log(corpo.EURBRL)
    document.getElementById("eurusd").innerHTML=corpo.EURBRL.name
    document.getElementById("askEur").innerHTML=corpo.EURBRL.ask
    document.getElementById("pctChangeEur").innerHTML=corpo.EURBRL.pctChange
    document.getElementById("highEur").innerHTML=corpo.EURBRL.high
    document.getElementById("lowEur").innerHTML=corpo.EURBRL.low
})
    





