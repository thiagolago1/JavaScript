
let valor //não inicializar

console.log(valor) //Undefined (essa variável não foi definida)
console.log(valor2) //Is not defined (essa variável nunca foi inicializada)

valor = null //ausência de valor
console.log(valor)
console.log(valor.toString()) //Type Error

const produto = {}
console.log(produto.preco) //o preço não está definido dentro do produto
console.log(produto)

produto.preco = 3.50 //Agora eu to definindo o preço
console.log(produto)

produto.preco = undefined //Evitar atribuir undefined de forma explícita, deixar para a linguagem definir
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)