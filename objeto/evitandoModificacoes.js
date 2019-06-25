// Object.preventExtensions (não pode adicionar novos elementos)
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco:1.99,
    tag: 'promoção'
})
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borrracha escolar' // essa linha não vai ter efeito
delete produto.tag
console.log(produto)

// Object.seal ( não pode adicionar ou exluir novos elementos)
const pessoa = {
    nome: 'Farias',
    idade: 20
}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoal))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado e com valores constantes ( não pode modificar, modificar ou excluir os atributos)

