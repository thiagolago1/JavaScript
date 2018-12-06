// Pessoa -> 123 -> {...}
const pessoa = {nome: 'Zé'}
pessoa.nome = 'Zezão'
console.log(pessoa)

//Pessoa -> 456 -> {...}
//pessoa = {nome: 'Sebastião'}

Object.freeze(pessoa) //Congela o objeto

pessoa.nome = 'Jow'
pessoa.end = 'Rua 123'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Sebinhas'})
console.log(pessoaConstante)
