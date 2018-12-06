//Esta classe vai utilizar os modulos criados em outros arquivos

//Para importar utilizando o CommonsJS -> sistemas de módulos do node, utiliza-se a palavra 'require'

const moduloA = require('./moduloA') //Caminho relativo pois está na mesma pasta
const moduloB =  require('./moduloB') //O que foi esportado dos módulos está nas constantes criadas

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)