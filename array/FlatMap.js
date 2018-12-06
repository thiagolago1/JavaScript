const escola = [{
    nome: 'Turma Manha1',
    alunos: [{
        nome: 'Zezinho',
        nota: 8.1
    }, {
        nome: 'Zezão',
        nota: 9.3
    }]
}, {
    nome: 'Turma Manha2',
    alunos: [{
        nome: 'Sebastião',
        nota: 8.9
    }, {
        nome: 'Sebas',
        nota: 7.3
    }]
}]    

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)
