function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `
}

const produto = {
    nome: 'Notebook',
    preco: 3000,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 40000, desc: 0.15 }

console.log(getPreco.call(carro))  
console.log(getPreco.apply(carro))


//Função CALL: passa diretamente nos parâmetros do call, cada um dos parâmetros que serão passados para a função
//o primeiro parâmetro é sempre o contexto e depois todos os outros parâmetros
console.log(getPreco.call(carro, 0.17, '$'))

//Função APPLY: passa parâmetros dentro de um array
//o primeiro parâmetro é sempre o contexto e depois todos os outros parâmetros dentro do array
console.log(getPreco.apply(carro, [0.17, '$']))