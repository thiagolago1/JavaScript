//Objeto que representa uma sequência para pegar os Ids..

const sequence = { //recebe um objeto que tem um atributo interno
    _id: 1,
    get id() { //função get que vai retornar um id
        return this._id++
    }
}

const produtos = {}

//essa função recebe um objeto do tipo produto
//se o id do não estiver setado ele adiciona um novo elemento
//se estiver setado ele substitui pela versão mais nova
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

//função para pegar o produto pelo id
function getProduto(id) {
    return produtos[id] || {}
}

//função para retornar todos os produtos
function getProdutos() {
    return Object.values(produtos)
}

//função excluir produto
function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }