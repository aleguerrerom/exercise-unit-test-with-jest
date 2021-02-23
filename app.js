//app
//console.log("Hello World").....
//aaaa

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // returnamos el valor
    return valueInDollar;
}

const fromDollarToYen  = function(valueInDolar){
    // convertimos el valor a dolares
    let valueInYen = valueInDolar * oneEuroIs["JPY"]/oneEuroIs["USD"];
    // returnamos el valor
    return valueInYen;
}

const fromYenToPound  = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * oneEuroIs["GBP"]/oneEuroIs["JPY"];
    // returnamos el valor
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(7,3)

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }