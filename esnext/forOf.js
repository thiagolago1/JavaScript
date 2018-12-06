//For Of - intera em cima de valores. Diferente do For in que intera em cima de índices
for (let letra of 'Codando') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntoMap) {
    console.log(assunto)
}

for (let chave of assuntoMap.keys()) {
    console.log(chave)
}

for (let valor of assuntoMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of assuntoMap.entries()) {
    console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}