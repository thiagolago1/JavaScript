const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

//Modulo http só para exemplo
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom Dia')
    res.end()
}).listen(8080)