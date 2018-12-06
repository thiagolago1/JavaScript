const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[2])

valores[4] = 10
console.log(valores)
console.log(valors.length)

//push para adicionar novos elementos no array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//Pegar o último valor do array e retornar
console.log(valores.pop())
//Outra forma é com delete
delete valores[0]
console.log(valores)

console.log(typeof valores)