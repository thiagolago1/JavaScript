Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
       if(callback(this[i], i, this)) {
        newArray.push(this[i])
       }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2300, fragil: true},
    {nome: 'Mesa', preco: 1500, fragil: true},
    {nome: 'Copo de Vidro', preco: 14.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 10.99, fragil: false}
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))