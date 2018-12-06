const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelos: 'V40',
    velMax: 230
}

console.log(ferrari.__proto__) //Diz que o protótipo é um objeto vazio
console.log(ferrari.__proto__ === Object.prototype) 
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)