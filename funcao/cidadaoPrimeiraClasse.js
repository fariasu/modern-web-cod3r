// Função em JS é First-Class Object (Citizens)
// Higher-Order Function

//criar de forma literal
function fun1() {  }

// armazenar uma fucao em uma variavel
const fun2 = function() {  }  // funcao anonima

// armazenar uma funcao em um array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// armazenar uma funcao em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa '}
console.log(obj.falar())

// passar funcao como param
function run(fun) {
    fun()
}

run(function() { console.log('Execurando ...') })

// uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma (2, 3)(4)
const cincoMais = soma(2,3)
cincoMais(4)