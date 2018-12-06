
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
//É uma forma reduzida de fazer if-else

//é a mesma coisa que isso aqui também:
//      const resultado = nota => {
//          return nota >= 7 ? 'Aprovado' : 'Reprovado'
//  }

console.log(resultado(7.1))


