const alunos = [
    {nome: 'Ze', nota: 8.3, bolsista: false},
    {nome: 'Zezin', nota: 7.3, bolsista: true},
    {nome: 'Zezo', nota: 8.3, bolsista: false},
    {nome: 'Zez', nota: 9.3, bolsista: true},
]

//Retornar V ou F para "Todos os Alunos são Bolsistas?"
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Retornar se "Algum aluno é bolsista?"
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));

