const contadorA = require('./isntanciaUnica')
const contadorB = require('./isntanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorB.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorD.inc()
console.log(contadorC.valor, contadorD.valor)