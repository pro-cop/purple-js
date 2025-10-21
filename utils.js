function randomNumber(min, max){
    if(max>min){
        return Math.ceil(Math.random()*(max+1-min))
    }

    console.error("wrong numbers")
    return
}

function isEven(n){
        return !(n%2)
}

function currencyConverter(amount, initialCurrency, resultCurrency){
    const curToUSD = {
        "USD": 1,
        "RUB": 0.01,
        "EUR" : 1.4,
        "CHF" :1.2,
        "CNY" : 0.1
    }
    let ratio = curToUSD[initialCurrency]/curToUSD[resultCurrency]
    return new Intl.NumberFormat("ru-RU", {
        style: "currency", currency: resultCurrency

    }).format(amount*ratio)
}

export {randomNumber, isEven, currencyConverter}