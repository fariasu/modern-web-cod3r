// arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// arrow function (this)
const lexico1 =() => console.log(this === exports)
lexico1()

// parametros default]
function log(text = 'Node') {
    console.log(text)
}

log()
log('Sou mais forte')

// operador rest(agrupar)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
