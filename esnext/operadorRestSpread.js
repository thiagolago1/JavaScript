//Operador ... rest(juntar) / spread(espalhar)
//Usar rest com parâmetros de função

//Usar spread com objeto
const funcionario = { nome: 'Ze', salario: 14000.00 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//Usar spread com array
const grupoA = [ 'Ze', 'Ze2', 'Ze3' ]
const grupoFinal = ['Zezin', ...grupoA, 'Zezao']
console.log(grupoFinal)