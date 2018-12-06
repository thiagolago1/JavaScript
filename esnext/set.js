//Set - estrutura de conjunto não indexada e não aceita repetição
const times = new Set()
times.add('Flamengo')
times.add('Fluminense').add('Botafogo').add('Vasco')
times.add('Flamengo')

console.log(times)
console.log(times.size)
console.log(time.has('Vasco'))
console.log(times.has('Vasco'))
times.delete('Fluminense')
console.log(times.has('Botafogo'))

const nomes = ['Ze', 'Sebastião', 'Jonnnn', 'Kbeça']
const nomesSet = new Set(nomes)
console.log(nomesSet)