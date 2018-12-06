//json é javascript object notation

//um objeto em js não é a mesma coisa que json

//Um par de chaves representa um objeto, assim como um par de [] representa um array

//Objeto em js é uma coleção de chaves/valores

const produto1 = {}
produto1.nome = 'Celular TOP da Balada Monstra!'
produto1.preco = 5323.99
produto1['Desconto'] = 0.40 //Evitar atributos com espaço, exemplo "Desconto Bacana"

console.log(produto1)

const produto2 = {
    nome: 'Camisa Polo',
    preco: 49.99

}

console.log(produto2)