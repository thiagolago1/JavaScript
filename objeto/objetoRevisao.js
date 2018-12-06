//Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Th',
        idade: 23,
        endereco: {
            logradouro: 'Rua Tal',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Ze',
        idade: 20
    }, {
        nome: 'Sebastião',
        idade: 50
    }],
    calcularValorSeguro: function() {

    }
}

carro.proprietario.endereco.numero = 12300
carro['proprietario']['endereco']['logradouro'] = 'Grandão'
console.log(carro)