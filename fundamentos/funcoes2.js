//Armazenando função em uma variável

const imprimirSoma = function(a, b) {

    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenar uma função arrow em uma variável
const soma = (a, b) => { //=> substitui o function
    return a + b
}

console.log(soma(2, 3))

//Retorno implícito 
//quando não tem chaves, o corpo da função só tem uma única linha, só retorna uma linha de função
const subtracao = (a, b) => a-b
console.log(subtracao(2, 3))  

const imprimir2 = a => console.log(a)
imprimir2('Teste!')