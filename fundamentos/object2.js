console.log(typeof Object)
console.log(typeof new Object) //Como se fosse um construtor

const cliente = function() {}
    console.log(typeof cliente)
    console.log(typeof new cliente)

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())
