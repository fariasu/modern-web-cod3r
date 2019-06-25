// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marcaDoProduto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marcaDoProduto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Farias',
        idade: 20,
        endereco: {
            logradouro: 'Av Bento Gonçalves',
            numero: 1133
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: '9'

    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)