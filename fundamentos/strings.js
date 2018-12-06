const escola = "Tchexbl1nks"

//Me informa o caractere na posição 4
console.log(escola.charAt(8))

//Pega o valor na tabela asci/unicode
console.log(escola.charCodeAt(3))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Flins->'.concat(escola).concat("!"))
console.log(escola.replace(/\d/, 'i'))

//gera Array
console.log('Jon, JonJon, Jonzin'.split(','))
console.log('Jon, JonJon, Jonzin'.split('X'))