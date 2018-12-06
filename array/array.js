//O array em JS na verdade é um objeto
//Não existe um array nativo no JS

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Ze0', 'Ze1', 'Ze2')
console.log(aprovados)

aprovados = ['Ze3', 'Ze4', 'Ze5']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Ze6'
aprovados.push('Ze7')
console.log(aprovados.length)

aprovados[9] = 'Ze8'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Ze1', 'Ze2', 'Ze3']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)