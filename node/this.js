console.log(this === global) 
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //o THIS dentro de uma função aponta para global. Fora, ele aponta para module.exports

    this.perigo = '...' //Nesse cenário o this esta inserindo o perigo para dentro do global, pois está dentro de uma função
}

this.perigo2 = '...1' //Nesse caso esta só retornando dentro do module.exports


logThis()