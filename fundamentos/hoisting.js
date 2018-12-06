//O JS não segue muito bem o algoritmo passo a passo, de cima pra baixo 

console.log('a = ', a)
var a = 2
console.log('a = ', a)

//No JS o 'hoisting' vai 'içar' ou 'jogar pra cima' a variável
//Em qualquer outra linguagem daria problema na leitura porque a variável
//tem que ser declarada antes da leitura
//No JS, reconhece a variável a mesmo depois da leitura
//Isso é só uma curiosidade da linguagem
//--------------------------------------------------------//

console.log('b = ', b)
let b = 2
console.log('b = ', b)

//Com o LET o 'hoisting' não acontece, dará erro
