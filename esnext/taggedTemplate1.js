//Tagged Template - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Ze'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)