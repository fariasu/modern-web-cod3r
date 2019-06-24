// tagged templates - processar o template dentro de uma funcao
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Farias'
const situacao = 'Aprovado'
console.log( `${aluno} está ${situacao}.`)
console.log(tag `${aluno} está ${situacao}.`)