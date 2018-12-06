const produtos = [
    {nome: 'Notebook', preco: 2300, fragil: true},
    {nome: 'Mesa', preco: 1500, fragil: true},
    {nome: 'Copo de Vidro', preco: 14.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 10.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))