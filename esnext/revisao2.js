// Arrow Function - sintaxe reduzida para funções - função arrow é sempre anônima
const soma = (a, b) => a + b
console.log(soma(2, 3))

//Arrow Function (this) - o this na função arrow esta associado ao local na qual está escrita
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//Parâmetros default - capacidade de em cima de um atributo/função, definir um valor
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Mais forte!')

//Operador Rest/Spread - colocar vários parâmetros que serão agrupados em um array
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))