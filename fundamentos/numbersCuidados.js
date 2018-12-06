
//Nessa operação ele retorna 'infinity'
console.log(7 / 0)

//String dividido por número. O JS verifica se o conteúdo entre aspas pode ser dividido e executa
console.log("10" / 2)

//Aqui ele não reconhece como número
console.log("Teste" * 2)

//O JS NÃO tem uma precisão perfeita com números de ponto flutuante, nesse caso ele não retorna 0.8 e sim 0.7999999999999999
console.log(0.1 + 0.7)

//Essa meneira não pode ser executada
//console.log(10.toString())

//Executa normalmente com 2 casas decimais, no exemplo
//Chama o literal dentro do parênteses e a função fora. Não necessariamente precisa declarar uma variável
console.log((123.1233).toFixed(2))

//Aqui não vai somar, vai concatenar porque a string tem preferência
console.log('3' + 2)
console.log('3' - 2)