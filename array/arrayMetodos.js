const pilotos = ['Vetel', 'Alonso', 'Raikonem', 'Massa']
pilotos.pop() //Pop removo o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona o elemento no array
console.log(pilotos)

pilotos.shift() //Remove da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento na primeira posição
console.log(pilotos)

//Adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')  
console.log(pilotos)

//Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Novo Array a partir do índice 2 no caso
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Do 1 até o 4, mas o 4 não entra
console.log(algunsPilotos2)