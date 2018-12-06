//ES2015

//Criar um objeto
const pessoa = {
    nome: 'Th',
    idade: 23,
    endereco: { 
        logradouro: 'Rua ABC',
        numero: 15000
    }
}

//Aqui está dizendo, tire de dentro do objeto, o atributo nome e idade
const { nome, idade } = pessoa;
console.log (nome, idade)

const { nome: n, idade: i} = pessoa;
console.log(n, i)

//Nesse caso, como não tem sobrenome nem bemHumorado no atributo pessoa, daria undefinned,
//mas, passando o atribudo dentro das chaves, funciona
const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

//Nesse caso ele vai extrair as 3 variáveis dentro de endereco
const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)