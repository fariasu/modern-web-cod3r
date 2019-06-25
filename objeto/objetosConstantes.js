// pessoa -> 123(end de memória) -> { ... }
const pessoa = { nome: 'Farias' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456(end de memória) -> { ... } 
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // não deixa excluir,adicionar ou modificar o objeto ou os atributos dele

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Farias'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
