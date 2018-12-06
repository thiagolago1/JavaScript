const fs = require('fs') //Constante filesystem que está requerendo o módulo filesystem do node

const produto = {
    nome: 'PC',
    preco: '3500,00',
    desconto: 0.20
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo com sucesso!')
})