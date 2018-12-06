let a = 3
//O Let não fica no global, a variável é apenas local

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

//No NODE tudo é modularizado

console.log(this.a)
console.log(global.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c) 
console.log(module.exports === this) //o module.exports é igual ao 'this'
console.log(module.exports) //vai me retornar os objetos do this 'c, d, e'


//criando uma variável maluca: sem var e let!
//criando uma variável sem var e let, você está colocando diretamente no global do node
abc = 3 //Não faça isso!
console.log(global.abc)

//module.exports = { e: 456, f: false, g: 'teste' }

