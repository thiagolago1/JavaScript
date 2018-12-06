
const peso1 = 1.0
//O number é uma maneira de chamar como número, esse caso
//Também pode ser usado para outros métodos
const peso2 = Number('2.1')

console.log(peso1, peso2)

//Aqui está verificando se o valor é inteiro
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 8.123
const avaliacao2 = 9.765

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)
console.log(media)

//Para mostrar menos casas decimais passando o parâmetro com o toFixed
console.log(media.toFixed(2))

//Converter número em string
console.log(media.toString())

//Transformar o numero em binário
console.log(media.toString(2))

//Informa o tipo da variável com o typeof
console.log(typeof media)
console.log(typeof Number)