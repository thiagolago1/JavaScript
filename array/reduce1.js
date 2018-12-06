const alunos = [
     {nome: 'Ze', nota: 8.3, bolsista: false},
     {nome: 'Zezin', nota: 7.3, bolsista: true},
     {nome: 'Zezo', nota: 8.3, bolsista: false},
     {nome: 'Zez', nota: 9.3, bolsista: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)