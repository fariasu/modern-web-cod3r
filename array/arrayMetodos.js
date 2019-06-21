const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push('Vestappen') // adiciona um elemento ao final array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no inicio do array
console.log(pilotos)

// splice pode adicionar ou remover elementos do array

// adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1,) // remove o terceiro elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array (a partir do indice (2) até o final)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // retorna um novo array do indice 1 até o 4 (mas não inclui o indice 4)
console.log(algunsPilotos2)