//Par nome/valor

const saudacoes = 'Opa' //Contexto léxico 1, diz respeito ao local físico

function exec() {
    const saudacoes = 'Qualé' // Contexto léxico 2
    return saudacoes
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Ze',
    idade: 32,
    endereco: {
        logradouro: 'Rua tal',
        numero: 123,
    }
}

console.log(saudacoes)
console.log(exec())
console.log(cliente)